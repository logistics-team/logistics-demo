package com.cssl.config;

import feign.Request;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ServiceFeignConfiguration {
//    @Value("${f.feign.connectTimeout:60000}")
    private final int connectTimeout = 10000;

//    @Value("${service.feign.readTimeOut:60000}")
    private final int readTimeout = 10000;

    @Bean
    public Request.Options options() {
        return new Request.Options(connectTimeout, readTimeout);
    }

}
