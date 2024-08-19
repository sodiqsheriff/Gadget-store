package com.starbestgroup.StarBestGroup.Controller;

import com.starbestgroup.StarBestGroup.Model.Cart;
import com.starbestgroup.StarBestGroup.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping(path = "starbest/carts")
public class CartController {

    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {this.cartService = cartService;}

    @PostMapping(value = "/add")
    public ResponseEntity<Object> addProductToCart(@RequestBody Cart cart) {
        return cartService.addCart(cart);
    }

    @DeleteMapping(value = "/delete")
    public ResponseEntity<Object> deleteCartItem(
            @RequestParam String cartId,
            @RequestParam String productId) {
        return cartService.deleteCartItem(cartId, productId);
    }

    @PutMapping(value = "/update")
    public ResponseEntity<Object> updateCartItem(@RequestBody Map<String, Object> requestBody) {
        String cartId = (String) requestBody.get("cartId");
        String productId = (String) requestBody.get("productId");
        int quantity = (Integer) requestBody.get("quantity");

        return cartService.updateCartItem(cartId, productId, quantity);
    }
    @GetMapping(value = "/view")
    public ResponseEntity<Object> viewCart (@RequestParam String userId) {return cartService.viewCart(userId);}

}
