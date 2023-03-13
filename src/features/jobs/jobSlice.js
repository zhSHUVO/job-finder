import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs } from "./jobApi";

const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const getJobThunk = createAsyncThunk("job/getJobData", async () => {
    const jobs = await getJobs();
    return jobs;
});

const jobSlice = createSlice({
    name: "job",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getJobThunk.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getJobThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.jobs = action.payload;
            })
            .addCase(getJobThunk.rejected, (state, action) => {
                state.isLoading = true;
                state.isError = true;
                state.jobs = [];
                state.error = action.error.message;
            });
    },
});

export default jobSlice.reducer;
