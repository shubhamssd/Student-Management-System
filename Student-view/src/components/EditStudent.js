import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { studentService } from '../services/StudentService';

const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: '',
    email: '',
    department: '',
    branch: '',
    phone: '',
    address: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    studentService.getStudentById(id).then((response) => {
      setStudent(response.data);
    }).catch((error) => {
      console.error('There was an error retrieving the student!', error);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent, [name]: value
    }));
  };

  const updateStudent = (e) => {
    e.preventDefault();
    studentService.updateStudent(id, student).then((response) => {
      console.log('Student updated successfully', response.data);
      navigate('/');
    }).catch((error) => {
      console.error('There was an error updating the student!', error);
    });
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Edit Student</h2>
      <form onSubmit={updateStudent}>
        <div className="grid gap-6 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              name="name"
              value={student.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              name="email"
              type="email"
              value={student.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Department</label>
            <input
              name="department"
              value={student.department}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Department"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Branch</label>
            <input
              name="branch"
              value={student.branch}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Branch"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              name="phone"
              type="tel"
              value={student.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Phone"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Address</label>
            <input
              name="address"
              value={student.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Address"
              required
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
