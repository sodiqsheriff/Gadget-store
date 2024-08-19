package com.starbestgroup.StarBestGroup.Model;

import com.starbestgroup.StarBestGroup.Converter.ProductListConverter;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@Setter
@ToString
@Table(name = "`order`")
public class Order {

    @Id
    private String orderId;
    private String userId;
    private Double totalCost;
    private String orderMessage;
    private String orderStatusMessage;
    private LocalDateTime createdDate;
//    private String deliveryDate;
    private String userEmail;
    private String contactPhone;
    private String contactEmail;
    private String address;
//    private String transactionStatus;
//    private String paystackReference;
//    private LocalDateTime transactionDate;
    private String orderNumber;
    private String deliveryNumber;
    private String riderName;
    private String deliveryCode;

    @Convert(converter = ProductListConverter.class)
    private List<Product> products;


    @PrePersist
    public void generateUuid() {
        if ((orderId == null) ) {
            this.orderId = UUID.randomUUID().toString().replace("-", "");
            this.createdDate = LocalDateTime.now();
        }
    }
}
