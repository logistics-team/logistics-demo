package com.cssl.controller;

import com.cssl.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class User_Ctl {
    @Autowired
    private UserService us;

    @RequestMapping("/user")//获取所有用户
    public String user(@RequestParam(required=false,name="id",defaultValue="")String name, int page, int limit){
//        System.out.println("查询的名字,name:"+name+",page:"+page+",limit:"+limit);
        String s=us.user(name,page,limit);
//        System.out.println("用户获取到的数据:"+s);
        return s;
    }

    @RequestMapping("/user_update")//修改黑名单
    public int user_update(int id,boolean block){
        if(id<=0){
            return 0;
        }
        int i=0;
        if(block){
            i=1;
        }
//        System.out.println("id:"+id+",block:"+i);
        return 1;
    }
}
