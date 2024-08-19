package com.starbestgroup.StarBestGroup.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;


@Setter
@Getter
@Entity
public class Category {

    @Id
    private String categoryId;
    private String categoryName;
    private String categroyDescription;

    @Column(columnDefinition = "TEXT")
    private String categoryImage;

//    @Column(columnDefinition = "TINYINT(1)")
    private Boolean categoryStatus;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Product> products;

    @PrePersist
    public void generateUuid() {
        if (categoryId == null) {
            this.categoryId = UUID.randomUUID().toString().replace("-", "");
        }
    }
}
