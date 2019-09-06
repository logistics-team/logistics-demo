package com.cssl.mailing.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cssl.entity.ExpressUser;
import com.cssl.mailing.mapper.ExpressUserMapper;
import com.cssl.mailing.service.IExpressUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 记录寄件人信息与收件人信息，收寄件人信息表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-05
 */
@Service
public class ExpressUserServiceImpl extends ServiceImpl<ExpressUserMapper, ExpressUser> implements IExpressUserService {

    @Autowired
    private ExpressUserMapper mapper;
    @Override
    public ExpressUser saveUser(ExpressUser user) {
        int i = mapper.saveUser(user);
        if (i>0)
            user.setEuId(mapper.findEuId());
        return user;
    }
}
