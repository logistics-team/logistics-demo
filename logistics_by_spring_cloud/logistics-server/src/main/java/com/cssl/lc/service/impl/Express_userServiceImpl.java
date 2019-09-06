package com.cssl.lc.service.impl;

import com.cssl.entity.ExpressUser;
import com.cssl.lc.mapper.Express_userDao;
import com.cssl.lc.service.Express_userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Express_userServiceImpl implements Express_userService {
    @Autowired(required = false)
    private Express_userDao expressUserDao;
    @Override
    public int saveExpress_user(ExpressUser expressUser) {
        if (expressUser==null){
            return 0;
        }
        return expressUserDao.saveExpress_user(expressUser);
    }

    @Override
    public ExpressUser showUserById(Integer uId) {
        System.out.println("uid"+uId);
        ExpressUser expressUser = expressUserDao.showUserById(uId);
        System.out.println(expressUser.toString());
        return expressUser;
    }
}
