package com.starbestgroup.StarBestGroup.Service;

import com.starbestgroup.StarBestGroup.Model.Accounts;
import com.starbestgroup.StarBestGroup.Model.MyResponse;
import com.starbestgroup.StarBestGroup.Repository.AccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Service
public class AccountService {

    private String responseCode;
    private String responseMessage;
    private Object data;


    private final AccountRepo accountRepo;

    @Autowired
    AccountService(AccountRepo accountRepo) { this.accountRepo = accountRepo;}

    public void reset() {
        responseCode=null;
        responseMessage=null;
        data=null;
    }


    public ResponseEntity<Object> registration(Accounts accounts) {

        reset();
        if((accounts.getUsername() != null) && (accounts.getEmail() != null) && (accounts.getPassword() != null) &&
                (accounts.getConf_password() != null)) {

            if((!accounts.getUsername().trim().isEmpty()) && (!accounts.getEmail().trim().isEmpty()) &&
                    (!accounts.getPassword().trim().isEmpty()) && (!accounts.getConf_password().trim().isEmpty())) {

                if((accounts.getEmail().contains("@")) && (accounts.getEmail().contains("."))) {

                    if(accounts.getPassword().equals(accounts.getConf_password())){

                        if(accountRepo.existsByEmail(accounts.getEmail())) {
                            responseCode = "05";
                            responseMessage = "Account already exists!";

                        } else {
                            responseCode = "00";
                            responseMessage = "Registration successful!";

                            accountRepo.save(accounts);
                        }

                    } else {

                        responseCode="04";
                        responseMessage="Password and Confirm Passwords do not match!";
                    }

                } else {

                    responseCode="03";
                    responseMessage="Invalid Email format!";
                }
            }else {
                responseCode="02";
                responseMessage="One or more fields is empty";
            }

        } else {

            responseCode="01";
            responseMessage="Fields cannot be empty";
        }
        return new ResponseEntity<>(new MyResponse(responseCode,responseMessage, data), HttpStatus.OK);
    }


    public ResponseEntity<Object>login(Map<String, String> data) {
        reset();

        if ((data.get("email") != null) && (data.get("password") != null)) {
            Optional<Map<String, String>> dbData = accountRepo.login(data.get("email"), data.get("password"));

            if (dbData.isPresent()){
                if(dbData.get().isEmpty()){
                    responseCode = "105";
                    responseMessage = "Account does not exist!";
                } else {
                    responseCode = "00";
                    this.data = accountRepo.findById(data.get("email"));
                    responseMessage = "Login successful!";
                }
            } else {
                responseCode="02";
                responseMessage="Account does not exist!";
            }
        } else {
            responseCode="01";
            responseMessage="Fields cannot be empty";
        }
        return new ResponseEntity<>(new MyResponse(responseCode, responseMessage, this.data), HttpStatus.OK);
    }
}
