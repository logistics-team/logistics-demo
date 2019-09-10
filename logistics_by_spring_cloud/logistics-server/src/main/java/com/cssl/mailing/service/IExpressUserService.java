package com.cssl.mailing.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cssl.entity.ExpressUser;

/**
 * <p>
 * 记录寄件人信息与收件人信息，收寄件人信息表 服务类
 * </p>
 *
 * @author Devil
 * @since 2019-09-05
 */
public interface IExpressUserService extends IService<ExpressUser> {
    ExpressUser saveUser(ExpressUser user);

}
