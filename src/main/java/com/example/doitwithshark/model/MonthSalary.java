package com.example.doitwithshark.model;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
@Setter
@Table(name = "months_salary")
public class MonthSalary {
    @Id
    private int id;
    @NotNull
    private int month;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "emp_id")
    private User user;
    @NotNull
    private int salary;
}
