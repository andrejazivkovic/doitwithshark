package com.example.doitwithshark.repository;

import com.example.doitwithshark.model.EmployeeHours;
import com.example.doitwithshark.model.MonthSalary;
import com.example.doitwithshark.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JpaMonthSalaryRepository extends JpaRepository<MonthSalary, String> {
    @Query(value = "SELECT * FROM months_salary ms WHERE ms.emp_id=:id AND ms.month=:month", nativeQuery = true)
    MonthSalary getMonthSalaryByEmp_idAndMonth(@Param("id") String id, @Param("month") int month);
    @Query(value = "SELECT * FROM months_salary ms WHERE ms.emp_id=:id ORDER by ms.month", nativeQuery = true)
    List<MonthSalary> getMonthSalariesByEmp_id(@Param("id") String id);
}
