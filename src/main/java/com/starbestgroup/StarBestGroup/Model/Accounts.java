package com.starbestgroup.StarBestGroup.Model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Entity
@Table (name = "accounts")
@Setter
@Getter
public class Accounts {
    @Id
    private String email;

    private String username;
    private String conf_password;
    private String password;
}
