package com.starbestgroup.StarBestGroup.Service;

import com.starbestgroup.StarBestGroup.Model.Category;
import com.starbestgroup.StarBestGroup.Model.MyResponse;
import com.starbestgroup.StarBestGroup.Model.Product;
import com.starbestgroup.StarBestGroup.Repository.CategoryRepo;
import com.starbestgroup.StarBestGroup.Repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    private String responseCode;

    private String responseMessage;

    private Object data;


    private final CategoryRepo categoryRepo;
    private final ProductRepo productRepo;

    @Autowired
    CategoryService(CategoryRepo categoryRepo,ProductRepo productRepo) {
        this.categoryRepo = categoryRepo;
        this.productRepo = productRepo;
    }


    public void reset() {
        responseCode = null;
        responseMessage = null;
        data = null;
    }


    public ResponseEntity<Object> addCategory(Category category) {

        reset();
        if (category.getCategoryName() != null && !category.getCategoryName().trim().isEmpty() &&
                (category.getCategoryStatus().equals(Boolean.TRUE) || category.getCategoryStatus().equals(Boolean.FALSE))) {
            Optional<Category> existingCategory = categoryRepo.findByCategoryName(category.getCategoryName());
            if (existingCategory.isPresent()) {
                responseCode = "101";
                responseMessage = "Category already exists!";
                data = null;
            } else {
                categoryRepo.save(category);
                responseCode = "00";
                responseMessage = "Category has been added!";
            }
        } else {
            responseCode = "02";
            responseMessage = "Field required!";
            data = null;
        }


        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);
    }

    public ResponseEntity<Object> updateCategory(String categoryId, Category updatedCategory) {

        Optional<Category> existingCategoryOptional = categoryRepo.findById(categoryId);

        if (existingCategoryOptional.isPresent()) {
            Category existingCategory = existingCategoryOptional.get();

            if (updatedCategory.getCategoryName() != null && !updatedCategory.getCategoryName().trim().isEmpty()) {

                String newcategoryName = updatedCategory.getCategoryName();
                String newcategoryDescription = updatedCategory.getCategroyDescription();
                String newcategoryImage = updatedCategory.getCategoryImage();
                Boolean newcategoryStatus = updatedCategory.getCategoryStatus();


                existingCategory.setCategoryName(newcategoryName);
                existingCategory.setCategroyDescription(newcategoryDescription);
                existingCategory.setCategoryImage(newcategoryImage);
                existingCategory.setCategoryStatus(newcategoryStatus);
                categoryRepo.save(existingCategory);

                responseCode = "00";
                responseMessage = "Category was updated successfully!!";
                data = existingCategory;


        } else {
                responseCode = "02";
                responseMessage = "Fields required";
                data = null;
            }

    } else {
            responseCode = "96";
            responseMessage = "Category Not found";
            data = null;
        }

        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage,data), HttpStatus.OK);
    }

    public ResponseEntity<Object> viewCategories(String categoryId) {

        if(categoryRepo.findById(categoryId).isPresent()) {

            responseCode = "00";
            responseMessage = "Successful!";
            data = categoryRepo.findById(categoryId).get();

        } else {
            responseCode ="96";
            responseMessage = "Category does not exist!";
            data = null;
        }

        return new ResponseEntity<>(new MyResponse(responseCode,responseMessage,data), HttpStatus.OK);
    }

    public ResponseEntity<Object> getProductsByCategoryId(String categoryId) {
        reset();
        Optional<Category> categoryOptional = categoryRepo.findById(categoryId);

        if (categoryOptional.isPresent()) {
            List<Product> products = productRepo.findByCategory_CategoryId(categoryId);
            responseCode = "00";
            responseMessage = "Successful!";
            data = products;
        } else {
            responseCode = "96";
            responseMessage = "Category does not exist!";
            data = null;
        }

        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);
    }

    public ResponseEntity<Object> getTop5Categories() {
        reset();

        List<Category> topCategories = categoryRepo.findTop5ByOrderByCategoryIdDesc();

            responseCode = "00";
            responseMessage = "Successful!";
            data = topCategories;


        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);
    }

    public ResponseEntity<Object> viewAllCategories(int pageNo, int pageSize) {
        reset();

        responseCode = "00";
        responseMessage = "Successful!";
        data = categoryRepo.findAll(PageRequest.of(pageNo,pageSize));


        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);
    }

    public ResponseEntity<Object> listAllcategories() {
        reset();

        responseCode = "00";
        responseMessage = "Successful!";
        data = categoryRepo.findAll();


        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);
    }


}
