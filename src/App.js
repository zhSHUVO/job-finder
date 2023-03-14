import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import SideBar from "./components/Nav/SideBar";
import AddJob from "./pages/AddJob";
import Home from "./pages/Home";
import UpdateJob from "./pages/UpdateJob";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <SideBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-job" element={<AddJob />} />
                <Route path="/update/:jobId" element={<UpdateJob />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
