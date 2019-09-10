package com.cssl.authentication.service;

import com.cssl.entity.LogisticsRose;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 * 记录角色类型，角色表 服务类
 * </p>
 *
 * @author Devil
 * @since 2019-09-07
 */
public interface ILogisticsRoseService extends IService<LogisticsRose> {

    LogisticsRose getRoleByRoleId(Integer roleId);

    Integer findIdByRole(String role);
}
