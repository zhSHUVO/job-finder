import React from "react";
import { useDispatch } from "react-redux";
import AvailableJobs from "../components/Jobs/AvailableJobs";
import { searchQurey, sortBy } from "../features/filters/filterSlice";

const Home = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
                <div className="lg:pl-[14rem]  mt-[5.8125rem]">
                    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                        <h1 className="lws-section-title">
                            All Available Jobs
                        </h1>
                        <div className="flex gap-4">
                            <div className="search-field group flex-1">
                                <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                                <input
                                    onChange={(e) =>
                                        dispatch(searchQurey(e.target.value))
                                    }
                                    type="text"
                                    placeholder="Search Job"
                                    className="search-input"
                                    id="lws-searchJob"
                                />
                            </div>
                            <select
                                onChange={(e)=>dispatch(sortBy(e.target.value))}
                                id="lws-sort"
                                name="sort"
                                autoComplete="sort"
                                className="flex-1"
                            >
                                <option>Default</option>
                                <option>Salary (Low to High)</option>
                                <option>Salary (High to Low)</option>
                            </select>
                        </div>
                    </div>
                    <AvailableJobs />
                </div>
            </div>
        </div>
    );
};

export default Home;
