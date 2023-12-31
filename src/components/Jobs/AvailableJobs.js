import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobThunk } from "../../features/jobs/jobSlice";
import AvailableJobsItem from "./AvailableJobsItem";

const AvailableJobs = () => {
    const dispatch = useDispatch();
    const { filter, sort, search } = useSelector((state) => state.filter);
    const { jobs, isLoading, isError, error } = useSelector(
        (state) => state.job
    );
    useEffect(() => {
        dispatch(getJobThunk());
    }, [dispatch]);

    let content;
    if (isLoading) content = <div>Loading...</div>;
    if (!isLoading && isError) content = <div>{error}</div>;
    if (!isLoading && !isError && jobs?.length === 0)
        content = <div>No job was found!</div>;

    if (!isLoading && !isError && jobs?.length > 0) {
        if (filter) {
            content = jobs
                .filter((job) => job.type === filter)
                .map((job) => <AvailableJobsItem key={job.id} job={job} />);
        }
        if (search) {
            content = jobs
                .filter((job) =>
                    job.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((job) => <AvailableJobsItem key={job.id} job={job} />);
        }
        if (!filter && !search) {
            content = jobs.map((job) => (
                <AvailableJobsItem key={job.id} job={job} />
            ));
        }
    }

    // sorting
    if (!isLoading && !isError && jobs?.length > 0 && sort) {
        if (sort === "Salary (Low to High)") {
            content.sort(
                (a, b) =>
                    parseInt(a.props.job.salary) - parseInt(b.props.job.salary)
            );
        }
        if (sort === "Salary (High to Low)") {
            content.sort(
                (a, b) =>
                    parseInt(b.props.job.salary) - parseInt(a.props.job.salary)
            );
        }
    }

    return (
        <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
            <div className="jobs-list">{content}</div>
        </main>
    );
};

export default AvailableJobs;
