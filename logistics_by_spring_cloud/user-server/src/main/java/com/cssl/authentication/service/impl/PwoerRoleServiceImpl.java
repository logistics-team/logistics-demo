package com.cssl.authentication.service.impl;

import com.cssl.entity.PwoerRole;
import com.cssl.authentication.mapper.PwoerRoleMapper;
import com.cssl.authentication.service.IPwoerRoleService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 关联权限与用户之间的关系，权限用户关联表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-07
 */
@Service
public class PwoerRoleServiceImpl extends ServiceImpl<PwoerRoleMapper, PwoerRole> implements IPwoerRoleService {

}
