package com.cssl.controller;

import com.cssl.entity.ExpressGoods;
import com.cssl.entity.ExpressUser;
import com.cssl.entity.LogisticsStatus;
import com.cssl.service.LogisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.print.DocFlavor;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class ConsumerController {
    @Autowired
    private LogisticsService logisticsService;

    @RequestMapping("go_login")         //重定向到登录页面
    public String goLogin(){
        return "/html/login"; //redirect:/html/backstage.html
    }

    @RequestMapping("go_backstage")     //重定向到后台
    public String goBackstage(){
        return "redirect:/html/backstage.html"; //redirect:/html/backstage.html
    }
    @ResponseBody
    @RequestMapping("find")
    public Object find(){
        LogisticsStatus status = new LogisticsStatus();
        status.setLsId(1);
        status.setLsContext("sss");
        Map<String, Object> map = new HashMap<>();
        map.put("stu",status);
        System.out.println("map = " + map);
        return logisticsService.find(status);
    }

    @Autowired
    private RestTemplate rt;

    @RequestMapping("show")
    @ResponseBody
    public String show(@RequestParam(required=false,name="id",defaultValue="0")int id){
        System.out.println("id:"+id);
        String s=rt.getForObject("http://logistics-server/orders/show?id="+id,String.class);;// 服务者 名 logistics-server 访问orders/show方法 获取String 数据
        System.out.println("数据显示:"+s);
        return s;
    }
    @RequestMapping("l_statue")
    @ResponseBody
    public List<LogisticsStatus> l_statue(@RequestParam(required=false,name="id",defaultValue="0")int id){
        System.out.println("id:"+id);
        LogisticsStatus[] s=rt.getForObject("http://logistics-server/orders/l_statue?id="+id, LogisticsStatus[].class);// 服务者 名 logistics-server 访问orders/show方法 获取list 数据
        List<LogisticsStatus> list= Arrays.asList(s);
        System.out.println("下拉框显示:"+list);
        return list;
    }
    @RequestMapping("ls_update")
    @ResponseBody
    public int ls_update(@RequestParam(required=false,name="ls_id",defaultValue="0")int ls_id,@RequestParam(required=false,name="ts_id",defaultValue="")String ts_id){
        System.out.println("ls_id:"+ls_id+",ts_id:"+ts_id);
        String s=rt.getForObject("http://logistics-server/orders/ts_update?ts_id="+ts_id+"&ls_id="+ls_id, String.class);// 服务者 名 logistics-server 访问orders/show方法 获取int 数据
        int i=Integer.parseInt(s);
        return i;
    }

            //参数
//    Integer it_id, BigDecimal weight, BigDecimal eg_appraised_price, String eg_special_context,
//    String eu_receipt_name, Integer ep_receipt_id, Integer ec_receipt_id,Integer ea_receipt_id,
//    String eu_receipt_phone, String eu_sender_name, Integer ep_sender_id,Integer ec_sender_id,
//    Integer ea_sender_id, String eu_sender_phone, Integer eg_id
    @ResponseBody
    @RequestMapping("save")
    public Object save(){
        LocalDateTime now = LocalDateTime.now();
        System.out.println("now = " + now);
//        System.out.println("name = " + name);
        ExpressGoods goods = new ExpressGoods();
        BigDecimal bigDecimal = BigDecimal.valueOf(15.5);
        goods.setWeight(bigDecimal);
        goods.setEgAppraisedPrice(bigDecimal);
        goods.setItId(1);
        goods.setEgGmtCreate(LocalDateTime.now());
        goods.setEgSpecialContext("这是一个马踏飞燕");
        ExpressUser user = new ExpressUser(1, LocalDateTime.now(), LocalDateTime.now(), "李嘉欣",
                430000, 430900, 430903, "17700244411",
                "刘成", 430000, 431100, 431101,
                "15116114097", 2);
        System.out.println("user = " + user);
        System.out.println("goods = " + goods);
        //数据嵌入
        goods.setExpressUser(user);
        System.out.println("goods = " + goods);
        return logisticsService.save(goods); //logisticsService.save(goods,user);
    }
}
