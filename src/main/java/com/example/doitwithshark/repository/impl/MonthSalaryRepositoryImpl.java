package com.example.doitwithshark.repository.impl;

import com.example.doitwithshark.model.MonthSalary;
import com.example.doitwithshark.repository.JpaMonthSalaryRepository;
import com.example.doitwithshark.repository.MonthSalaryRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class MonthSalaryRepositoryImpl implements MonthSalaryRepository {

    private final JpaMonthSalaryRepository jpaMonthSalaryRepository;

    public MonthSalaryRepositoryImpl(JpaMonthSalaryRepository jpaMonthSalaryRepository) {
        this.jpaMonthSalaryRepository = jpaMonthSalaryRepository;
    }

    @Override
    public Optional<MonthSalary> findById(String id) {
        return this.jpaMonthSalaryRepository.findById(id);
    }

    @Override
    public List<MonthSalary> findAll() {
        return this.jpaMonthSalaryRepository.findAll();
    }

    @Override
    public MonthSalary getMonthSalaryByEmp_idAndMonth(String id, int month) {
        return this.jpaMonthSalaryRepository.getMonthSalaryByEmp_idAndMonth(id, month);
    }

    @Override
    public MonthSalary save(MonthSalary monthSalary) {
        return this.jpaMonthSalaryRepository.save(monthSalary);
    }

    @Override
    public void deleteById(String id) {
        this.jpaMonthSalaryRepository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        this.jpaMonthSalaryRepository.deleteAll();
    }

    @Override
    public long count() {
        return this.jpaMonthSalaryRepository.count();
    }

    @Override
    public List<MonthSalary> getMonthSalariesByEmp_id(String id) {
        return this.jpaMonthSalaryRepository.getMonthSalariesByEmp_id(id);
    }
}
