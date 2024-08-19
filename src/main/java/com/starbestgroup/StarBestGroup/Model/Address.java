package com.starbestgroup.StarBestGroup.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Setter
@Getter
public class Address {

    @Id
    private String addressId;

    private String userId;

    private String fulladdress;
    private String postalcode;
    private String state;

    @Column(name = "created_at")
    private LocalDateTime dateadded;

    @Column(name = "updated_at")
    private LocalDateTime dateupdated;

    @PrePersist
    public void generateUuid() {
        if (addressId == null) {
            this.addressId = UUID.randomUUID().toString().replace("-", "");
            this.dateadded = LocalDateTime.now();
            this.dateupdated = LocalDateTime.now();
        }
    }

    @PreUpdate
    public void preUpdate() {
        this.dateupdated = LocalDateTime.now();
    }
}
