package com.cssl.controller;

import com.alibaba.fastjson.JSON;
import com.cssl.shiro.bean.ResultMap;
import org.apache.shiro.authc.AccountException;
import org.apache.shiro.authz.AuthorizationException;
import org.apache.shiro.authz.UnauthorizedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
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
    }//拦截未授权页面
    @ResponseStatus(value = HttpStatus.FORBIDDEN)
    @ExceptionHandler(UnauthorizedException.class)
    public String handleException(UnauthorizedException ex) {
//        logger.debug(e.getMessage());
        ResultMap map = resultMap.fail().url("http://localhost:9292/staticFiles/pages/login.html").message(ex.getMessage());
        return JSON.toJSONString(map);
    }

    @ResponseStatus(value = HttpStatus.FORBIDDEN)
    @ExceptionHandler(AuthorizationException.class)
    public String handleException2(AuthorizationException ex) {
//        logger.debug(e.getMessage());
        ResultMap map = resultMap.fail().url("http://localhost:9292/staticFiles/pages/login.html").message(ex.getMessage());
        return JSON.toJSONString(map);
    }

}