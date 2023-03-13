import axios from "../../utils/axios";

export const getJobs = async () => {
    const res = await axios.get("/jobs");
    return res.data;
};

export const addJob = async (data) => {
    const res = await axios.post("/jobs", data);
    return res.data;
};