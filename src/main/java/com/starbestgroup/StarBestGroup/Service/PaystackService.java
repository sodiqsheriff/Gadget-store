package com.starbestgroup.StarBestGroup.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class PaystackService {


    @Value("${paystack.secret.key-test}")
    private String paystackSecretKey;

    @Value("${paystack.url}")
    private String paystackUrl;

    public boolean verifyTransaction(String paystackReference) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + paystackSecretKey);

        HttpEntity<String> entity = new HttpEntity<>(headers);
        try{

            String url = paystackUrl.concat(paystackReference);
            System.out.println("url = "+url);

            ResponseEntity<Map> response = restTemplate.exchange(url, HttpMethod.GET, entity, Map.class);

            if (response.getStatusCode() == HttpStatus.OK) {

                Map<String, Object> responseBody = response.getBody();


                boolean status = (boolean) responseBody.get("status");
                System.out.println("status = "+status);

                if (status) {
                    Map<String, Object> data = (Map<String, Object>) responseBody.get("data");
                    return true;
                }
            }
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
        return false;
    }
}
