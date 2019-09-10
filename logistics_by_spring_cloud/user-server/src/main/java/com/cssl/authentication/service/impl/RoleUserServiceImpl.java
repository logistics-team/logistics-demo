package com.cssl.authentication.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cssl.authentication.mapper.RoleUserMapper;
import com.cssl.authentication.service.IRoleUserService;
import com.cssl.entity.RoleUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 关联用户和角色之间的关系，角色用户关联表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-07
 */
@Service
public class RoleUserServiceImpl extends ServiceImpl<RoleUserMapper, RoleUser> implements IRoleUserService {
    @Autowired
    private RoleUserMapper roleUserMapper;

    @Override
    public Integer getRoleIdByUserId(Integer userId) {
        return roleUserMapper.getRoleIdByUserId(userId);
    }

    @Override
    public int saveRoleUser(RoleUser roleUser) {
        return roleUserMapper.saveRoleUser(roleUser);
    }
}
