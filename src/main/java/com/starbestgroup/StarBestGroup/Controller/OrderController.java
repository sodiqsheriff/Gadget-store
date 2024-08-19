package com.starbestgroup.StarBestGroup.Controller;


import com.starbestgroup.StarBestGroup.Model.Order;
import com.starbestgroup.StarBestGroup.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(path = "starbest/orders")
public class OrderController {
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {this.orderService = orderService;}

    @PostMapping(value = "/addOrder")
    public ResponseEntity<Object> addOrder(@RequestBody Order order) {return orderService.addOrder(order);}

    @PutMapping(value = "/updateOrder/{orderId}")
    public ResponseEntity<Object> updateOrder(@PathVariable String orderId, @RequestBody Order updatedorder) {return orderService.updateOrder(orderId,updatedorder);}


    @GetMapping(value = "/view/status/{orderStatus}")
    public ResponseEntity<Object> byOrderStatus(@PathVariable String orderStatus) {return orderService.getbyOrderStatus(orderStatus);}

//    @GetMapping(value = "/view/reference/{transactionref}")
//    public ResponseEntity<Object> byTransactionReference(@PathVariable String transactionref) {return orderService.getbyTransactionReference(transactionref);}

    @GetMapping(value = "/view/number/{ordernumber}")
    public ResponseEntity<Object> byOrderNumber(@PathVariable String ordernumber) {return orderService.getbyOrderNumber(ordernumber);}

    @GetMapping(value = "/view/contact/{contactemail}")
    public ResponseEntity<Object> getbyContactEmail(@PathVariable String contactemail) {return orderService.getbyContactEmail(contactemail);}

    @GetMapping(value = "/view/user/{userId}")
    public ResponseEntity<Object> byUserId(@PathVariable String userId) {return orderService.getbyUserId(userId);}

}
