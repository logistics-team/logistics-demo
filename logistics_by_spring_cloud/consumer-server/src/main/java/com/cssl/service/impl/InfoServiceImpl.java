package com.cssl.service.impl;

import com.cssl.service.InfoService;
import com.cssl.service.UserService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InfoServiceImpl implements InfoService {

    private UserService userService;
    @Autowired
    public UserService userService(UserService userService){
        this.userService = userService;
        return this.userService;
    }

    @Override
    public String findUserByPhone() {
        Subject subject = SecurityUtils.getSubject();
        if (subject==null){
            return null;
        }
        String principal = (String) subject.getPrincipal();
//        System.out.println("principal = " + principal);
        return userService.findUserByPhone(principal);
    }
}
