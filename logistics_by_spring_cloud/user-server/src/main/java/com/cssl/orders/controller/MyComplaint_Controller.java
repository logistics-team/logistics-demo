package com.cssl.orders.controller;

import com.cssl.orders.service.MyComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orders")
public class MyComplaint_Controller {

    @Autowired
    private MyComplaintService mcs;

    @RequestMapping("select_untreated") //未处理的投诉查询
    public String select_untreated(int page,int limit){
        String s=mcs.select_psid(1,page,limit);
        //System.out.println("01:"+s);
        return s;
    }

    @RequestMapping("select_inHand")//处理中的投诉信息查询
    public String select_inHand(int page,int limit){
        String s=mcs.select_psid(2,page,limit);
        //System.out.println("02:"+s);
        return s;
    }

    @RequestMapping("select_processed") //已处理的投诉信息查询
    public String select_processed(int page,int limit){
        String s=mcs.select_psid(4,page,limit);
        //System.out.println("03:"+s);
        return s;
    }

    @RequestMapping("update_psid")//修改投诉状态
    public int update_psid(int id,int psid){
        System.out.println(id+":"+psid);
        int i=mcs.update_psid(id,psid);
        //System.out.println("update:"+i);
        return i;
    }

    /**
     *前台--显示投诉信息
     */
    @RequestMapping("select_user_id")
    public String select_user_id(int id,int page){
        String s=mcs.select_user_id(id,page);
        System.out.println("前台投诉:"+s);
        return s;
    }

    /**
     * 前台--根据订单id获取订单详细信息
     */
    @RequestMapping("select_mc_id")
    public String select_mc_id(String id){
        //System.out.println("sss:"+id);
        String s=mcs.select_mc_id(id);
        //System.out.println("投诉详情:"+s);
        return s;
    }

    /**
     * 前台--删除投诉信息
     */
    @RequestMapping("removae_mc_id")
    public int removae_mc_id(String id){
        int i=mcs.remova_mc_id(id);
        //System.out.println("成功?:"+i);
        return i;
    }

}
