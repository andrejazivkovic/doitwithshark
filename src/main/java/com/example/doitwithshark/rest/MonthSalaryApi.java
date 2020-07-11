package com.example.doitwithshark.rest;
import com.example.doitwithshark.model.MonthSalary;
import com.example.doitwithshark.service.MonthSalaryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(path = "api/monthsSalary", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class MonthSalaryApi {

    private final MonthSalaryService monthSalaryService;

    public MonthSalaryApi(MonthSalaryService monthSalaryService) {
        this.monthSalaryService = monthSalaryService;
    }

    @GetMapping
    public List<MonthSalary> getAllMonthSalary() {
        return this.monthSalaryService.findAll();
    }

    @GetMapping("/findByEmp/{id}")
    public List<MonthSalary> getAllMonthSalary(@PathVariable String id) {
        return this.monthSalaryService.getMonthSalariesByEmp_id(id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MonthSalary> getMonthSalary(@PathVariable String id) throws Exception {
        MonthSalary monthSalary = this.monthSalaryService.findById(id).orElseThrow(Exception::new);
        if(monthSalary==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<MonthSalary>(monthSalary, HttpStatus.OK);
    }

    @GetMapping("/user/{id}/month/{month}")
    public ResponseEntity<MonthSalary> getMonthSalary(@PathVariable String id, @PathVariable int month) throws Exception {
        MonthSalary monthSalary = this.monthSalaryService.getMonthSalaryByEmp_idAndMonth(id, month);
        if(monthSalary==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<MonthSalary>(monthSalary, HttpStatus.OK);
    }

}
