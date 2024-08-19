package com.starbestgroup.StarBestGroup.Repository;


import com.starbestgroup.StarBestGroup.Model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepo extends JpaRepository<Product, String> {

    Optional<Product> findByProductNameAndCategory_CategoryId(String productName, String categoryId);

    List<Product> findTop10ByCategoryCategoryIdOrderByCreatedAtDesc(String categoryId);

    List<Product> findByCategory_CategoryId(String categoryId);

    List<Product> findTop10ByOrderByProductIdDesc();


//    List<Product> findAllProducts(Pageable page);
}
