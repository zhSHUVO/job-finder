import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addJobThunk } from "../features/jobs/jobSlice";

const AddJob = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading } = useSelector((state) => state.job);

    const [jobData, setJobData] = useState();
    const submitJobData = (e) => {
        setJobData({
            ...jobData,
            [e.target.name]: e.target.value,
        });
    };

    const submit = (e) => {
        e.preventDefault();
        dispatch(addJobThunk(jobData));
        navigate("/");
    };
    return (
        <div>
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
                <div className="lg:pl-[14rem] mt-[5.8125rem]">
                    <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                        <h1 className="mb-10 text-center lws-section-title">
                            Add New Job
                        </h1>

                        <div className="max-w-3xl mx-auto">
                            <form onSubmit={submit} className="space-y-6">
                                <div className="fieldContainer">
                                    <label
                                        htmlFor="lws-JobTitle"
                                        className="text-sm font-medium text-slate-300"
                                    >
                                        Job Title
                                    </label>
                                    <select
                                        onChange={submitJobData}
                                        id="lws-JobTitle"
                                        name="title"
                                        required
                                    >
                                        <option value="" hidden defaultValue>
                                            Select Job
                                        </option>
                                        <option>Software Engineer</option>
                                        <option>Software Developer</option>
                                        <option>Full Stack Developer</option>
                                        <option>MERN Stack Developer</option>
                                        <option>DevOps Engineer</option>
                                        <option>QA Engineer</option>
                                        <option>Product Manager</option>
                                        <option>Social Media Manager</option>
                                        <option>Senior Executive</option>
                                        <option>Junior Executive</option>
                                        <option>Android App Developer</option>
                                        <option>IOS App Developer</option>
                                        <option>Frontend Developer</option>
                                        <option>Frontend Engineer</option>
                                    </select>
                                </div>

                                <div className="fieldContainer">
                                    <label htmlFor="lws-JobType">
                                        Job Type
                                    </label>
                                    <select
                                        onChange={submitJobData}
                                        id="lws-JobType"
                                        name="type"
                                        required
                                    >
                                        <option value="" hidden defaultValue>
                                            Select Job Type
                                        </option>
                                        <option>Full Time</option>
                                        <option>Internship</option>
                                        <option>Remote</option>
                                    </select>
                                </div>

                                <div className="fieldContainer">
                                    <label htmlFor="lws-JobSalary">
                                        Salary
                                    </label>
                                    <div className="flex border rounded-md shadow-sm border-slate-600">
                                        <span className="input-tag">BDT</span>
                                        <input
                                            onChange={submitJobData}
                                            type="number"
                                            name="salary"
                                            id="lws-JobSalary"
                                            required
                                            className="!rounded-l-none !border-0"
                                            placeholder="20,00,000"
                                        />
                                    </div>
                                </div>

                                <div className="fieldContainer">
                                    <label htmlFor="lws-JobDeadline">
                                        Deadline
                                    </label>
                                    <input
                                        onChange={submitJobData}
                                        type="date"
                                        name="deadline"
                                        id="lws-JobDeadline"
                                        required
                                    />
                                </div>

                                <div className="text-right">
                                    <button
                                        disabled={isLoading}
                                        type="submit"
                                        id="lws-submit"
                                        className="cursor-pointer btn btn-primary w-fit"
                                    >
                                        Edit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AddJob;
