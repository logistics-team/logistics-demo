package com.cssl.service.impl;

import com.cssl.service.SecurityService;
import com.cssl.service.UserService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SecurityServiceImpl implements SecurityService {
    @Autowired
    private UserService userService;

    @Override
    public String userLogin(String j_username, String j_password, String encodinginput) {
        Subject subject = SecurityUtils.getSubject();
        // 在认证提交前准备 token（令牌）
        UsernamePasswordToken token = new UsernamePasswordToken(j_username, j_password);
        // 执行认证登陆
        subject.login(token);
        String login = userService.userLogin(j_username, j_password, encodinginput);
        return login;
    }

    @Override
    public String userRegister(String userPhoneTel, String password, String messageCode) {
        //给用户名作为加盐值
        ByteSource salt = ByteSource.Util.bytes(userPhoneTel);
        String newPwd = new SimpleHash("MD5", password, salt, 1024).toHex();
        String register = userService.userRegister(userPhoneTel, newPwd, messageCode);
        return register;
    }

    @Override
    public String isExistence(String phone) {
        return userService.isExistence(phone);
    }

    @Override
    public String sendMessages(String phoneNum) {
        return userService.sendMessages(phoneNum);
    }

    @Override
    public String notLogin() {
        return userService.notLogin();
    }
}
