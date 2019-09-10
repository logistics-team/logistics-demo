package com.cssl.authentication.controller;

import com.cssl.authentication.service.ILogisticsUserService;
import com.cssl.authentication.shiro.bean.ResultMap;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/guest")
public class LoginController {
    @Autowired
    private ResultMap resultMap;

    @Autowired
    private ILogisticsUserService userService;


    @RequestMapping(value = "/notLogin", method = RequestMethod.GET)
    public ResultMap notLogin() {
        return resultMap.success().message("您尚未登陆！");
    }

    @RequestMapping(value = "/notRole", method = RequestMethod.GET)
    public ResultMap notRole() {
        return resultMap.success().message("您没有权限！");
    }

    @RequestMapping(value = "/logout")
    public ResultMap logout() {
        Subject subject = SecurityUtils.getSubject();
        //注销
        subject.logout();
        return resultMap.success().message("成功注销！");
    }

    /**
     * 登陆
     * @param phone 手机号码
     * @param password 密码
     */
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login(String phone, String password) {
        return userService.login(phone,password,"123");
    }


//    @RequestMapping(value = "/userLogin", method = RequestMethod.POST)
//    public String userLogin(@RequestParam String phone,@RequestParam String password) {
//        //查黑名单
//        boolean backList = userService.isBackList(phone);
//        if (backList)
//            return "黑名单用户";
//        System.out.println("phone = " + phone);
//        System.out.println("password = " + password);
//        // 从SecurityUtils里边创建一个 subject
//        Subject subject = SecurityUtils.getSubject();
//        // 在认证提交前准备 token（令牌）
//        UsernamePasswordToken token = new UsernamePasswordToken(phone, password);
//        // 执行认证登陆
//        subject.login(token);
//        //根据权限，指定返回数据
////        String role = userMapper.getRole(username);
//        String role = userService.getRoleByPhone(phone);
//        if ("user".equals(role)) {
//            return "欢迎登陆";      //返回用户后台
//        }
//        if ("admin".equals(role)) {
//            return "欢迎来到管理员页面";     //返回管理员后台页面
//        }
//        if ("root".equals(role)) {
//            return "欢迎来到超级页面";      //返回管理员页面
//        }
//        return "权限错误！";
//    }
}
