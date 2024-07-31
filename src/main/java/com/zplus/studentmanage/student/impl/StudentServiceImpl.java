package com.zplus.studentmanage.student.impl;

import java.util.List;
import java.util.Optional;

import com.zplus.studentmanage.student.StudentService;
import com.zplus.studentmanage.student.StudentRepository;
import com.zplus.studentmanage.student.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public String createStudent(Student student) {
        studentRepository.save(student);
        return "Saved Successfully";
    }

    @Override
    public List<Student> readStudents() {
        return studentRepository.findAll();
    }

    @Override
    public boolean deleteStudent(Long id) {
        try {
            studentRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public boolean updateStudent(Long id, Student updatedStudent) {
        Optional<Student> studentOptional = studentRepository.findById(id);
        if (studentOptional.isPresent()) {
            Student student = studentOptional.get();
            student.setName(updatedStudent.getName());
            student.setEmail(updatedStudent.getEmail());
            student.setBranch(updatedStudent.getBranch());
            student.setDepartment(updatedStudent.getDepartment());
            student.setPhone(updatedStudent.getPhone());
            student.setAddress(updatedStudent.getAddress());
            studentRepository.save(student);
            return true;
        }
        return false;
    }
}
