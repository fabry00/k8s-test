package com.gateway.example.config;

import com.google.common.collect.Maps;
import lombok.Data;
import lombok.ToString;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Configuration
@Primary
@Data
@ConfigurationProperties(prefix = "api.gateway")
public class ApiGatewayProperties {

    @NotNull
    private String environment;

    @NotNull
    private String podId;

    @NotNull
    private String podNamespace;

    @NotNull
    private String podIp;

    @NotNull
    private String jwtSecret;

    @NotNull
    private Cache cache;

    @NotNull
    private List<Endpoint> endpoints;

    @ToString
    @Data
    public static class Cache {
        private int maxValues;
        private int ttlMinutes;
    }

    @ToString
    @Data
    public static class Endpoint {
        private String path;
        private String location;
        private String name;
    }

    public Map<String, String> getServicesList() {
        return endpoints
                .stream()
                .map(endpoint -> Maps.immutableEntry(endpoint.name, endpoint.location))
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue,
                        (service1, service2) -> {
                            return service1;
                        }));
    }


}
