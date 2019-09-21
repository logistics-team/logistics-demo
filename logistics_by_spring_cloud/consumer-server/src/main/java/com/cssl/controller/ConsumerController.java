package com.cssl.controller;

import com.alibaba.fastjson.JSON;
import com.alipay.api.AlipayApiException;
import com.cssl.entity.LogisticsOrders;
import com.cssl.entity.LogisticsStatus;
import com.cssl.entity.TransportationStatus;
import com.cssl.service.*;
import com.cssl.vo.TransportationInfo;
import com.cssl.vo.WaybillInfo;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("guest")
@Controller
//@RestController
public class ConsumerController {
    private AlipayOrders alipayOrders;

    @Autowired
    public AlipayOrders alipayOrders(AlipayOrders alipayOrders) {
        this.alipayOrders = alipayOrders;
        return this.alipayOrders;
    }

    //智能填写
    private AddressInfo addressInfo;

    @Autowired
    public AddressInfo addressInfo(AddressInfo addressInfo) {
        this.addressInfo = addressInfo;
        return this.addressInfo;
    }

    private LogisticsService logisticsService;

    @Autowired
    public LogisticsService logisticsService(LogisticsService logisticsService) {
        this.logisticsService = logisticsService;
        return this.logisticsService;
    }


    private UserService userService;

    @Autowired
    public UserService userService(UserService userService) {
        this.userService = userService;
        return this.userService;
    }

    private SecurityService securityService;

    @Autowired
    public SecurityService securityService(SecurityService securityService) {
        this.securityService = securityService;
        return this.securityService;
    }

    private InfoService infoService;

    @Autowired
    public InfoService infoService(InfoService infoService) {
        this.infoService = infoService;
        return this.infoService;
    }

    //findLogisticsOrders  //查询物流订单
    @ResponseBody
    @RequestMapping("findLogisticsOrders")
    public  Map<String, Object> findLogisticsOrders(String orderTextInput) {

        System.out.println("orderTextInput = " + orderTextInput);

        List<Map<String,Object>> dataList = new ArrayList<>();
        for (int i = 1; i <= 20; i++) {
            Map<String,Object> mdataList = new HashMap<>();
            mdataList.put("orderNum","运单号"+i);
            mdataList.put("state","运单状态"+i);
            List<Map<String,Object>> data = new ArrayList<>();
            for (int j = 1; j <= 10; j++) {
                Map<String,Object> mdata = new HashMap<>();
                mdata.put("time","时间"+j);
                mdata.put("context","到达地址及其信息"+j);
                data.add(mdata);
            }
            mdataList.put("data",data);
            dataList.add(mdataList);
        }

//        Map<String,Object> mdata = new HashMap<>();
//        mdata.put("time","时间");
//        mdata.put("context","到达地址及其信息");
//        Map<String,Object> mdata2 = new HashMap<>();
//        mdata2.put("time","时间2");
//        mdata2.put("context","到达地址及其信息2");
//        Map<String,Object> mdata3 = new HashMap<>();
//        mdata3.put("time","时间3");
//        mdata3.put("context","到达地址及其信息3");
//        Map<String,Object> mdata4 = new HashMap<>();
//        mdata4.put("time","时间4");
//        mdata4.put("context","到达地址及其信息4");
//        List<Map<String,Object>> data = new ArrayList<>();
//        data.add(mdata);
//        data.add(mdata2);
//        data.add(mdata3);
//        data.add(mdata4);

//        Map<String,Object> mdataList = new HashMap<>();
//        mdataList.put("orderNum","运单号");
//        mdataList.put("state","运单状态");
//        mdataList.put("data",data);
//        Map<String,Object> mdataList2 = new HashMap<>();
//        mdataList2.put("orderNum","运单号");
//        mdataList2.put("state","运单状态");
//        mdataList2.put("data",data);
//        Map<String,Object> mdataList3 = new HashMap<>();
//        mdataList3.put("orderNum","运单号");
//        mdataList3.put("state","运单状态");
//        mdataList3.put("data",data);
//        List<Map<String,Object>> dataList = new ArrayList<>();
//        dataList.add(mdataList);
//        dataList.add(mdataList2);
//        dataList.add(mdataList3);


        Map<String, Object> map = new HashMap<>();
        map.put("returnStatus", "01");
//        map.put("returnStatus","02");
        map.put("returnMsg", "未查询到订单:"+orderTextInput);
        map.put("dataList", dataList);



        String s = JSON.toJSONString(map);
        System.out.println("s = " + s);
        return map;
    }


