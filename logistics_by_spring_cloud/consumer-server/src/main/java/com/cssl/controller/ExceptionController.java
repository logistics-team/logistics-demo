package com.cssl.controller;

import com.alibaba.fastjson.JSON;
import com.cssl.shiro.bean.ResultMap;
import org.apache.shiro.authc.AccountException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionController {
    @Autowired
    private ResultMap resultMap;


    // 捕捉 CustomRealm 抛出的异常
    @ExceptionHandler(AccountException.class)
    public String handleShiroException(Exception ex) {
        ResultMap map = resultMap.fail().url("http://localhost:9292/staticFiles/pages/login.html").message(ex.getMessage());
        return JSON.toJSONString(map);
    }
}