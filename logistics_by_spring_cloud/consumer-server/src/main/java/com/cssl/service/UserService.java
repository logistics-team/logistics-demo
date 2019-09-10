package com.cssl.service;

import com.cssl.config.ServiceFeignConfiguration;
import com.cssl.service.impl.UserServiceHystrix;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(value = "user-server", fallback = UserServiceHystrix.class, configuration = ServiceFeignConfiguration.class)
public interface UserService {

    //订单操作
    @RequestMapping(value = "orders/show", method = RequestMethod.POST, consumes = "application/json")
    String show(@RequestParam(value = "id") int id, @RequestParam(value = "page") int page, @RequestParam(value = "limit") int limit);

    @RequestMapping(value = "orders/l_statue", method = RequestMethod.POST, consumes = "application/json")
    public String l_statue(@RequestParam(value = "id") int id);

    @RequestMapping(value = "orders/ts_update", method = RequestMethod.POST, consumes = "application/json")
    public String ls_update(@RequestParam(value = "ls_id") int ls_id, @RequestParam(value = "ts_id") String ts_id);

    //收寄件人操作
    @RequestMapping(value = "orders/user_select", method = RequestMethod.POST, consumes = "application/json")
    String e_user(@RequestParam(value = "id") String id, @RequestParam(value = "page") int page, @RequestParam(value = "limit") int limit);

    //用户操作
    @RequestMapping(value = "orders/user_s", method = RequestMethod.POST, consumes = "application/json")
    String user(@RequestParam(value = "name") String name, @RequestParam(value = "page") int page, @RequestParam(value = "limit") int limit);

    @RequestMapping(value = "guest/userLogin", method = RequestMethod.POST, consumes = "application/json")
    String userLogin(@RequestParam(value = "phone") String phone, @RequestParam(value = "password") String password, @RequestParam(value = "messageCode") String messageCode);

    @RequestMapping(value = "guest/userRegister", method = RequestMethod.POST, consumes = "application/json")
    String userRegister(@RequestParam(value = "phone") String userPhoneTel, @RequestParam(value = "password") String password, @RequestParam(value = "messageCode") String messageCode);

    @RequestMapping(value = "guest/sendMessages", method = RequestMethod.POST, consumes = "application/json")
    String sendMessages(@RequestParam(value = "phoneNum")String phoneNum);

    @RequestMapping(value = "guest/isExistence", method = RequestMethod.POST, consumes = "application/json")
    String isExistence(@RequestParam(value = "phone")String phone);

    @RequestMapping(value = "guest/notLogin", method = RequestMethod.POST, consumes = "application/json")
    String notLogin();

    @RequestMapping(value = "guest/getPasswordByPhone", method = RequestMethod.POST, consumes = "application/json")
    String getPasswordByPhone(@RequestParam(value = "phone")String phone);

    @RequestMapping(value = "guest/getRoleByPhone", method = RequestMethod.POST, consumes = "application/json")
    String getRoleByPhone(@RequestParam(value = "phone")String phone);


}
