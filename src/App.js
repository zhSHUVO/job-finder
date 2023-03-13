import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import SideBar from "./components/Nav/SideBar";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <SideBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-job" element={<AddJob />} />
                <Route path="/edit/:jobId" element={<EditJob />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
