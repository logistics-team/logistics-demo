package com.cssl.controller;

import com.alibaba.fastjson.JSON;
import com.cssl.entity.LogisticsStatus;
import com.cssl.service.*;
import com.fasterxml.jackson.core.JsonProcessingException;
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
    //智能填写
    private AddressInfo addressInfo;
    @Autowired
    public AddressInfo addressInfo(AddressInfo addressInfo){
        this.addressInfo = addressInfo;
        return this.addressInfo;
    }
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
    @ResponseBody//显示订单,下拉框搜索,搜索框搜索,省市区搜索
    public String show(@RequestParam(required=false,name="id",defaultValue="0")int id,int page,int limit,@RequestParam(required=false,name="name",defaultValue="")String name,@RequestParam(required=false,name="select01",defaultValue="0")int select01,@RequestParam(required=false,name="select02",defaultValue="0")int select02,@RequestParam(required=false,name="select03",defaultValue="0")int select03){
        //System.out.println("id:"+id+",page:"+page+",limit:"+limit);
        //System.out.println("name:"+name+",select01:"+select01+",select02:"+select02+",select03:"+select03);
        String s=userService.show(id,page,limit,name,select01,select02,select03);// 服务者 名 logistics-server 访问orders/show方法 获取String 数据
        //System.out.println("数据显示:"+s);
        return s;
    }
    @RequestMapping("l_statue")
    @ResponseBody//订单下拉框
    public List<LogisticsStatus> l_statue(@RequestParam(required=false,name="id",defaultValue="0")int id){
        //System.out.println("id:"+id);
        String s=userService.l_statue(id);// 服务者 名 logistics-server 访问orders/show方法 获取list 数据
        List<LogisticsStatus> list=new ArrayList<LogisticsStatus>();
        String[] ss=s.split(",");
        for (int i=0;i<ss.length;i+=2){
            LogisticsStatus ls=new LogisticsStatus();
            ls.setLsId(Integer.parseInt(ss[i]));
            ls.setLsContext(ss[i+1]);
            list.add(ls);
        }
        //System.out.println("下拉框显示:"+list);
        return list;
    }
    @RequestMapping("ls_update")
    @ResponseBody//编辑订单
    public int ls_update(@RequestParam(required=false,name="ls_id",defaultValue="0")int ls_id,@RequestParam(required=false,name="ts_id",defaultValue="")String ts_id){
        System.out.println("ls_id:"+ls_id+",ts_id:"+ts_id);
        String s=userService.ls_update(ls_id,ts_id);// 服务者 名 logistics-server 访问orders/show方法 获取int 数据
        int i=Integer.parseInt(s);
        return i;
    }

    /**
     *   寄件下单
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
    public String confirmOrder(String sendProvinceCode,String sendCityCode,String sendRegionCode,
                               String sendProvinceName,String sendCityName,String sendRegionName,
                               String sendAddress,String sendName,String sendTel,String sendPhone,
                               String receiveProvinceCode,String receiveCityCode,String receiveRegionCode,
                               String receiveProvinceName,String receiveCityName,String receiveRegionName,
                               String receiveAddress,String receiveName,String receiveTel,String receivePhone,
                               String goodsType,String goodsWeight,String insuranceMoney,String goodsRemarks,
                               String transport){
        Map<String, Object> map = new HashMap<String, Object>();
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

        return logisticsService.confirmOrder(map);
    }


    /**
     * 运费预估   2
     * @return
     */
    @RequestMapping("freightEstimate")
    @ResponseBody
    public String freightEstimate(String sendProvinceCode,String sendRegionCode,String receiveProvinceCode,String receiveRegionCode,String goodsWeight,String insuranceMoney,Boolean transport){
        System.out.println("sendProvinceCode = " + sendProvinceCode);           //发出省
        System.out.println("sendRegionCode = " + sendRegionCode);               //发出区县
        System.out.println("receiveProvinceCode = " + receiveProvinceCode);     //接收省
        System.out.println("receiveRegionCode = " + receiveRegionCode);         //接收 区县
        System.out.println("goodsWeight = " + goodsWeight);                     //物品重量
        System.out.println("insuranceMoney = " + insuranceMoney);               //保价
        System.out.println("transport = " + transport);
        boolean isProvince = sendProvinceCode.equals(receiveProvinceCode);
        System.out.println("isProvince = " + isProvince);
        boolean isMoney =  null == insuranceMoney;
        System.out.println("isMoney = " + isMoney);
        Map<String,Object> map = new HashMap();
        map.put("sendRegionCode",Integer.parseInt(sendRegionCode));   //状态
        map.put("receiveRegionCode",Integer.parseInt(receiveRegionCode));          //首重
        map.put("goodsWeight",Double.valueOf(goodsWeight));    //续重
        map.put("transport",transport);
        map.put("isProvince",isProvince);   //保费
        map.put("insuranceMoney",isMoney);      //预计运费

//        JSON.toJSONString(map);

        return logisticsService.freightEstimate(map);
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
        String s = securityService.userLogin(j_username, j_password, encodinginput);
        return s;
    }

    /**
     *   获取登录的用户信息 2
     * @return
     */
    @ResponseBody
    @GetMapping("getUserInfo")
    public String getUserInfo(){
        String userByPhone = infoService.findUserByPhone();
        return userByPhone;
    }

    /**
     * 注销  退出
     * @return
     */
    @RequestMapping("/logout")
    public String logout() {
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
        String existence = securityService.isExistence(phone);
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
//    @RequestMapping("getAddr")
//    public String getAddr(String addr_p,String addr_c){
//        String address = addressInfo.findAddrByProvincesCity(addr_p, addr_c);
//        return address;
//    }

    //查询所有的订单
    @RequestMapping("showOrdersAll")
    @ResponseBody
    public String htAllOrder(String search,Integer pageIndex,Integer pageSize) throws JsonProcessingException {
        String orders = logisticsService.showAllOrders(search,pageIndex,pageSize);

        return orders;
    }
}
