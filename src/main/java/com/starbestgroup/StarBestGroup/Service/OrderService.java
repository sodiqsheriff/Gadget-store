package com.starbestgroup.StarBestGroup.Service;


import com.starbestgroup.StarBestGroup.Model.Category;
import com.starbestgroup.StarBestGroup.Model.MyResponse;
import com.starbestgroup.StarBestGroup.Model.Order;
import com.starbestgroup.StarBestGroup.Model.Product;
import com.starbestgroup.StarBestGroup.Repository.OrderRepo;
import com.starbestgroup.StarBestGroup.Repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class OrderService {

    public String responseCode;
    public String responseMessage;
    public Object data;


    private final OrderRepo orderRepo;
    private final ProductRepo productRepo;
    private final PaystackService paystackService;


    @Autowired
    OrderService(OrderRepo orderRepo, ProductRepo productRepo, PaystackService paystackService) {
        this.orderRepo = orderRepo;
        this.productRepo = productRepo;
        this.paystackService = paystackService;
    }


    public void reset() {
        responseCode = null;
        responseMessage = null;
        data = null;
    }


    public ResponseEntity<Object> addOrder(Order order) {

        reset();

        boolean isTransactionValid = paystackService.verifyTransaction(order.getOrderNumber());
        data = order;
        System.out.println("STATUS : " + isTransactionValid);
        if (!isTransactionValid) {
            responseCode = "102";
            responseMessage = "Invalid transaction reference!";
             return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);
        }

        if (order.getContactEmail() != null && !order.getContactEmail().trim().isEmpty()
            && !order.getUserEmail().trim().isEmpty() && !order.getAddress().trim().isEmpty()) {

            List<Product> products = order.getProducts();
            for (Product product : products) {
                Optional<Product> optionalProduct = productRepo.findById(product.getProductId());
                if (optionalProduct.isEmpty()) {
                    responseCode = "03";
                    responseMessage = "Product with ID " + product.getProductId() + " does not exist!";
                    return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);
                }
            }
                Optional<Order> existingOrder = orderRepo.findByOrderId(order.getOrderId());
                if (existingOrder.isPresent()) {
                    responseCode = "101";
                    responseMessage = "Order already exists!";
                } else {
                    orderRepo.save(order);
                    responseCode = "00";
                    responseMessage = "Order has been added!";
                }
            } else {
            responseCode = "02";
            responseMessage = "Field required!";
        }


        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);
    }


    public ResponseEntity<Object> updateOrder(String orderId, Order updatedorder) {
        reset();
        if (updatedorder.getContactEmail() != null && !updatedorder.getContactEmail().trim().isEmpty()
                && !updatedorder.getUserEmail().trim().isEmpty() && !updatedorder.getAddress().trim().isEmpty()) {

            Optional<Order> existingOrder = orderRepo.findByOrderId(orderId);
            if (!existingOrder.isPresent()) {
                responseCode = "101";
                responseMessage = "Order does not exist!";
            } else {

                Order existingOrderObj = existingOrder.get();


                if (existingOrderObj.getUserId() != null) {
                    updatedorder.setUserId(existingOrderObj.getUserId());
                } else {
                    updatedorder.setUserId(UUID.randomUUID().toString().replace("-", ""));
                }


                updatedorder.setOrderId(orderId);
                updatedorder.setUserId(existingOrderObj.getUserId());

                List<Product> products = updatedorder.getProducts();
                for (Product product : products) {
                    Optional<Product> optionalProduct = productRepo.findById(product.getProductId());
                    if (!optionalProduct.isPresent()) {
                        responseCode = "03";
                        responseMessage = "Product with ID " + product.getProductId() + " does not exist!";
                        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);
                    }
                }
                updatedorder.setOrderId(orderId);
                orderRepo.save(updatedorder);
                responseCode = "00";
                responseMessage = "Order has been updated!";
            }
        } else {
            responseCode = "02";
            responseMessage = "Required fields are empty!";
        }

        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);
    }

    public ResponseEntity<Object> getbyOrderStatus(String orderStatus) {
        reset();
        List<Order> orders = orderRepo.findByOrderStatusMessage(orderStatus);
        if (orders.isEmpty()) {
            responseCode = "96";
            responseMessage = "No orders !!";
            data = null;

            return new ResponseEntity<>(new MyResponse(responseCode, responseMessage,data), HttpStatus.OK);
        }

        responseCode = "00";
        responseMessage = "Successful!";
        data =orders;

        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage,data), HttpStatus.OK);
    }

//    public ResponseEntity<Object> getbyTransactionReference(String trasactionref) {
//        reset();
//        List<Order> orders = orderRepo.findByPaystackReference(trasactionref);
//        if (orders.isEmpty()) {
//            responseCode = "96";
//            responseMessage = "No orders !!";
//            data = null;
//
//            return new ResponseEntity<>(new MyResponse(responseCode, responseMessage,data), HttpStatus.OK);
//        }
//
//        responseCode = "00";
//        responseMessage = "Successful!";
//        data =orders;
//
//        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage,data), HttpStatus.OK);
//    }
    public ResponseEntity<Object> getbyOrderNumber(String ordernumber) {
        reset();
        List<Order> orders = orderRepo.findByOrderNumber(ordernumber);
        if (orders.isEmpty()) {
            responseCode = "96";
            responseMessage = "No orders !!";
            data = null;

            return new ResponseEntity<>(new MyResponse(responseCode, responseMessage,data), HttpStatus.OK);
        }

        responseCode = "00";
        responseMessage = "Successful!";
        data =orders;

        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage,data), HttpStatus.OK);
    }
    public ResponseEntity<Object> getbyContactEmail(String contactemail) {
        reset();
        List<Order> orders = orderRepo.findByContactEmail(contactemail);
        if (orders.isEmpty()) {
            responseCode = "96";
            responseMessage = "No orders !!";
            data = null;

            return new ResponseEntity<>(new MyResponse(responseCode, responseMessage,data), HttpStatus.OK);
        }

        responseCode = "00";
        responseMessage = "Successful!";
        data =orders;

        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage,data), HttpStatus.OK);
    }
    public ResponseEntity<Object> getbyUserId(String userId) {
        reset();
        List<Order> orders = orderRepo.findByUserId(userId);
        if (orders.isEmpty()) {
            responseCode = "96";
            responseMessage = "No orders !!";
            data = null;

            return new ResponseEntity<>(new MyResponse(responseCode, responseMessage,data), HttpStatus.OK);
        }

        responseCode = "00";
        responseMessage = "Successful!";
        data = orders;

        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage,data), HttpStatus.OK);
    }
}
