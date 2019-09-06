package com.cssl;

<<<<<<< HEAD
import org.apache.ibatis.annotations.Mapper;
=======
>>>>>>> remotes/origin/ljx
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
<<<<<<< HEAD
@MapperScan("com.cssl.mailing.mapper")
@EnableEurekaClient
@SpringBootApplication
=======

//@EnableEurekaClient
@SpringBootApplication
@MapperScan(basePackages = "com.cssl.orders.mapper")
>>>>>>> remotes/origin/ljx
public class LogisticsServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(LogisticsServerApplication.class, args);
    }

}
