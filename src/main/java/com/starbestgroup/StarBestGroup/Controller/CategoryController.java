package com.starbestgroup.StarBestGroup.Controller;

import com.starbestgroup.StarBestGroup.Model.Category;
import com.starbestgroup.StarBestGroup.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping(path = "starbest/category")
public class CategoryController {


    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {this.categoryService = categoryService;}

    @PostMapping(value = "/add")
    public ResponseEntity<Object> addCategory(@RequestBody Category category) {return categoryService.addCategory(category);}

    @PutMapping(value = "/update/{categoryId}")
    public ResponseEntity<Object> updateCategory(@PathVariable String categoryId, @RequestBody Category category) {return categoryService.updateCategory(categoryId,category);}

    @GetMapping(value ="/{categoryId}")
    public ResponseEntity<Object> categoriesDetails(@PathVariable String categoryId) {return categoryService.viewCategories(categoryId);}

    @GetMapping(value = "/")
    public ResponseEntity<Object> getCategory(@RequestParam int pageNo, @RequestParam int pageSize) {
        return categoryService.viewAllCategories(pageNo,pageSize);
    }
    @GetMapping(value = "/top5categories")
    public ResponseEntity<Object> getLatestCategories() {
        return categoryService.getTop5Categories();
    }
    @GetMapping(value = "/{categoryId}/products")
    public ResponseEntity<Object> getProductsByCategoryId(@PathVariable String categoryId) {
        return categoryService.getProductsByCategoryId(categoryId);
    }
    @GetMapping(value = "/categories/all")
    public ResponseEntity<Object> listAllCategories(){return categoryService.listAllcategories();}

}
