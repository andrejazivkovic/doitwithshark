package com.example.doitwithshark.service;

import com.example.doitwithshark.model.MonthSalary;
import com.example.doitwithshark.model.User;
import org.springframework.data.repository.query.Param;

import java.time.Month;
import java.util.List;
import java.util.Optional;

public interface MonthSalaryService {
    public MonthSalary save(MonthSalary monthSalary);
    public Optional<MonthSalary> findById(String id);
    public List<MonthSalary> findAll();
    public void deleteById(String id);
    public void deleteAll();
    public long count();
    public void update(MonthSalary monthSalary);
    public MonthSalary getMonthSalaryByEmp_idAndMonth(String id, int month);
    public List<MonthSalary> getMonthSalariesByEmp_id(String id);

}
