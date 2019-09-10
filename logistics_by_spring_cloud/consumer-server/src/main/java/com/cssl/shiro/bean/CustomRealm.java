package com.cssl.shiro.bean;


import com.cssl.service.UserService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

@Component           //AuthenticatingRealm
public class CustomRealm extends AuthorizingRealm {

    private UserService service;

    @Autowired
    public void setService(UserService service){
        this.service = service;
    }

    /**
     * 获取身份验证信息
     * Shiro中，最终是通过 Realm 来获取应用程序中的用户、角色及权限信息的。
     *
     * @param authenticationToken 用户身份信息 token
     * @return 返回封装了用户信息的 AuthenticationInfo 实例
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        System.out.println("————身份认证方法————");
        UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;
        // 从数据库获取对应用户名密码的用户
//        String password = userService.getPassword(token.getUsername());
        String phone = (String) token.getPrincipal();

//        System.out.println("phone = " + phone);
        String password = service.getPasswordByPhone(phone);

        //加盐
        ByteSource salt = ByteSource.Util.bytes(phone);
        String old_password = new String((char[]) token.getCredentials());
        String new_password = new SimpleHash("MD5", old_password, salt, 1024).toHex();
//        System.out.println("old_password = " + old_password);
//        System.out.println("new_password = " + new_password);
//        System.out.println("password = " + password);
        if (null == password) {
            throw new AccountException("账号不正确");
        }
        else if (!password.equals(new_password)) {
            throw new AccountException("密码不正确");
        }
        return new SimpleAuthenticationInfo(token.getPrincipal(), password, salt, getName());//告诉token加盐处理
    }

    /**
     * 获取授权信息
     *
     * @param principalCollection
     * @return
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        System.out.println("————权限认证————");
//        String username = (String) SecurityUtils.getSubject().getPrincipal();
        String principal = (String) SecurityUtils.getSubject().getPrincipal();  //手机号
        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
        //获得该用户角色
//        String role = userMapper.getRole(username);
        System.out.println("principal = " + principal);
        String role = service.getRoleByPhone(principal);
        System.out.println("role = " + role);
        Set<String> set = new HashSet<>();
        //需要将 role 封装到 Set 作为 info.setRoles() 的参数
        set.add(role);
        //设置该用户拥有的角色
        info.setRoles(set);
        return info;
    }
}
