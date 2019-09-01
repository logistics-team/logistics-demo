package com.cssl.logistics.service.impl;

import com.cssl.logistics.entity.Logistics_user;
import com.cssl.logistics.mapper.Logistics_userMapper;
import com.cssl.logistics.service.ILogistics_userService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 提供一个用户登录和注册，管理进入后台的信息，用户登录信息表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-01
 */
@Service
public class Logistics_userServiceImpl extends ServiceImpl<Logistics_userMapper, Logistics_user> implements ILogistics_userService {

}
