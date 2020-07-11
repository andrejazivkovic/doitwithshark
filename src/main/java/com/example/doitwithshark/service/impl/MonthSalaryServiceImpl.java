package com.example.doitwithshark.service.impl;

import com.example.doitwithshark.model.MonthSalary;
import com.example.doitwithshark.repository.JpaMonthSalaryRepository;
import com.example.doitwithshark.repository.MonthSalaryRepository;
import com.example.doitwithshark.service.MonthSalaryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MonthSalaryServiceImpl implements MonthSalaryService {

    private final MonthSalaryRepository monthSalaryRepository;

    public MonthSalaryServiceImpl(MonthSalaryRepository monthSalaryRepository) {
        this.monthSalaryRepository = monthSalaryRepository;
    }


    @Override
    public MonthSalary save(MonthSalary monthSalary) {
        return this.monthSalaryRepository.save(monthSalary);
    }

    @Override
    public Optional<MonthSalary> findById(String id) {
        return this.monthSalaryRepository.findById(id);
    }

    @Override
    public List<MonthSalary> findAll() {
        return this.monthSalaryRepository.findAll();
    }

    @Override
    public void deleteById(String id) {
        this.monthSalaryRepository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        this.monthSalaryRepository.deleteAll();
    }

    @Override
    public long count() {
        return this.monthSalaryRepository.count();
    }

    @Override
    public void update(MonthSalary monthSalary) {
        this.monthSalaryRepository.save(monthSalary);
    }

    @Override
    public MonthSalary getMonthSalaryByEmp_idAndMonth(String id, int month) {
        return this.monthSalaryRepository.getMonthSalaryByEmp_idAndMonth(id, month);
    }

    @Override
    public List<MonthSalary> getMonthSalariesByEmp_id(String id) {
        return this.monthSalaryRepository.getMonthSalariesByEmp_id(id);
    }

}
