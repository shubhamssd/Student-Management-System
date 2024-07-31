import React from "react";
import { useNavigate } from "react-router-dom";

const StudentList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="container mx-auto my-8">
          <button
            onClick={() => navigate("/addStudent")}
            className="bg-slate-950 hover:bg-teal-400 mx-40 my-12 font-semibold px-20 py-2 rounded-xl text-white"
          >
            Add Student
          </button>
        </div>

        <div className="mx-40">
          <table className="shadow">
            <thead>
              <tr>
                <th className="px-6 py-3 uppercase tracking-wide">Name</th>
                <th className="px-6 py-3 uppercase tracking-wide">Email</th>
                <th className="px-6 py-3 uppercase tracking-wide">
                  Department
                </th>
                <th className="px-6 py-3 uppercase tracking-wide">Branch</th>
                <th className="px-6 py-3 uppercase tracking-wide">Phone</th>
                <th className="px-6 py-3 uppercase tracking-wide">Address</th>
                <th className="px-6 py-3 uppercase tracking-wide">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className="hover:bg-teal-400">
                <td className="px-6 py-3 tracking-wide">Shiv Yadav</td>
                <td className="px-6 py-3 tracking-wide">shivyadav@gmail.com</td>
                <td className="px-6 py-3 tracking-wide">Cse</td>
                <td className="px-6 py-3 tracking-wide">4th</td>
                <td className="px-6 py-3 tracking-wide">9989086634</td>
                <td className="px-6 py-3 tracking-wide">Pune</td>
                <td className="px-6 py-3 tracking-wide">
                  <a href="#">Edit📝</a>
                  <a href="#" className="ml-4">
                    Delete 🗑️
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
