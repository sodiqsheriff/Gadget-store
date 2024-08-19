package com.starbestgroup.StarBestGroup.Service;

import com.starbestgroup.StarBestGroup.Model.*;
import com.starbestgroup.StarBestGroup.Repository.CartRepo;
import com.starbestgroup.StarBestGroup.Repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CartService {

    public String responseCode;
    public String responseMessage;
    public Object data;


    private final CartRepo cartRepo;
    private final ProductRepo productRepo;

    @Autowired
    CartService(CartRepo cartRepo, ProductRepo productRepo) {
        this.cartRepo = cartRepo;
        this.productRepo = productRepo;
    }

    public void reset() {
        responseCode = null;
        responseMessage = null;
        data = null;
    }


    public ResponseEntity<Object> addCart(Cart cart) {

        reset();
        if (!cart.getUserId().trim().isEmpty()) {
            Optional<Product> optionalProduct = productRepo.findById(cart.getProductId());
            if (!optionalProduct.isPresent()) {
                responseCode = "01";
                responseMessage = "Product does not exist!";
                data = null;
                return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);
            }

            Product product = optionalProduct.get();

            List<Cart> existingUser = cartRepo.findByUserId(cart.getUserId());
            boolean isProductInCart = false;


            for (Cart existingCart : existingUser) {
                if (existingCart.getProductId().equals(cart.getProductId())) {
                    existingCart.setQuantity(cart.getQuantity());
                    cartRepo.save(existingCart);
                    CartProductDetails cartProductDetails = new CartProductDetails(existingCart, product);
                    responseCode = "00";
                    responseMessage = "Product added to cart!";
                    data = cartProductDetails;
                    isProductInCart = true;
                    break;
                }
            }

            if (!isProductInCart) {
                Cart newCart = new Cart();
                newCart.setCartId(existingUser.isEmpty() ? UUID.randomUUID().toString().replace("-", "") : existingUser.get(0).getCartId());
                newCart.setUserId(cart.getUserId());
                newCart.setProductId(cart.getProductId());
                newCart.setQuantity(cart.getQuantity());
                cartRepo.save(newCart);
                CartProductDetails cartProductDetails = new CartProductDetails(newCart, product);
                responseCode = "00";
                responseMessage = "Product added to cart!";
                data = cartProductDetails;
            }
        } else {
            responseCode = "02";
            responseMessage = "All fields required!";
        }
        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);
    }

    public ResponseEntity<Object> deleteCartItem(String cartId, String productId) {
        reset();
        Optional<Cart> optionalCart = cartRepo.findByCartIdAndProductId(cartId,productId);

        if (!optionalCart.isPresent()) {
            responseCode = "01";
            responseMessage = "Cart not found for item";
            return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, null), HttpStatus.NOT_FOUND);
        }

        cartRepo.delete(optionalCart.get());
        responseCode = "00";
        responseMessage = "Cart item deleted successfully";
        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, null), HttpStatus.OK);

    }

    public ResponseEntity<Object> updateCartItem(String cartId, String productId, int quantity) {
        reset();
        List<Cart> carts = cartRepo.findByCartId(cartId);

        if (carts.isEmpty()) {
            responseCode = "01";
            responseMessage = "Cart not found";
            data = null;
            return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.NOT_FOUND);
        }

        boolean isProductFound = false;
        Cart updatedCart = null;

        for (Cart cart : carts) {
            if (cart.getProductId().equals(productId)) {
                cart.setQuantity(quantity);
                cartRepo.save(cart);
                updatedCart = cart;
                isProductFound = true;
                break;
            }
        }

        if (isProductFound && updatedCart != null) {
            Optional<Product> optionalProduct = productRepo.findById(productId);
            if (optionalProduct.isPresent()) {
                Product product = optionalProduct.get();
                CartProductDetails cartProductDetails = new CartProductDetails(updatedCart, product);
                responseCode = "00";
                responseMessage = "Cart updated successfully";
                data = cartProductDetails;
                return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);
            } else {
                responseCode = "01";
                responseMessage = "Product not found";
                data = null;
                return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.NOT_FOUND);
            }
        } else {
            responseCode = "01";
            responseMessage = "Product not found in cart";
            data = null;
            return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.NOT_FOUND);
        }

    }

    public ResponseEntity<Object> viewCart(String userId) {

        List<Cart> carts = cartRepo.findByUserId(userId);
        if (carts.isEmpty()) {
            return new ResponseEntity<>(new MyResponse("00", "Cart not found", null), HttpStatus.OK);
        }

        List<CartProductDetails> cartProductDetailLists = new ArrayList<>();
        for (Cart cart : carts) {
            Optional<Product> optionalProduct = productRepo.findById(cart.getProductId());
            if (optionalProduct.isPresent()) {
                Product product = optionalProduct.get();
                CartProductDetails cartProductDetails = new CartProductDetails(cart, product);
                cartProductDetailLists.add(cartProductDetails);
            }
        }
        return new ResponseEntity<>(new MyResponse("00", "Successful", cartProductDetailLists), HttpStatus.OK);

}
}
