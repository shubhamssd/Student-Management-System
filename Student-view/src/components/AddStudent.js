import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { studentService } from "../services/StudentService"; // Import correctly

const AddStudent = () => {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    email: "",
    department: "",
    branch: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setStudent({ ...student, [e.target.name]: value });
  };

  const saveStudent = (e) => {
    e.preventDefault();
    studentService.saveStudent(student)
      .then((response) => {
        console.log("Student saved successfully", response);
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error saving the student!", error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setStudent({
      id: "",
      name: "",
      email: "",
      department: "",
      branch: "",
      phone: "",
      address: "",
    });
  };

  const navigate = useNavigate();
  return (
    <div className="max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8">
      <div className="text-4xl tracking-wider font-bold text-center py-4 px-8 text-white">
        <p>Add Student</p>
      </div>
      <div className="mx-10 my-2">
        <input
          onChange={(e) => handleChange(e)}
          name="id"
          type="text"
          className="w-full py-2 my-4 text-slate-800"
          placeholder="ID"
          value={student.id}
        ></input>
        <input
          onChange={(e) => handleChange(e)}
          name="name"
          type="text"
          className="w-full py-2 my-4 text-slate-800"
          placeholder="Name"
          value={student.name}
        ></input>
        <input
          onChange={(e) => handleChange(e)}
          name="email"
          type="email"
          className="w-full py-2 my-4 text-slate-800"
          placeholder="Email"
          value={student.email}
        ></input>
        <input
          onChange={(e) => handleChange(e)}
          name="department"
          type="text"
          className="w-full py-2 my-4 text-slate-800"
          placeholder="Department"
          value={student.department}
        ></input>
        <input
          onChange={(e) => handleChange(e)}
          name="branch"
          type="text"
          className="w-full py-2 my-4 text-slate-800"
          placeholder="Branch"
          value={student.branch}
        ></input>
        <input
          onChange={(e) => handleChange(e)}
          name="phone"
          type="number"
          className="w-full py-2 my-4 text-slate-800"
          placeholder="Phone"
          value={student.phone}
        ></input>
        <input
          onChange={(e) => handleChange(e)}
          name="address"
          type="text"
          className="w-full py-2 my-4 text-slate-800"
          placeholder="Address"
          value={student.address}
        ></input>
      </div>

      <div className="flex my-4 space-x-4 px-20">
        <button
          onClick={saveStudent}
          className="bg-green-500 hover:bg-green-700 py-2 px-6 rounded-xl"
        >
          {" "}
          Save{" "}
        </button>
        <button
          onClick={reset}
          className="bg-red-500 hover:bg-red-700 py-2 px-6 rounded-xl"
        >
          {" "}
          Clear{" "}
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 hover:bg-blue-700 py-2 px-6 rounded-xl"
        >
          {" "}
          Cancel{" "}
        </button>
      </div>
    </div>
  );
};

export default AddStudent;
