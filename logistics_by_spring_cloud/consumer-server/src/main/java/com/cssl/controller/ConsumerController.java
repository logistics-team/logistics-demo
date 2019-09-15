package com.cssl.controller;

import com.cssl.entity.LogisticsStatus;
import com.cssl.service.InfoService;
import com.cssl.service.LogisticsService;
import com.cssl.service.SecurityService;
import com.cssl.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("guest")
@Controller
//@RestController
public class ConsumerController {
    private LogisticsService logisticsService;
    @Autowired
    public LogisticsService logisticsService(LogisticsService logisticsService){
        this.logisticsService = logisticsService;
        return this.logisticsService;
    }


    private UserService userService;
    @Autowired
    public UserService userService(UserService userService){
        this.userService = userService;
        return this.userService;
    }

    private SecurityService securityService;
    @Autowired
    public SecurityService securityService(SecurityService securityService){
        this.securityService = securityService;
        return this.securityService;
    }

    private InfoService infoService;
    @Autowired
    public InfoService infoService(InfoService infoService){
        this.infoService = infoService;
        return this.infoService;
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
    public String userLogin(String j_username, String j_password, String encodinginput, HttpSession session) {
        String s = securityService.userLogin(j_username, j_password, encodinginput);
//        System.out.println("s = " + s);
        return s;
    }

    @ResponseBody
    @GetMapping("getUserInfo")
    public String getUserInfo(){
        String userByPhone = infoService.findUserByPhone();
        System.out.println("userByPhone = " + userByPhone);
        return userByPhone;
    }

    /**
     * 注销  退出
     * @return
     */
    @RequestMapping("/logout")
    public String logout() {
//        System.out.println("退出 ！");
        return securityService.logout();
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
        return securityService.userRegister(userPhoneTel, password, messageCode);
    }


    @ResponseBody
    @RequestMapping("/isExistence")    //是否重复手机号
    public String isExistence(String phone){    //手机号是否已经注册
//        System.out.println("phone = " + phone);
        String existence = securityService.isExistence(phone);
//        System.out.println("existence = " + existence);
        return existence;
    }


    @ResponseBody
    @PostMapping("/verificationCode")   //短信发送确认
    public String sendMessages(String phoneNum){    //获取验证码，
        return securityService.sendMessages(phoneNum);
    }

    @RequestMapping("/kickout")  //挤出跳转
    public String kickout(){     //未登录跳转页面
        return "redirect:/staticFiles/pages/login.html";
    }

    @RequestMapping("/notRole")  //无权页面跳转
    public String notRole(){     //未登录跳转页面
        return "redirect:/staticFiles/pages/login.html";
    }

    @RequestMapping("/notLogin")     //未登录跳转
    public String notLogin(){     //未登录跳转页面
        return "redirect:/staticFiles/pages/login.html";
    }


//    @ResponseBody
//    @RequestMapping("/test")
//    public String test(String phone,String name){
//        System.out.println("phone = " + phone);
//        System.out.println("name = " + name);
//        return "成功接收返回的数据";
//    }
}
