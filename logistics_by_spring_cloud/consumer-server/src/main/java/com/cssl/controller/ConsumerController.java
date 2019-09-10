package com.cssl.controller;

import com.alibaba.fastjson.JSON;
import com.cssl.entity.LogisticsStatus;
import com.cssl.service.LogisticsService;
import com.cssl.service.UserService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

//@RequestMapping("guest")
@Controller
public class ConsumerController {
    @Autowired
    private LogisticsService logisticsService;
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/notLogin", method = RequestMethod.GET)
    public String notLogin() {
        return "redirect:/staticFiles/pages/login.html";
    }

    @RequestMapping(value = "/notRole", method = RequestMethod.GET)
    public String notRole() {
        return "redirect:/staticFiles/pages/placeOrder.html";
    }

    @RequestMapping("show")
    @ResponseBody//显示订单
    public String show(@RequestParam(required = false, name = "id", defaultValue = "0") int id, int page, int limit) {
        System.out.println("id:" + id + ",page:" + page + ",limit:" + limit);
        String s = userService.show(id, page, limit);// 服务者 名 logistics-server 访问orders/show方法 获取String 数据
//        System.out.println("数据显示:"+s);
        return s;
    }

    @RequestMapping("l_statue")
    @ResponseBody//订单下拉框
    public List<LogisticsStatus> l_statue(@RequestParam(required = false, name = "id", defaultValue = "0") int id) {
//        System.out.println("id:"+id);
        String s = userService.l_statue(id);// 服务者 名 logistics-server 访问orders/show方法 获取list 数据
        List<LogisticsStatus> list = new ArrayList<LogisticsStatus>();
        String[] ss = s.split(",");
        for (int i = 0; i < ss.length; i += 2) {
            LogisticsStatus ls = new LogisticsStatus();
            ls.setLsId(Integer.parseInt(ss[i]));
            ls.setLsContext(ss[i + 1]);
            list.add(ls);
        }
//        System.out.println("下拉框显示:"+list);
        return list;
    }

    @RequestMapping("ls_update")
    @ResponseBody//编辑订单
    public int ls_update(@RequestParam(required = false, name = "ls_id", defaultValue = "0") int ls_id, @RequestParam(required = false, name = "ts_id", defaultValue = "") String ts_id) {
//        System.out.println("ls_id:"+ls_id+",ts_id:"+ts_id);
        String s = userService.ls_update(ls_id, ts_id);// 服务者 名 logistics-server 访问orders/show方法 获取int 数据
        int i = Integer.parseInt(s);
        return i;
    }

    //参数
//    Integer it_id, BigDecimal weight, BigDecimal eg_appraised_price, String eg_special_context,
//    String eu_receipt_name, Integer ep_receipt_id, Integer ec_receipt_id,Integer ea_receipt_id,
//    String eu_receipt_phone, String eu_sender_name, Integer ep_sender_id,Integer ec_sender_id,
//    Integer ea_sender_id, String eu_sender_phone, Integer eg_id


