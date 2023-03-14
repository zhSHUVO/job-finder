import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filters/filterSlice";
import jobReducer from "../features/jobs/jobSlice";

export const store = configureStore({
    reducer: {
        job: jobReducer,
        filter: filterReducer,
    },
});
