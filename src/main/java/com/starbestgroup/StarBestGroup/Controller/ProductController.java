package com.starbestgroup.StarBestGroup.Controller;


import com.starbestgroup.StarBestGroup.Model.Product;
import com.starbestgroup.StarBestGroup.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("starbest/product")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {this.productService = productService;}


    @PostMapping(value = "/add")
    public ResponseEntity<Object> addProductToCategory(@RequestParam String categoryId, @RequestBody Product product) {
        return productService.addProduct(categoryId, product);
    }

    @PutMapping(value = "/{productId}/update")
    public ResponseEntity<Object> updateProduct(@PathVariable String productId, @RequestBody Product updatedProduct) {
        return productService.updateProduct(productId, updatedProduct);
    }


    @GetMapping(value = "/")
    public ResponseEntity<Object> getProducts(@RequestParam int pageNo, @RequestParam int pageSize) {
        return productService.viewAllProduct(pageNo, pageSize);
    }

    @GetMapping(value ="/{productId}")
    public ResponseEntity<Object> viewProductsDetails(@PathVariable String productId) {return productService.viewProducts(productId);}

    @GetMapping(value = "/latestproducts")
    public ResponseEntity<Object> getLatestProducts() {
        return productService.getLatestProducts();
    }


}
