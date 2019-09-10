package com.cssl.authentication.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cssl.authentication.mapper.LogisticsRoseMapper;
import com.cssl.authentication.service.ILogisticsRoseService;
import com.cssl.entity.LogisticsRose;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 记录角色类型，角色表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-07
 */
@Service
public class LogisticsRoseServiceImpl extends ServiceImpl<LogisticsRoseMapper, LogisticsRose> implements ILogisticsRoseService {
    @Autowired
    private LogisticsRoseMapper roseMapper;

    @Override
    public LogisticsRose getRoleByRoleId(Integer roleId) {
        return roseMapper.getRoseById(roleId);
    }

    @Override
    public Integer findIdByRole(String role) {
        return roseMapper.findIdByRole(role);
    }
}
