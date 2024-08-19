package com.starbestgroup.StarBestGroup.Model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
@AllArgsConstructor
public class MyResponse {


    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String responseCode;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String responseMessage;


    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Object data;

}
