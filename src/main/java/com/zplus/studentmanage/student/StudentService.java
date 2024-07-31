package com.zplus.studentmanage.student;

import com.zplus.studentmanage.student.Student;

import java.util.List;

public interface StudentService {
    String createStudent(Student student);
    List<Student> readStudents();
    boolean deleteStudent(Long id);
    boolean updateStudent(Long id, Student updatedStudent);
}
