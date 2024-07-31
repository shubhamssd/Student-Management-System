import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<StudentList />} />
        <Route path="/" element={<StudentList />} />
        <Route path="/addStudent" element={<AddStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
