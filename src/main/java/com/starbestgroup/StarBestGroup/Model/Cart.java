package com.starbestgroup.StarBestGroup.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Setter
@Getter
@Entity
@Table(name = "carts")
public class Cart {

    @Id
    private String Id;
    private String cartId;

    private String userId;

    private String productId;

    private Integer quantity;


    @PrePersist
    public void generateUuid() {
        if (Id == null) {
            this.Id = UUID.randomUUID().toString().replace("-", "");
        }
        if (cartId == null) {
            this.cartId = UUID.randomUUID().toString().replace("-", "");
        }
    }

}
