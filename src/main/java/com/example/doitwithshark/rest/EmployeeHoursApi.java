package com.example.doitwithshark.rest;

import com.example.doitwithshark.model.EmployeeHours;
import com.example.doitwithshark.model.EmployeeHoursWithoutId;
import com.example.doitwithshark.model.SumMonth;
import com.example.doitwithshark.model.User;
import com.example.doitwithshark.service.EmployeeHoursService;
import org.springframework.http.HttpStatus;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(path = "api/employeeHours", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class EmployeeHoursApi {

    private final EmployeeHoursService employeeHoursService;

    public EmployeeHoursApi(EmployeeHoursService employeeHoursService) {
        this.employeeHoursService = employeeHoursService;
    }

    @GetMapping
    public List<EmployeeHours> getAllEmployeeHours() {
        return this.employeeHoursService.findAll();
    }
    @GetMapping("/findByEmp/{id}")
    public List<Object[]> getAllEmployeeHours(@PathVariable String id) {
        List<Object[]> employeeHours = this.employeeHoursService.getEmployeeHoursByEmp_id(id);
        return employeeHours;
    }

    @GetMapping("/user/{id}/month/{month}")
    public int getAllEmployeeHoursByMonth(@PathVariable int month, @PathVariable String id) {
        return this.employeeHoursService.totalEmployeeHoursByEmp_idAndMonth(id, month);
    }

    @GetMapping("/user/{id}/year/{year}")
    public int getAllEmployeeHoursByYear(@PathVariable int year, @PathVariable String id) {
        return this.employeeHoursService.totalEmployeeHoursByEmp_idAndYear(id, year);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public EmployeeHours createEmployeeHours(@RequestBody EmployeeHoursWithoutId employeeHoursWithoutId) {
        return this.employeeHoursService.create(employeeHoursWithoutId.getUser(), employeeHoursWithoutId.getDate(), employeeHoursWithoutId.getHours());
    }

    @DeleteMapping("/{id}")
    public void deleteEmployeeHours(@PathVariable int id) {
        this.employeeHoursService.deleteById(id);
    }
}
