package com.cssl.service;


import com.cssl.service.impl.UserServiceHystrix;
import org.springframework.cloud.openfeign.FeignClient;

@FeignClient(value = "user-server",fallback = UserServiceHystrix.class)
public interface UserServices {
}
