package com.cssl.mailing.service.impl;

import com.cssl.mailing.entity.Express_user;
import com.cssl.mailing.mapper.Express_userDao;
import com.cssl.mailing.service.IExpress_userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Express_userServiceImpl implements IExpress_userService {
    @Autowired
    private Express_userDao expressUserDao;
    @Override
    public int saveExpress_user(Express_user expressUser) {
        return expressUserDao.saveExpress_user(expressUser);
    }
}
