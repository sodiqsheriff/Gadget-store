package com.starbestgroup.StarBestGroup.Repository;

import com.starbestgroup.StarBestGroup.Model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface OrderRepo extends JpaRepository<Order,String> {

    Optional<Order> findByOrderId(String orderId);

    List<Order> findByOrderStatusMessage(String orderStatus);
//    List<Order> findByPaystackReference(String transactionref);
    List<Order> findByOrderNumber(String ordernumber);
    List<Order> findByContactEmail(String contactemail);
    List<Order> findByUserId(String userId);
}
