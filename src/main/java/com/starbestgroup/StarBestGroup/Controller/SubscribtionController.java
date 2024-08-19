package com.starbestgroup.StarBestGroup.Controller;


import com.starbestgroup.StarBestGroup.Model.Subscription;
import com.starbestgroup.StarBestGroup.Service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping(path = "starbest")
public class SubscribtionController {

    private final SubscriptionService subscriptionService;

    @Autowired
    public SubscribtionController(SubscriptionService subscriptionService){this.subscriptionService =subscriptionService;}


    @PostMapping(value = "/subscription")
    public ResponseEntity<Object> manageSubscription(@RequestBody Subscription subscription) {
        return subscriptionService.manageSubscription(subscription.getUserEmail(), subscription.isSubscribe(), subscription.isUnsubscribe());
    }
}
