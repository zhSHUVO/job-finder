import axios from "../../utils/axios";

export const getJobs = async () => {
    const res = await axios.get("/jobs");
    return res.data;
};

export const addJob = async (data) => {
    const res = await axios.post("/jobs", data);
    return res.data;
};

export const deleteJob = async (id) => {
    const res = await axios.delete(`/jobs/${id}`);
    return res.data;
};

export const updateJob = async (id, job) => {
    const res = await axios.patch(`/jobs/${id}`, job);
    return res.data;
};
