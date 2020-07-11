package com.example.doitwithshark.service;

import com.example.doitwithshark.model.EmployeeHours;
import com.example.doitwithshark.model.SumMonth;
import com.example.doitwithshark.model.User;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface EmployeeHoursService {
    public EmployeeHours create(User user, LocalDate date, int hours);
    public Optional<EmployeeHours> findById(int id);
    public List<EmployeeHours> findAll();
    public void deleteById(int id);
    public void deleteAll();
    public long count();
    public List<EmployeeHours> getEmployeeHoursByEmp_idAndDate(String id, LocalDate date);
    public List<EmployeeHours> getEmployeeHoursByEmp_idAndMonth(String id, int month);
    public int totalEmployeeHoursByEmp_idAndMonth(String id, int month);
    public List<EmployeeHours> getEmployeeHoursByEmp_idAndYear(String id, int year);
    public int totalEmployeeHoursByEmp_idAndYear(String id, int year);
    public List<Object[]> getEmployeeHoursByEmp_id(String id);
}
