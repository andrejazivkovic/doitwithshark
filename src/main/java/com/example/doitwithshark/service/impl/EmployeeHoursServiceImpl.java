package com.example.doitwithshark.service.impl;

import com.example.doitwithshark.model.EmployeeHours;
import com.example.doitwithshark.model.SumMonth;
import com.example.doitwithshark.model.User;
import com.example.doitwithshark.repository.EmployeeHoursRepository;
import com.example.doitwithshark.repository.JpaEmployeeHoursRepository;
import com.example.doitwithshark.service.EmployeeHoursService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeHoursServiceImpl implements EmployeeHoursService {

    private final EmployeeHoursRepository employeeHoursRepository;

    public EmployeeHoursServiceImpl(EmployeeHoursRepository employeeHoursRepository) {
        this.employeeHoursRepository = employeeHoursRepository;
    }

    @Override
    public EmployeeHours create(User user, LocalDate date, int hours) {
        return this.employeeHoursRepository.createEmployeeHours(user,date, hours);
    }

    @Override
    public Optional<EmployeeHours> findById(int id) {
        return this.employeeHoursRepository.findById(id);
    }

    @Override
    public List<EmployeeHours> findAll() {
        return this.employeeHoursRepository.findAll();
    }

    @Override
    public void deleteById(int id) {
        this.employeeHoursRepository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        this.employeeHoursRepository.deleteAll();
    }

    @Override
    public long count() {
        return this.employeeHoursRepository.count();
    }

    @Override
    public List<EmployeeHours> getEmployeeHoursByEmp_idAndDate(String id, LocalDate date) {
        return this.employeeHoursRepository.getEmployeeHoursByEmp_idAndDate(id, date);
    }

    @Override
    public List<EmployeeHours> getEmployeeHoursByEmp_idAndMonth(String id, int month) {
        return this.employeeHoursRepository.getEmployeeHoursByEmp_idAndMonth(id, month);
    }

    @Override
    public int totalEmployeeHoursByEmp_idAndMonth(String id, int month) {
        List<EmployeeHours> employeeHours = this.getEmployeeHoursByEmp_idAndMonth(id, month);
        if(employeeHours.isEmpty())
            return 0;
        return this.employeeHoursRepository.totalEmployeeHoursByEmp_idAndMonth(id, month);
    }

    @Override
    public int totalEmployeeHoursByEmp_idAndYear(String id, int year) {
        List<EmployeeHours> employeeHours = this.getEmployeeHoursByEmp_idAndYear(id, year);
        if(employeeHours.isEmpty())
            return 0;
        return this.employeeHoursRepository.totalEmployeeHoursByEmp_idAndYear(id, year);
    }

    @Override
    public List<Object[]> getEmployeeHoursByEmp_id(String id) {
        return this.employeeHoursRepository.getEmployeeHoursByEmp_id(id);
    }


    @Override
    public List<EmployeeHours> getEmployeeHoursByEmp_idAndYear(String id, int year) {
        return this.employeeHoursRepository.getEmployeeHoursByEmp_idAndYear(id, year);
    }

}
