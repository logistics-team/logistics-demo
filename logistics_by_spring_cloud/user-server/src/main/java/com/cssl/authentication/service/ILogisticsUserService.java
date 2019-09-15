package com.cssl.authentication.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cssl.entity.LogisticsUser;

/**
 * <p>
 * 提供一个用户登录和注册，管理进入后台的信息，用户登录信息表 服务类
 * </p>
 *
 * @author Devil
 * @since 2019-09-07
 */
public interface ILogisticsUserService extends IService<LogisticsUser> {

    String getRoleByPhone(String userPhone);

    String getRoleByUsername(String username);

    String getPasswordByName(String username);

    String getPasswordByPhone(String userPhone);

    boolean isBackList(String nameOrPhone);//查黑

    int isRedundant(String usernameOrPhone);//查重

    String register(String usernameOrPhone, String password, String messCode);

    String login(String phone, String password, String messCode);

    Integer shortMessage(String phone);

    String sendMessages(String phoneNum);

    String isExistence(String phone);

    LogisticsUser findUserByPhone(String phone);
}
