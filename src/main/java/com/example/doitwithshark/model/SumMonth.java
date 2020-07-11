package com.example.doitwithshark.model;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class SumMonth {

    private int sum;
    private int month;

    public int getMonth() {
        return month;
    }

    public int getSum() {
        return sum;
    }
}
