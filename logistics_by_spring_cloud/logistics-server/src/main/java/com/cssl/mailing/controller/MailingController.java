package com.cssl.mailing.controller;



import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.cssl.mailing.service.IExpressProvincesCityAreasService;
import com.cssl.mailing.service.IExpress_userService;
import com.cssl.mailing.service.ILogisticsOrdersService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.cssl.entity.*;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("mailing")
public class MailingController {
    @Autowired
    private ILogisticsOrdersService ordersService;
    @Autowired
    private IExpress_userService userService;
    @Autowired
    private IExpressProvincesCityAreasService cityAreasService;

    @RequestMapping("json")
    public String getJSON(){
        return cityAreasService.getJson();
    }

    @PostMapping("submitOrders")
    public Object submitOrders(@RequestBody Map<String,Object> map){
        return ordersService.generateOrders(map);//ordersService.generateOrders(map);//传输地址判断是否添加成功！
    }



    @PostMapping("test")
    public Object testfind(@RequestBody LogisticsStatus status){
        return status;
    }

    @RequestMapping("findAll")
    public Object findAll() {
        List<ExpressUser> list = userService.list();
        return list;
    }

    @RequestMapping("findAddr")//智能识别 ：根据省市查询市县
    public Object findAddr(String addr_p,String addr_c){//传省市

        Map<String, Object> map = cityAreasService.findAddr(addr_p, addr_c);

        return map;
    }

    //展示所有的订单
    @RequestMapping("getAllOrders")
    @ResponseBody
    public Object getAllOrders(String search, Integer pageIndex, Integer pageSize){
        Page<LogisticsOrders> page = PageHelper.startPage(pageIndex, pageSize);
        Integer index=null;
        System.out.println("search"+search);
        System.out.println("null".equals(search));
        if("null".equals(search)||search.isEmpty()){
            index=0;
        }else{
            index=Integer.parseInt(search);
        }
        //集合
        List<LogisticsOrders> logisticsOrders = ordersService.showAllLogisticsOrders(index);
        PageInfo<LogisticsOrders> pageInfo = new PageInfo<>(logisticsOrders);
        return pageInfo;
    }

}
