package com.starbestgroup.StarBestGroup.Controller;


import com.starbestgroup.StarBestGroup.Model.Accounts;
import com.starbestgroup.StarBestGroup.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping(path = "starbestgroup")
public class AccountController{


    private final AccountService accountService;

    @Autowired
    public AccountController(AccountService accountService) {this.accountService = accountService;}
    @PostMapping(value = "/signup", consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Object> signup(@RequestBody Accounts accounts) {
        return accountService.registration(accounts);
    }

    @PostMapping(value = "/signin", consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Object> signin(@RequestBody Map<String, String> data) {
        return accountService.login(data);
    }
}
