package com.cssl.mailing.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cssl.entity.ExpressUser;
import com.cssl.mailing.mapper.Express_userDao;
import com.cssl.mailing.service.IExpress_userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Express_userServiceImpl extends ServiceImpl<Express_userDao,ExpressUser> implements IExpress_userService {
    @Autowired
    private Express_userDao expressUserDao;
    @Override
    public int saveExpress_user(ExpressUser expressUser) {
        if (expressUser==null){
            return 0;
        }
        return expressUserDao.saveExpress_user(expressUser);
    }
}
