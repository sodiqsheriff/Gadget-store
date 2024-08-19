package com.starbestgroup.StarBestGroup.Repository;

import com.starbestgroup.StarBestGroup.Model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartRepo extends JpaRepository<Cart, String> {

    List<Cart> findByUserId(String userId);
    List<Cart> findByCartId(String cartId);
    Optional<Cart> findByCartIdAndProductId(String cartId, String productId);
    Optional<Cart> findByUserIdAndProductId(String userId, String productId);

}
