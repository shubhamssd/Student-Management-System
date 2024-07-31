import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:9090/students"; // Adjust this URL as needed

class StudentService {
  saveStudent(student) {
    return axios.post(STUDENT_API_BASE_URL, student);
  }
}

const studentService = new StudentService();
export { studentService };
