package com.cssl.controller;

import com.cssl.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("user")
@RestController
public class Orders_MyComplaint_Controller {
    private UserService us;
    @Autowired
    public UserService userService(UserService us){
        this.us = us;
        return this.us;
    }



    @RequestMapping("select_user_id")//前台----显示投诉信息
    public String select_user_id(int id,int page){
        String s=us.select_user_id(id,page);//暂时id=16;
        System.out.println("前台投诉:"+s);
        return s;
    }

    /**
     * 前台--显示投诉详情
     */
    @RequestMapping("select_mc_id")
    public String select_mc_id(String id){
        //System.out.println("sss:"+id);
        String s=us.select_mc_id(id);
        //System.out.println("前台投诉详情:"+s);
        return s;
    }

    /**
     * 前台--删除投诉信息
     */
    @RequestMapping("remove_mc_id")
    public int remove_mc_id(String id){
        int i=us.remove_mc_id(id);
        //System.out.println("成功?:"+i);
        return i;
    }
}
