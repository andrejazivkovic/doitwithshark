package com.example.doitwithshark.model;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "emp_hours")
public class EmployeeHours {

    @Transient
    private static int employeeHoursCounter = 1;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @ManyToOne
    @JoinColumn(name="emp_id")
    private User user;

    private LocalDate date;

    private int hours;

    public EmployeeHours() {

    }

    public static int getEmployeeHoursCounter() {
        return employeeHoursCounter;
    }

    public static void setEmployeeHoursCounter(int employeeHoursCounter) {
        EmployeeHours.employeeHoursCounter = employeeHoursCounter;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getHours() {
        return hours;
    }

    public void setHours(int hours) {
        this.hours = hours;
    }

    public static synchronized EmployeeHours createEmployeeHours(User user, LocalDate date, int hours){
        EmployeeHours employeeHours = new EmployeeHours();
        employeeHours.setId(employeeHoursCounter);
        employeeHours.setUser(user);
        employeeHours.setDate(date);
        employeeHours.setHours(hours);
        employeeHoursCounter++;
        return employeeHours;
    }


}