    /**
     * 支付宝订单下单 2
     *
     * @param response
     * @param request
     * @param ordersId
     * @param amount
     * @throws IOException
     */
    @RequestMapping("ali/{ordersId}/{amount}")
    public void ali(HttpServletResponse response, HttpServletRequest request, @PathVariable(value = "ordersId") String ordersId, @PathVariable(value = "amount") String amount) throws IOException {
        alipayOrders.ali(response, request, ordersId, amount);
    }

    /**
     * 寄件下单
     *
     * @param sendProvinceCode
     * @param sendCityCode
     * @param sendRegionCode
     * @param sendProvinceName
     * @param sendCityName
     * @param sendRegionName
     * @param sendAddress
     * @param sendName
     * @param sendTel
     * @param sendPhone
     * @param receiveProvinceCode
     * @param receiveCityCode
     * @param receiveRegionCode
     * @param receiveProvinceName
     * @param receiveCityName
     * @param receiveRegionName
     * @param receiveAddress
     * @param receiveName
     * @param receiveTel
     * @param receivePhone
     * @param goodsType
     * @param goodsWeight
     * @param insuranceMoney
     * @param goodsRemarks
     * @param transport
     * @return
     */
    @PostMapping("confirmSent")
    @ResponseBody
    public String confirmOrder(String sendProvinceCode, String sendCityCode, String sendRegionCode,
                               String sendProvinceName, String sendCityName, String sendRegionName,
                               String sendAddress, String sendName, String sendTel, String sendPhone,
                               String receiveProvinceCode, String receiveCityCode, String receiveRegionCode,
                               String receiveProvinceName, String receiveCityName, String receiveRegionName,
                               String receiveAddress, String receiveName, String receiveTel, String receivePhone,
                               String goodsType, String goodsWeight, String insuranceMoney, String goodsRemarks,
                               String transport, String luId) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("luId", luId);
        //寄件人信息
        map.put("sendProvinceCode", sendProvinceCode);
        map.put("sendCityCode", sendCityCode);
        map.put("sendRegionCode", sendRegionCode);
        map.put("sendProvinceName", sendProvinceName);
        map.put("sendCityName", sendCityName);
        map.put("sendRegionName", sendRegionName);
        map.put("sendAddress", sendAddress);
        map.put("sendName", sendName);
        map.put("sendTel", sendTel);
        map.put("sendPhone", sendPhone);

        //收寄人信息
        map.put("receiveProvinceCode", receiveProvinceCode);
        map.put("receiveCityCode", receiveCityCode);
        map.put("receiveRegionCode", receiveRegionCode);
        map.put("receiveProvinceName", receiveProvinceName);
        map.put("receiveCityName", receiveCityName);
        map.put("receiveRegionName", receiveRegionName);
        map.put("receiveAddress", receiveAddress);
        map.put("receiveName", receiveName);
        map.put("receiveTel", receiveTel);
        map.put("receivePhone", receivePhone);

