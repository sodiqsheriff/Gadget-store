package com.starbestgroup.StarBestGroup.Repository;

import com.starbestgroup.StarBestGroup.Model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AddressRepo extends JpaRepository<Address, String> {

    Optional<Address> findByFulladdress(String addressName);
    Optional<Address> findByUserId(String userId);
    Optional<Address> findByFulladdressAndUserId(String addressName, String userId);

}
