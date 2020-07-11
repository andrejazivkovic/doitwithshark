package com.example.doitwithshark.repository;

import com.example.doitwithshark.model.EmployeeHours;
import com.example.doitwithshark.model.SumMonth;
import com.example.doitwithshark.model.User;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface EmployeeHoursRepository {
    EmployeeHours createEmployeeHours(User user, LocalDate date, int hours);
    EmployeeHours save(EmployeeHours employeeHours);
    List<EmployeeHours> getEmployeeHoursByEmp_idAndDate(String id, LocalDate date);
    List<EmployeeHours> getEmployeeHoursByEmp_idAndMonth(String id, int month);
    List<EmployeeHours> getEmployeeHoursByEmp_idAndYear(String id, int year);
    int totalEmployeeHoursByEmp_idAndMonth(String id, int month);
    int totalEmployeeHoursByEmp_idAndYear(String id, int year);
    Optional<EmployeeHours> findById(int id);
    List<EmployeeHours> findAll();
    void deleteById(int id);
    void deleteAll();
    long count();
    List<Object[]> getEmployeeHoursByEmp_id(String id);

}