        //物品信息
        map.put("goodsType", goodsType);
        map.put("goodsWeight", goodsWeight);
        map.put("insuranceMoney", insuranceMoney);
        map.put("goodsRemarks", goodsRemarks);
        map.put("transport", transport);
//        System.out.println("map = " + map);
        String s = logisticsService.confirmOrder(map);
//        System.out.println("s = " + s);
        return s;
    }


    /**
     * 运费预估   2
     *
     * @return
     */
    @RequestMapping("freightEstimate")
    @ResponseBody
    public String freightEstimate(Integer sendProvinceCode, Integer sendRegionCode, Integer receiveProvinceCode, Integer receiveRegionCode, Double goodsWeight, Integer insuranceMoney, Boolean transport) {
        System.out.println("sendProvinceCode = " + sendProvinceCode);           //发出省
        System.out.println("sendRegionCode = " + sendRegionCode);               //发出区县
        System.out.println("receiveProvinceCode = " + receiveProvinceCode);     //接收省
        System.out.println("receiveRegionCode = " + receiveRegionCode);         //接收 区县
        System.out.println("goodsWeight = " + goodsWeight);                     //物品重量
        System.out.println("insuranceMoney = " + insuranceMoney);               //保价
        System.out.println("transport = " + transport);
        boolean isProvince = sendProvinceCode.equals(receiveProvinceCode);
        System.out.println("isProvince = " + isProvince);


        Map<String, Object> map = new HashMap<String, Object>();
        map.put("sendRegionCode", sendRegionCode);   //状态
        map.put("receiveRegionCode", receiveRegionCode);          //首重
        map.put("goodsWeight", goodsWeight);    //续重
        map.put("transport", transport);
        map.put("isProvince", isProvince);   //保费
        map.put("insuranceMoney", insuranceMoney);      //预计运费
//        map.put("sendRegionCode","123456");   //状态

//        JSON.toJSONString(map);

        return logisticsService.freightEstimate(map);
    }


    /**
     * 登录
     *
     * @param j_username    手机号
     * @param j_password    密码
     * @param encodinginput 验证码
     * @return
     */
    @ResponseBody
    @PostMapping("login")
    public String userLogin(String j_username, String j_password, String encodinginput) {
        String s = securityService.userLogin(j_username, j_password, encodinginput);
        return s;
    }

    /**
     * 获取登录的用户信息 2
     *
     * @return
     */
    @ResponseBody
    @GetMapping("getUserInfo")
    public String getUserInfo() {
        String userByPhone = infoService.findUserByPhone();
        return userByPhone;
    }

    /**
     * 注销  退出
     *
     * @return
     */
    @RequestMapping("/logout")
    public String logout() {
        return securityService.logout();
    }

    /**
     * 注册
     *
     * @param userPhoneTel 手机号
     * @param password     密码
     * @param messageCode  验证码
     * @return
     */
    @ResponseBody
    @PostMapping("/register")
    public String userRegister(String userPhoneTel, String password, String messageCode) {
        return securityService.userRegister(userPhoneTel, password, messageCode);
    }


    @ResponseBody
    @RequestMapping("/isExistence")    //是否重复手机号
    public String isExistence(String phone) {    //手机号是否已经注册
        String existence = securityService.isExistence(phone);
        return existence;
    }


    @ResponseBody
    @PostMapping("/verificationCode")   //短信发送确认
    public String sendMessages(String phoneNum) {    //获取验证码，
        return securityService.sendMessages(phoneNum);
    }

    @RequestMapping("/kickout")  //挤出跳转
    public String kickout() {     //未登录跳转页面
        return "redirect:/staticFiles/pages/login.html";
    }

    @RequestMapping("/notRole")  //无权页面跳转
    public String notRole() {     //未登录跳转页面
        return "redirect:/staticFiles/pages/login.html";
    }

    @RequestMapping("/notLogin")     //未登录跳转
    public String notLogin() {     //未登录跳转页面
        return "redirect:/staticFiles/pages/login.html";
    }


    //查询所有的订单
    @RequestMapping("showOrdersAll")
    @ResponseBody
    public String htAllOrder(String search, Integer pageIndex, Integer pageSize) throws JsonProcessingException {
        String orders = logisticsService.showAllOrders(search, pageIndex, pageSize);

        return orders;
    }
}
