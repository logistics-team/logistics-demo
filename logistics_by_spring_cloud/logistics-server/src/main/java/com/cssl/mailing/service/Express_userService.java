package com.cssl.mailing.service;

import com.cssl.entity.ExpressUser;

public interface Express_userService {
    int saveExpress_user(ExpressUser expressUser);
    ExpressUser showUserById(Integer uId);
}