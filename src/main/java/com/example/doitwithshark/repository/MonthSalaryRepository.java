package com.example.doitwithshark.repository;

import com.example.doitwithshark.model.EmployeeHours;
import com.example.doitwithshark.model.MonthSalary;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface MonthSalaryRepository {
    Optional<MonthSalary> findById(String id);
    List<MonthSalary> findAll();
    MonthSalary getMonthSalaryByEmp_idAndMonth(String id, int month);
    MonthSalary save(MonthSalary monthSalary);
    void deleteById(String id);
    void deleteAll();
    long count();
    List<MonthSalary> getMonthSalariesByEmp_id(String id);
}
