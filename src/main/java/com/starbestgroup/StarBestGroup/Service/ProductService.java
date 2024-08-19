package com.starbestgroup.StarBestGroup.Service;

import com.starbestgroup.StarBestGroup.Model.Category;
import com.starbestgroup.StarBestGroup.Model.MyResponse;
import com.starbestgroup.StarBestGroup.Model.Product;
import com.starbestgroup.StarBestGroup.Repository.CategoryRepo;
import com.starbestgroup.StarBestGroup.Repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private String responseCode;

    private String responseMessage;

    private Object data;

    private final ProductRepo productRepo;

    private final CategoryRepo categoryRepo;

    @Autowired
    ProductService(ProductRepo productRepo, CategoryRepo categoryRepo) {
        this.productRepo = productRepo;
        this.categoryRepo = categoryRepo;
    }

    public void reset() {
        responseCode = null;
        responseMessage = null;
        data = null;
    }


    public ResponseEntity<Object> addProduct(String categoryId, Product product) {
        Optional<Category> categoryOptional = categoryRepo.findById(categoryId);
        if ((product.getProductStatus().equals(Boolean.TRUE) || product.getProductStatus().equals(Boolean.FALSE))){
            if (categoryOptional.isPresent()) {
                Category category = categoryOptional.get();
                Optional<Product> existingProduct = productRepo.findByProductNameAndCategory_CategoryId(product.getProductName(), categoryId);
                if (existingProduct.isPresent()) {
                    responseCode = "01";
                    responseMessage = "Product Name already exists!";
                    data = null;
                }else {

                    product.setCategory(category);
                    productRepo.save(product);
                    category.getProducts().add(product);
                    categoryRepo.save(category);

                    responseCode = "00";
                    responseMessage = "Products added successfully";
                }

            } else {

                responseCode = "96";
                responseMessage = "Category does not exist!";
                data = null;
            }

        } else {
            responseCode = "96";
            responseMessage = "invalid product status";
            data = null;

        }

        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);
    }

    public ResponseEntity<Object> updateProduct(String productId, Product updatedProduct) {
        reset();
        Optional<Product> existingProductOptional = productRepo.findById(productId);

        if (existingProductOptional.isPresent()) {
            Product existingProduct = existingProductOptional.get();

            if (updatedProduct.getProductName() != null && !updatedProduct.getProductName().trim().isEmpty() &&
                    updatedProduct.getProductDescription() != null && updatedProduct.getProductPrice() > 0 &&
                    updatedProduct.getNumberproductSupplied() > 0) {

                existingProduct.setProductName(updatedProduct.getProductName());
                existingProduct.setProductDescription(updatedProduct.getProductDescription());
                existingProduct.setProductPrice(updatedProduct.getProductPrice());
                existingProduct.setProductStatus(updatedProduct.getProductStatus());
                existingProduct.setDiscountedPrice(updatedProduct.getDiscountedPrice());
                existingProduct.setNumberproductSupplied(updatedProduct.getNumberproductSupplied());
                existingProduct.setProductImage(updatedProduct.getProductImage());
                existingProduct.setUpdatedAt(LocalDateTime.now());


                productRepo.save(existingProduct);

                responseCode = "00";
                responseMessage = "Product was updated successfully!!";
                data = existingProduct;
            }

        } else {
            responseCode = "96";
            responseMessage = "Product not found";
            data = null;
        }

        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);
    }

    public ResponseEntity<Object> viewProducts(String productId) {

        if(productRepo.findById(productId).isPresent()) {

            responseCode = "00";
            responseMessage = "Successful!";
            data = productRepo.findById(productId).get();

        } else {
            responseCode ="96";
            responseMessage = "Product does not exist!";
            data = null;
        }

        return new ResponseEntity<>(new MyResponse(responseCode,responseMessage,data), HttpStatus.OK);
    }


    public ResponseEntity<Object> viewAllProduct(int pageNo, int pageSize) {
        reset();

        responseCode = "00";
        responseMessage = "Successful!";
        data = productRepo.findAll(PageRequest.of(pageNo, pageSize));

        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);
    }

    public ResponseEntity<Object> getLatestProducts() {

        reset();

            List<Product> products = productRepo.findTop10ByOrderByProductIdDesc();

            responseCode = "00";
            responseMessage = "Successful!";
            data = products;

        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);

    }

}
