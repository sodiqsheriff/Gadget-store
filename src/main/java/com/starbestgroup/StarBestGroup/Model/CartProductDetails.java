package com.starbestgroup.StarBestGroup.Model;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CartProductDetails {

    private Cart cart;
    private Product product;


    public CartProductDetails(Cart cart, Product product) {
        this.cart = cart;
        this.product = product;
    }
}
