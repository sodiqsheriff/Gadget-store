package com.starbestgroup.StarBestGroup.Model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Setter
@Getter
public class Product {


    @Id
    private String productId;

    private String productName;
    private String productDescription;
    private double productPrice;
    private double numberproductSupplied;
    private double discountedPrice;

    @Column(columnDefinition = "TEXT")
    private String productImage;

//    @Column(columnDefinition = "TINYINT(1)")
    private Boolean productStatus;

    @ManyToOne
    @JoinColumn(name = "categoryId", referencedColumnName = "categoryId")
    private Category category;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    public void generateUuid() {
        if (productId == null) {
            this.productId = UUID.randomUUID().toString().replace("-", "");
            this.createdAt = LocalDateTime.now();
            this.updatedAt = LocalDateTime.now();
        }
    }

    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
