package com.todo.example.config;

import lombok.Data;
import lombok.ToString;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import javax.validation.constraints.NotNull;
import java.util.HashMap;
import java.util.Map;

@Configuration
@ConfigurationProperties(prefix = "app")
@Primary
@Data
@EnableConfigurationProperties(AppProperties.class)
public class AppProperties {

    @NotNull
    private String version;

    @NotNull
    private String environment;

    @NotNull
    private String podId;

    @NotNull
    private String podNamespace;

    @NotNull
    private String podIp;

    @NotNull
    private Cache cache;

    @NotNull
    private String authEndpoint;

    @NotNull
    private String redisMasterHost;

    @NotNull
    private int redisMasterPort;

    @ToString
    @Data
    public static class Cache {
        private int defaultTtlMinutes;
        private Map<String, Integer> cacheExpirations = new HashMap<>();
    }
}
