import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { addJob, deleteJob, getJobs, updateJob } from "./jobApi";

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

export const deleteJobThunk = createAsyncThunk(
    "/job/deleteJobData",
    async (id) => {
        const job = await deleteJob(id);
        return job;
    }
);

export const updateJobThunk = createAsyncThunk(
    "/job/updateJobData",
    async ({ id, updatedJobData }) => {
        const job = await updateJob(id, updatedJobData);
        return job;
    }
);

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
            })

            // delete job
            .addCase(deleteJobThunk.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(deleteJobThunk.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;

                state.jobs = state.jobs.filter(
                    (job) => job.id !== action.meta.arg
                );
            })
            .addCase(deleteJobThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })

            // update job
            .addCase(updateJobThunk.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(updateJobThunk.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                const data = action.payload;
                const jobToUpdate = state.jobs.map((job) =>
                    job.id === action.payload.id ? { ...job, data } : job
                );
                state.jobs = jobToUpdate;
            })
            .addCase(updateJobThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default jobSlice.reducer;
