package com.cssl.authentication.service.impl;

import com.alibaba.fastjson.JSON;
import com.aliyuncs.CommonRequest;
import com.aliyuncs.CommonResponse;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.exceptions.ServerException;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cssl.authentication.mapper.LogisticsUserMapper;
import com.cssl.authentication.service.ILogisticsRoseService;
import com.cssl.authentication.service.ILogisticsUserService;
import com.cssl.authentication.service.IRoleUserService;
import com.cssl.authentication.shiro.bean.ResultMap;
import com.cssl.entity.LogisticsRose;
import com.cssl.entity.LogisticsUser;
import com.cssl.entity.RoleUser;
import com.cssl.util.NonEmptyUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.crypto.SecureRandomNumberGenerator;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

/**
 * <p>
 * 提供一个用户登录和注册，管理进入后台的信息，用户登录信息表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-07
 */
@Service
public class LogisticsUserServiceImpl extends ServiceImpl<LogisticsUserMapper, LogisticsUser> implements ILogisticsUserService {
    @Autowired
    private IRoleUserService roleUserService;   //角色权限关系
    @Autowired
    private LogisticsUserMapper userMapper;     //用户mapper
    @Autowired
    private ILogisticsRoseService roseService;      //角色信息
    @Autowired
    private ResultMap resultMap;
    //短信随机数
    private Integer MessageCode;

    //手机号获取角色
    @Override
    public String getRoleByPhone(String userPhone) {
        if (isBackList(userPhone))
            return null;
        //取用户id
        Integer userId = userMapper.getIdByPhone(userPhone);
        //根据电话取到对应的关系  1.一个用户可有多个角色  这里只用一个角色
        Integer roleId = roleUserService.getRoleIdByUserId(userId);
        //获取角色信息
        LogisticsRose rose = roseService.getRoleByRoleId(roleId);
        if (rose != null) {
            return rose.getLrName();
        }
        return null;
    }

    //获取角色名称  用用户名
    @Override
    public String getRoleByUsername(String username) {
        //如果是黑名单则不能登录
        if (isBackList(username))
            return null;
        //取用户id
        Integer userId = userMapper.getIdByUsername(username);

        //根据电话取到对应的关系  1.一个用户可有多个角色  这里只用一个角色
        Integer roleId = roleUserService.getRoleIdByUserId(userId);
        //获取角色信息
        LogisticsRose rose = roseService.getRoleByRoleId(roleId);
        if (rose != null) {
            return rose.getLrName();
        }
        return null;
    }

    //根据用户名查密码
    @Override
    public String getPasswordByName(String username) {
        return userMapper.getPasswordByName(username);
    }

    //根据号码查密码
    @Override
    public String getPasswordByPhone(String userPhone) {
        return userMapper.getPasswordByPhone(userPhone);
    }

    //查询是否为黑名单用户
    @Override
    public boolean isBackList(String nameOrPhone) {
        String name = userMapper.isBackListByUsername(nameOrPhone);
        String phone = null;
        if ("1".equals(name) || "1" == name) {       //黑名单禁止登录
            return true;
        }
        if (name == null) {    //名称查不到 查号码
            phone = userMapper.isBackListByUserPhone(nameOrPhone);
        }
        if ("1".equals(phone) || "1" == phone) {     //黑名单禁止登录
            return true;
        }
        return false;        //非黑名单
    }

    //查询是否重复账户
    @Override
    public int isRedundant(String usernameOrPhone) {
        int isRedundant = userMapper.isRedundantByUsername(usernameOrPhone);       //先查用户名
        if (isRedundant == 0)
            isRedundant = userMapper.isRedundantByPhone(usernameOrPhone);           //再查手机号
        return isRedundant;
    }

    //注册
    @Override
    public String register(String usernameOrPhone, String password, String messageCode) {
        Map<String,Object> map = new HashMap<>();   //注册登录状态
        String message = "注册失败！"; //注册提示信息
        String result = "false";        //注册是否成功
        String url = "http://localhost:9292/staticFiles/pages/register.html";  //跳转页面
        //封装信息
        map.put("message",message);
        map.put("result",result);
        map.put("url",url);


        if (NonEmptyUtils.isEmpty(usernameOrPhone)){  //手机非空判断
            message = "手机号不能为空";
            map.put("message",message);
            return JSON.toJSONString(map);
        }
        if (NonEmptyUtils.isEmpty(password)){  //密码非空判断
            message = "密码不能为空";
            map.put("message",message);
            return JSON.toJSONString(map);
        }
        if (NonEmptyUtils.isEmpty(messageCode)){  //手机非空判断
            message = "验证码不能为空";
            map.put("message",message);
            return JSON.toJSONString(map);
        }

        //查重
        int redundant = isRedundant(usernameOrPhone);
        if (redundant>0){
            message = "该手机已经注册";
            map.put("message",message);
            return JSON.toJSONString(map);
        }

        //手机号注册验证   ************************************** 待做
//        System.out.println("MessageCode = " + MessageCode);
//        System.out.println("messageCode = " + messageCode);
//        System.out.println(Integer.parseInt(messageCode.trim())==MessageCode);
        if (Integer.parseInt(messageCode.trim())!=MessageCode){
            map.put("message","验证码输入错误，注册失败");
            return JSON.toJSONString(map);
        }




        //给用户名作为加盐值
        ByteSource salt = ByteSource.Util.bytes(usernameOrPhone);
        /*
         * MD5加密：
         * 使用SimpleHash类对原始密码进行加密。
         * 第一个参数代表使用MD5方式加密
         * 第二个参数为原始密码
         * 第三个参数为盐值，即用户名
         * 第四个参数为加密次数
         * 最后用toHex()方法将加密后的密码转成String
         * */
        String newPwd = new SimpleHash("MD5", password, salt, 1024).toHex();


        //--手机号注册
        LogisticsUser logisticsUser = new LogisticsUser();
        logisticsUser.setLuGmtCreate(LocalDateTime.now());      //创建时间

        logisticsUser.setLuPassword(newPwd);
        logisticsUser.setLuPhone(usernameOrPhone);
        int registerByPhone = userMapper.saveLogisticsUser(logisticsUser);
        //--用户名注册

        if (registerByPhone==0){
            return JSON.toJSONString(map);
        }
        //分配角色  默认普通用户
        String role = "user";
        RoleUser roleUser = new RoleUser();
        roleUser.setLuId(userMapper.findMaxId());
        roleUser.setLrId(roseService.findIdByRole(role));
        int saveRoleUser = roleUserService.saveRoleUser(roleUser);
        if (saveRoleUser==0){
            message = "角色分配失败！";
            map.put("message",message);
            return JSON.toJSONString(map);
        }
        //分配权限  拥有修改自己订单 删除自己订单  处理自己投诉的功能
        url = "http://localhost:9292/staticFiles/pages/login.html";
        result = "true";
        message = "注册成功！";
        map.put("result",result);
        map.put("url",url);
        map.put("message",message);
        return JSON.toJSONString(map);
    }

