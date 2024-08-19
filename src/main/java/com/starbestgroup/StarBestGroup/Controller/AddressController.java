package com.starbestgroup.StarBestGroup.Controller;

import com.starbestgroup.StarBestGroup.Model.Address;
import com.starbestgroup.StarBestGroup.Model.Category;
import com.starbestgroup.StarBestGroup.Model.Product;
import com.starbestgroup.StarBestGroup.Repository.AddressRepo;
import com.starbestgroup.StarBestGroup.Service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping(path = "starbest")
public class AddressController {


    private final AddressService addressService;

    @Autowired
    private AddressRepo addressRepo;

    @Autowired
    public AddressController(AddressService addressService) {this.addressService = addressService;}

    @PostMapping(value = "/addaddress")
    public ResponseEntity<Object> addAddress(@RequestBody Address address) { return addressService.addAddress(address);}

    @PutMapping(value = "/updateAddress/{addressId}")
    public ResponseEntity<Object> updateAddress(@PathVariable String addressId, @RequestBody Address address) {return addressService.updateAddress(addressId,address);}

    @GetMapping(value ="/address/view")
    public ResponseEntity<Object> viewAddress(@RequestParam String userId) {return addressService.viewAddress(userId);}

    @DeleteMapping("/deleteAddressById/{id}")
    public ResponseEntity<HttpStatus> deleteAddressbyId(@PathVariable String addressId) {
        addressRepo.deleteById(addressId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
