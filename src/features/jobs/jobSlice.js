import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJob, getJobs } from "./jobApi";

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

export const addJobThunk = createAsyncThunk("job/addJobData", async (data) => {
    const job = await addJob(data);
    return job;
});

const jobSlice = createSlice({
    name: "job",
    initialState,
    extraReducers: (builder) => {
        builder
            // get jobs
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
            })

            // add job
            .addCase(addJobThunk.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(addJobThunk.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs.push(action.payload);
            })
            .addCase(addJobThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default jobSlice.reducer;