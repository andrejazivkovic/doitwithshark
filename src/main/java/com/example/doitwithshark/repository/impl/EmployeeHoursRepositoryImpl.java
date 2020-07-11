package com.example.doitwithshark.repository.impl;

import com.example.doitwithshark.model.EmployeeHours;
import com.example.doitwithshark.model.SumMonth;
import com.example.doitwithshark.model.User;
import com.example.doitwithshark.repository.EmployeeHoursRepository;
import com.example.doitwithshark.repository.JpaEmployeeHoursRepository;
import org.springframework.data.relational.core.sql.In;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public class EmployeeHoursRepositoryImpl implements EmployeeHoursRepository {

    private final JpaEmployeeHoursRepository jpaEmployeeHoursRepository;

    public EmployeeHoursRepositoryImpl(JpaEmployeeHoursRepository jpaEmployeeHoursRepository) {
        this.jpaEmployeeHoursRepository = jpaEmployeeHoursRepository;
    }

    @Override
    public EmployeeHours createEmployeeHours(User user, LocalDate date, int hours) {
        EmployeeHours employeeHours = EmployeeHours.createEmployeeHours(user, date, hours);
        return this.jpaEmployeeHoursRepository.save(employeeHours);
    }

    @Override
    public EmployeeHours save(EmployeeHours employeeHours) {
        return this.jpaEmployeeHoursRepository.save(employeeHours);
    }

    @Override
    public List<EmployeeHours> getEmployeeHoursByEmp_idAndDate(String id, LocalDate date) {
        return this.jpaEmployeeHoursRepository.getEmployeeHoursByEmp_idAndDate(id, date);
    }

    @Override
    public List<EmployeeHours> getEmployeeHoursByEmp_idAndMonth(String id, int month) {
        return this.jpaEmployeeHoursRepository.getEmployeeHoursByEmp_idAndMonth(id, month);
    }

    @Override
    public List<EmployeeHours> getEmployeeHoursByEmp_idAndYear(String id, int year) {
        return this.jpaEmployeeHoursRepository.getEmployeeHoursByEmp_idAndYear(id, year);
    }

    @Override
    public int totalEmployeeHoursByEmp_idAndMonth(String id, int month) {
        return this.jpaEmployeeHoursRepository.totalEmployeeHoursByEmp_idAndMonth(id, month);
    }

    @Override
    public int totalEmployeeHoursByEmp_idAndYear(String id, int year) {
        return this.jpaEmployeeHoursRepository.totalEmployeeHoursByEmp_idAndYear(id, year);
    }

    @Override
    public Optional<EmployeeHours> findById(int id) {
        return this.jpaEmployeeHoursRepository.findById(id);
    }

    @Override
    public List<EmployeeHours> findAll() {
        return this.jpaEmployeeHoursRepository.findAll();
    }

    @Override
    public void deleteById(int id) {
        this.jpaEmployeeHoursRepository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        this.jpaEmployeeHoursRepository.deleteAll();
    }

    @Override
    public long count() {
        return this.jpaEmployeeHoursRepository.count();
    }

    @Override
    public List<Object[]> getEmployeeHoursByEmp_id(String id) {
        return this.jpaEmployeeHoursRepository.getEmployeeHoursByEmp_id(id);
    }

}
