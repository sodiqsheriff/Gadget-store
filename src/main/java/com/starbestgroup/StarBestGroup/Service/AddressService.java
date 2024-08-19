package com.starbestgroup.StarBestGroup.Service;

import com.starbestgroup.StarBestGroup.Model.Address;
import com.starbestgroup.StarBestGroup.Model.Category;
import com.starbestgroup.StarBestGroup.Model.MyResponse;
import com.starbestgroup.StarBestGroup.Repository.AddressRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
public class AddressService {

    private String responseCode;
    private String responseMessage;
    private Object data;


    private final AddressRepo addressRepo;

    @Autowired
    AddressService(AddressRepo addressRepo) {
        this.addressRepo = addressRepo;
    }


    public void reset() {
        responseCode = null;
        responseMessage = null;
        data = null;

    }


    public ResponseEntity<Object> addAddress(Address address) {
        reset();

        if (address.getFulladdress() != null && !address.getPostalcode().trim().isEmpty()
                && !address.getState().trim().isEmpty()) {

            Optional<Address> existingAddressOptional = addressRepo.findByUserId(address.getUserId());

            if (existingAddressOptional.isPresent()) {

                Address existingAddress = existingAddressOptional.get();

                existingAddress.setFulladdress(address.getFulladdress());
                existingAddress.setPostalcode(address.getPostalcode());
                existingAddress.setState(address.getState());
                existingAddress.setDateupdated(LocalDateTime.now());
                addressRepo.save(existingAddress);

                responseCode = "01";
                responseMessage = "Address has been updated!";
                data = existingAddress;

            } else {
                address.setAddressId(UUID.randomUUID().toString().replace("-", ""));
                address.setDateadded(LocalDateTime.now());
                address.setDateupdated(LocalDateTime.now());
                addressRepo.save(address);

                responseCode = "00";
                responseMessage = "Address has been added!";
                data = address;
            }
        } else {
            responseCode = "02";
            responseMessage = "Field required!";
            data = null;
        }

        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, data), HttpStatus.OK);
    }

    public ResponseEntity<Object> updateAddress(String addressId, Address updatedAddress) {

        Optional<Address> existingAddressOptional = addressRepo.findById(addressId);

        if (existingAddressOptional.isPresent()) {
            Address existingAddress = existingAddressOptional.get();

            if (updatedAddress.getFulladdress() != null && !updatedAddress.getFulladdress().trim().isEmpty()) {

                String newaddressFullAdress = updatedAddress.getFulladdress();
                String newaddressPostalcode = updatedAddress.getPostalcode();
                String newaddressZipcode = updatedAddress.getState();


                existingAddress.setFulladdress(newaddressFullAdress);
                existingAddress.setPostalcode(newaddressPostalcode);
                existingAddress.setState(newaddressZipcode);
                existingAddress.setDateupdated(LocalDateTime.now());
                addressRepo.save(existingAddress);

                responseCode = "00";
                responseMessage = "Address was updated successfully!!";
                data = existingAddress;


            } else {
                responseCode = "02";
                responseMessage = "Fields required";
            }

        } else {
            responseCode = "96";
            responseMessage = "Address Not found";
        }

        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage,data), HttpStatus.OK);
    }

    public ResponseEntity<Object> viewAddress(String userId) {

        if(addressRepo.findByUserId(userId).isPresent()) {

            responseCode = "00";
            responseMessage = "Successful!";
            data = addressRepo.findByUserId(userId).get();

        } else {
            responseCode ="00";
            responseMessage = "Address does not exist!";
            data = null;
        }

        return new ResponseEntity<>(new MyResponse(responseCode,responseMessage,data), HttpStatus.OK);
    }
}