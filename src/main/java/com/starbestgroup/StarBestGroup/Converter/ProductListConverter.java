package com.starbestgroup.StarBestGroup.Converter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.starbestgroup.StarBestGroup.Model.Product;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.io.IOException;
import java.util.List;

@Converter
public class ProductListConverter implements AttributeConverter<List<Product>, String> {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(List<Product> productList) {
        try {
            return objectMapper.writeValueAsString(productList);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Product> convertToEntityAttribute(String dbData) {
        if (dbData == null) {
            return null;
        }

        try {
            return objectMapper.readValue(dbData, new TypeReference<List<Product>>() {});
        } catch (IOException e) {
            // Handle exception or log error
            e.printStackTrace();
            return null;
        }
    }
}
