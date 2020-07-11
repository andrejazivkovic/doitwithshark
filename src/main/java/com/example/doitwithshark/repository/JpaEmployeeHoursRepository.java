package com.example.doitwithshark.repository;

import com.example.doitwithshark.model.EmployeeHours;
import com.example.doitwithshark.model.SumMonth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface JpaEmployeeHoursRepository extends JpaRepository<EmployeeHours, Integer> {
    @Query(value = "SELECT * FROM emp_hours e WHERE e.emp_id=:id AND e.date=:date", nativeQuery = true)
    List<EmployeeHours> getEmployeeHoursByEmp_idAndDate(@Param("id") String id, @Param("date") LocalDate date);
    @Query(value = "SELECT * FROM emp_hours e WHERE e.emp_id=:id AND month(e.date)=:month", nativeQuery = true)
    List<EmployeeHours> getEmployeeHoursByEmp_idAndMonth(@Param("id") String id, @Param("month") int month);
    @Query(value = "SELECT * FROM emp_hours e WHERE e.emp_id=:id AND year(e.date)=:year", nativeQuery = true)
    List<EmployeeHours> getEmployeeHoursByEmp_idAndYear(@Param("id") String id, @Param("year") int year);
    @Query(value = "SELECT SUM(e.hours) FROM emp_hours e WHERE e.emp_id=:id AND month(e.date)=:month", nativeQuery = true)
    int totalEmployeeHoursByEmp_idAndMonth(@Param("id") String id, @Param("month") int month);
    @Query(value = "SELECT SUM(e.hours) FROM emp_hours e WHERE e.emp_id=:id AND year(e.date)=:year", nativeQuery = true)
    int totalEmployeeHoursByEmp_idAndYear(@Param("id") String id, @Param("year") int year);
    @Query(value = "SELECT SUM(e.hours), month(e.date) FROM emp_hours e WHERE e.emp_id=:id GROUP BY month(e.date) ORDER BY month(e.date)", nativeQuery = true)
    List<Object[]> getEmployeeHoursByEmp_id(@Param("id") String id);
}
