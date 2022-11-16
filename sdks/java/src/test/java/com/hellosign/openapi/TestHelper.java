package com.hellosign.openapi;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hellosign.openapi.model.ErrorResponse;
import org.mockito.Mockito;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;

import static org.mockito.Mockito.*;

public class TestHelper {
    public static InputStream readFileFromResource(String fileName) throws FileNotFoundException {
        return new FileInputStream("test_fixtures/" + fileName + ".json");
    }

    public static <T> T getFixtureData(Class<T> classType, String topLevelFieldName) throws IOException {
        ObjectMapper objectMapper = JSON.getDefault().getMapper();
        JsonNode jsonNode = objectMapper.readTree(readFileFromResource(classType.getSimpleName()));
        return objectMapper.convertValue(jsonNode.get(topLevelFieldName), classType);
    }

    public static ApiClient setUpMock(int statusCode, Object obj) throws ApiException {
        ApiClient apiClient = Mockito.spy(ApiClient.class);
        ApiResponse response = new ApiResponse<>(statusCode, new HashMap<>(), obj);
        if (statusCode>= 200 && statusCode <= 299) {
            doReturn(response).when(apiClient).invokeAPI(any(), any(), any(), any(), any(), any(), any(), any(), any(), any(), any(), any(), eq(false));
        } else {
            doThrow(new ApiException(statusCode, obj.toString(), null, obj.toString(), (ErrorResponse) obj))
                    .when(apiClient).invokeAPI(any(), any(), any(), any(), any(), any(), any(), any(), any(), any(), any(), any(), eq(false));
        }
        return apiClient;
    }
}
