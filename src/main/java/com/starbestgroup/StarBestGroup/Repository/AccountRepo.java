package com.starbestgroup.StarBestGroup.Repository;

import com.starbestgroup.StarBestGroup.Model.Accounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Map;
import java.util.Optional;

@Repository
public interface AccountRepo extends JpaRepository<Accounts, String> {
    boolean existsByEmail(String email);

    @Query(value = "SELECT email, password FROM accounts WHERE email= :signEmail AND password= :signPassword", nativeQuery = true)
    Optional<Map<String, String>> login(@Param("signEmail") String signEmail, @Param("signPassword") String signPassword);

}
