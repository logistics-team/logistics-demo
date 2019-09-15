package com.cssl.service.impl;

import com.cssl.service.SecurityService;
import com.cssl.service.UserService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.cache.Cache;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.ByteSource;
import org.crazycake.shiro.RedisCacheManager;
import org.crazycake.shiro.RedisManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.Deque;

@Service
public class SecurityServiceImpl implements SecurityService {
    @Autowired
    private UserService userService;

    @Autowired
    RedisCacheManager cacheManager = cacheManager();

    @Bean
    public RedisManager redisManager() {
        RedisManager redisManager = new RedisManager();
        redisManager.setHost("47.102.85.126");
        redisManager.setPort(6379);
        redisManager.setExpire(60*60*30);// 配置缓存过期时间
        redisManager.setTimeout(0);
        // redisManager.setPassword(password);
        return redisManager;
    }
    @Bean
    public RedisCacheManager cacheManager() {
        RedisCacheManager redisCacheManager = new RedisCacheManager();
        redisCacheManager.setRedisManager(redisManager());
        return redisCacheManager;
    }


    private Cache<String, Deque<Serializable>> cache = cacheManager.getCache("shiro_redis_cache");



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


    @Override
    public String logout() {
        Subject subject = SecurityUtils.getSubject();
        if (subject != null) {
            Session session = subject.getSession();
            String phone = (String) subject.getPrincipal();//电话号码

            Serializable sessionId = session.getId();
            //读取缓存   没有就存入
            Deque<Serializable> deque = null;
            if (cache != null) {
                deque = cache.remove(phone);
                System.out.println("退出清空之前的session");
            }
            subject.logout();
        }
        return "redirect:/staticFiles/pages/login.html";
    }
}
