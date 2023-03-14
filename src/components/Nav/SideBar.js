import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectedFilter } from "../../features/filters/filterSlice";

const SideBar = () => {
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <ul className="space-y-4">
                <li>
                    <Link
                        to={"/"}
                        onClick={() => dispatch(selectedFilter(""))}
                        className="main-menu menu-active"
                        id="lws-alljobs-menu"
                    >
                        <i className="fa-solid fa-briefcase"></i>
                        <span> All Available Jobs</span>
                    </Link>
                    <ul className="space-y-6 lg:space-y-2 ">
                        <li>
                            <button
                                onClick={() =>
                                    dispatch(selectedFilter("Internship"))
                                }
                                className="sub-menu"
                                id="lws-internship-menu"
                            >
                                <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                                Internship
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() =>
                                    dispatch(selectedFilter("Full Time"))
                                }
                                className="sub-menu"
                                id="lws-fulltime-menu"
                            >
                                <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                                Full Time
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() =>
                                    dispatch(selectedFilter("Remote"))
                                }
                                className="sub-menu"
                                id="lws-remote-menu"
                            >
                                <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                                Remote
                            </button>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link
                        to={"/add-job"}
                        className="main-menu"
                        id="lws-addJob-menu"
                    >
                        <i className="fa-solid fa-file-circle-plus"></i>
                        <span>Add NewJob</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