    @PostMapping("confirmSent")
    public String confirmOrder(String senderProvince, String senderCity, String senderArea, String sendAddress, String sendName, String sendTel, String sendPhone,
                               String acceptProvince, String acceptCity, String acceptArea, String receiveAddress, String receiveName, String receiveTel, String receivePhone,
                               String goodsType, String goodsWeight, String insuranceMoney, String goodsRemarks, String transport) {
//        System.out.println("senderProvince = " + senderProvince);
//        System.out.println("senderCity = " + senderCity);
//        System.out.println("senderArea = " + senderArea);
//        System.out.println("sendAddress = " + sendAddress);
//        System.out.println("sendName = " + sendName);
//        System.out.println("sendTel = " + sendTel);
//        System.out.println("sendPhone = " + sendPhone);
//        System.out.println("acceptProvince = " + acceptProvince);
//        System.out.println("acceptCity = " + acceptCity);
//        System.out.println("acceptArea = " + acceptArea);
//        System.out.println("receiveAddress = " + receiveAddress);
//        System.out.println("receiveName = " + receiveName);
//        System.out.println("receiveTel = " + receiveTel);
//        System.out.println("receivePhone = " + receivePhone);
//        System.out.println("goodsType = " + goodsType);
//        System.out.println("goodsWeight = " + goodsWeight);
//        System.out.println("insuranceMoney = " + insuranceMoney);
//        System.out.println("goodsRemarks = " + goodsRemarks);
//        System.out.println("transport = " + transport);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("sendProvince", senderProvince);
        map.put("sendCity", senderCity);
        map.put("sendArea", senderArea);
        map.put("sendAddress", sendAddress);
        map.put("sendName", sendName);
        map.put("sendTel", sendTel);
        map.put("sendPhone", sendPhone);
        map.put("receiveProvince", acceptProvince);
        map.put("receiveCity", acceptCity);
        map.put("receiveArea", acceptArea);
        map.put("receiveAddress", receiveAddress);
        map.put("receiveName", receiveName);
        map.put("receiveTel", receiveTel);
        map.put("receivePhone", receivePhone);
        map.put("goodsType", goodsType);
        map.put("goodsWeight", goodsWeight);
        map.put("insuranceMoney", insuranceMoney);
        map.put("goodsRemarks", goodsRemarks);
        map.put("transport", transport);
//        logisticsService.confirmOrder(map);
//        System.out.println("logisticsService.confirmOrder(map) = " + logisticsService.confirmOrder(map));//转发到沙箱支付页面
        return logisticsService.confirmOrder(map);
    }


    /**
     * 登录
     * @param j_username     手机号
     * @param j_password  密码
     * @param encodinginput   验证码
     * @return
     */
    @ResponseBody
    @PostMapping("login")
    public String userLogin(String j_username, String j_password, String encodinginput) {
//        System.out.println("phone = " + j_username);
//        System.out.println("password = " + j_password);
//        System.out.println("encodinginput = " + encodinginput);
        // 从SecurityUtils里边创建一个 subject
        Subject subject = SecurityUtils.getSubject();
        // 在认证提交前准备 token（令牌）
        UsernamePasswordToken token = new UsernamePasswordToken(j_username, j_password);
        // 执行认证登陆
        subject.login(token);
        String login = userService.userLogin(j_username, j_password, encodinginput);
//        System.out.println("login = " + login);
        return login;
    }

    /**
     * 注册
     * @param userPhoneTel 手机号
     * @param password      密码
     * @param messageCode   验证码
     * @return
     */
    @ResponseBody
    @PostMapping("/register")
    public String userRegister(String userPhoneTel, String password, String messageCode) {
//        System.out.println("123 = " + 123);
//        System.out.println("userPhoneTel = " + userPhoneTel);
//        System.out.println("password = " + password);
//        System.out.println("messageCode = " + messageCode);
//        Map<String, Object> map = new HashMap<String, Object>();
//        map.put("result", "true");
//        map.put("mess", "注册成功！");
//        map.put("url","http://localhost:9292/staticFiles/pages/login.html");
//        String o = JSON.toJSONString(map);
//        System.out.println("o = " + o);
        //给用户名作为加盐值
        ByteSource salt = ByteSource.Util.bytes(userPhoneTel);
        String newPwd = new SimpleHash("MD5", password, salt, 1024).toHex();
        System.out.println("newPwd = " + newPwd);
        String register = userService.userRegister(userPhoneTel, newPwd, messageCode);
        System.out.println("register = " + register);
        return register;
    }


    @ResponseBody
    @PostMapping("/isExistence")
    public String isExistence(String phone){
//        System.out.println("phone = " + phone);
//        Map<String, Object> map = new HashMap<String, Object>();
//        map.put("message", "该手机号已被注册,请登录！");
        return userService.isExistence(phone);
    }

    @ResponseBody
    @PostMapping("/verificationCode")
    public String sendMessages(String phoneNum){
//        System.out.println("phoneNum = " + phoneNum);
        //像生产者发请求
//        Map<String, Object> map = new HashMap<String, Object>();
//        map.put("message", "验证码已发送！");
        return userService.sendMessages(phoneNum);
        //返回验证
    }

    @RequestMapping("notLogin")
    public String ontLogin(){       //未登录跳转页面
        return userService.notLogin();
    }


    @ResponseBody
    @RequestMapping("findpwd")
    public String findpwd(String phone){
        return userService.getRoleByPhone(phone);
    }
}
