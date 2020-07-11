package com.example.doitwithshark.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
@Setter
@Table(name="users")
public class User {

    @Id
    private String id;
    @NotNull
    private String name;

    private String surname;

    private String type;

    private float salary;

    private String username;

    private String password;

    public String getPassword() {
        return password;
    }
}
