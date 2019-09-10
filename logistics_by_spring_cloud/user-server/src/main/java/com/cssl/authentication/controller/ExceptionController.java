package com.cssl.authentication.controller;

import com.cssl.authentication.shiro.bean.ResultMap;
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
    public ResultMap handleShiroException(Exception ex) {
        return resultMap.fail().url("redirect:/staticFiles/pages/login.html").message(ex.getMessage());
    }
}