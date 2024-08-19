package com.starbestgroup.StarBestGroup.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
public class Subscription {

    private String userEmail;

    @Column(columnDefinition = "TINYINT(1)")
    private boolean subscribe;

    @Column(columnDefinition = "TINYINT(1)")
    private boolean unsubscribe;
}
