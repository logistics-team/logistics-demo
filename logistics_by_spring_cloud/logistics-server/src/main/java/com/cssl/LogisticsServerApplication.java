package com.cssl;


import org.apache.ibatis.annotations.Mapper;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@MapperScan("com.cssl.mailing.mapper")
@EnableEurekaClient
@SpringBootApplication
@MapperScan(basePackages = "com.cssl.orders.mapper")
public class LogisticsServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(LogisticsServerApplication.class, args);
    }

}
