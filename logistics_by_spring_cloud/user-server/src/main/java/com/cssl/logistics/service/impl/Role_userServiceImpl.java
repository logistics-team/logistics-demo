package com.cssl.logistics.service.impl;

import com.cssl.logistics.entity.Role_user;
import com.cssl.logistics.mapper.Role_userMapper;
import com.cssl.logistics.service.IRole_userService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 关联用户和角色之间的关系，角色用户关联表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-01
 */
@Service
public class Role_userServiceImpl extends ServiceImpl<Role_userMapper, Role_user> implements IRole_userService {

}
