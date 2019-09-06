package com.cssl.mailing.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cssl.entity.ExpressUser;

public interface IExpress_userService extends IService<ExpressUser> {
    int saveExpress_user(ExpressUser expressUser);
}