    //登录
    @Override
    public String login(String phone, String password, String messageCode) {

        Map<String,Object> map = new HashMap<>();               //封装登录状态
        String message = "登录成功！";                           //登录提示信息
        boolean result = true;                                  //登录是否成功
        String url = "redirect:/staticFiles/pages/index.html";  //用户后台
        map.put("message",message);
        map.put("result",result);
        map.put("url",url);


        if (NonEmptyUtils.isEmpty(phone)){  //手机非空判断
            message = "手机号不能为空";
            throw new AccountException(message);
        }
        if (NonEmptyUtils.isEmpty(password)){  //密码非空判断
            message = "密码输入为空！";
            throw new AccountException(message);
        }
        if (NonEmptyUtils.isEmpty(messageCode)){  //手机非空判断
            message = "验证码不能为空！";
            throw new AccountException(message);
        }
        //手机号登录验证   ************************************** 待做





        //查黑名单
        boolean backList = isBackList(phone);
        if (backList){
            message = "你是黑名单用户，请前往客服咨询解封！";
//            map.put("mess",mess);
//            return JSON.toJSONString(map);
            throw new AccountException(message);
        }

        // 从SecurityUtils里边创建一个 subject
        Subject subject = SecurityUtils.getSubject();
        // 在认证提交前准备 token（令牌）
        UsernamePasswordToken token = new UsernamePasswordToken(phone, password);
        // 执行认证登陆
        subject.login(token);
        //根据权限，指定返回数据
//        String role = userMapper.getRole(username);
        String role = getRoleByPhone(phone);
        if ("user".equals(role)) {
            message = "欢迎登陆,"+phone;      //返回用户后台
            map.put("message",message);
            map.put("url",url);
//            将用户存入session中
//            把session存入redis中
            return JSON.toJSONString(map);
        }
        if ("admin".equals(role)) {
            message = "欢迎登陆管理员页面,"+phone;     //返回管理员后台页面
            map.put("message",message);
            return JSON.toJSONString(map);
        }
        if ("root".equals(role)) {
            message = "欢迎登陆超级用户"+phone;;      //返回管理员页面
            map.put("message",message);
            return JSON.toJSONString(map);
        }
        throw new AccountException("权限不足");
    }

    //短信服务
    @Override
    public Integer shortMessage(String phone) {
        //生成的随机数
        Integer num=(int)((Math.random()*9+1)*100000);
        DefaultProfile profile = DefaultProfile.getProfile("cn-hangzhou", "LTAI4FemCm9XzQoYoRWQq6GZ", "aUdBGyCfhO0xk7aHXj45WqGVt6HbSE");
        IAcsClient client = new DefaultAcsClient(profile);
        CommonRequest request = new CommonRequest();
        request.setMethod(MethodType.POST);
        request.setDomain("dysmsapi.aliyuncs.com");
        request.setVersion("2017-05-25");
        request.setAction("SendSms");
        request.putQueryParameter("RegionId", "cn-hangzhou");
        //电话号码
        request.putQueryParameter("PhoneNumbers", phone);
        //短信签名
        request.putQueryParameter("SignName", "小刘之家");
        //短信模板id
        request.putQueryParameter("TemplateCode", "SMS_173478129");
        //随机数的格式,这行代码需要自己手敲
        request.putQueryParameter("TemplateParam", "{\"code\":"+num+"}");
        try {
            CommonResponse response = client.getCommonResponse(request);
            System.out.println(response.getData());
        } catch (ServerException e) {
            e.printStackTrace();
        } catch (ClientException e) {
            e.printStackTrace();
        }
        return num;
    }

    //发送短信
    @Override
    public String sendMessages(String phoneNum) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("message", "验证码已发送！");
        MessageCode = shortMessage(phoneNum);
        if (NonEmptyUtils.isEmpty(MessageCode))
            return null;
        return JSON.toJSONString(map);
    }

    @Override
    public String isExistence(String phone) {
        int redundant = isRedundant(phone);
        Map<String, Object> map = new HashMap<String, Object>();
        if (redundant>0){
            map.put("message", "该手机号已被注册,请登录！");
            return JSON.toJSONString(map);
        }
        map.put("message", "手机未被注册！");
        return JSON.toJSONString(map);

    }


}
