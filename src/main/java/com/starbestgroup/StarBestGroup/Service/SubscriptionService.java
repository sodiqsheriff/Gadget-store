package com.starbestgroup.StarBestGroup.Service;

import com.starbestgroup.StarBestGroup.Model.MyResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class SubscriptionService {

    private String responseCode;
    private String responseMessage;

    private Object data;

    public void reset() {
        responseCode = null;
        responseMessage = null;
        data = null;

    }

    public ResponseEntity<Object> manageSubscription(String userEmail, boolean subscribe, boolean unsubscribe) {

        reset();
        if (subscribe && !unsubscribe) {

            responseCode = "00";
            responseMessage = "Subscription successfull";

            return new ResponseEntity<>(new MyResponse(responseCode,responseMessage,data), HttpStatus.OK);
        } else if (!subscribe && unsubscribe) {

            responseCode = "00";
            responseMessage = "Unsubscription successfull";

            return new ResponseEntity<>(new MyResponse(responseCode,responseMessage,data), HttpStatus.OK);
        } else {

            responseCode = "96";
            responseMessage = "Error!";
            return new ResponseEntity<>(new MyResponse(responseCode,responseMessage,data), HttpStatus.OK);
        }
    }
}
