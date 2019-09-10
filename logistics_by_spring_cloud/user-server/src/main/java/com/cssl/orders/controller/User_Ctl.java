package com.cssl.orders.controller;

import com.cssl.entity.LogisticsOrders;
import com.cssl.entity.LogisticsUser;
import com.cssl.orders.service.UserService;
import com.cssl.orders.service.impl.UserSerImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class User_Ctl {
    @Autowired
    private UserService us;

    @RequestMapping("user_s")//查询,显示数据
    public String select(String name,int page,int limit){
        List<LogisticsUser> list=us.selectAll(name,page,limit);
        int count=us.count(name);
        String data="\"data\":[";
        int ccc=0;
        for (LogisticsUser l:list) {
            boolean b=false;
            if("1".equals(l.getLuIsblacklist())){
                b=true;
            }

            String c="{\"id\": "+l.getLuId()+"," +
                    "\"luUserName\":\""+l.getLuUsername()+"\","+
                    "\"luPhone\":\""+l.getLuPhone()+"\","+
                    "\"luSex\":\""+l.getLuSex()+"\","+
                    "\"luBirthday\":\""+l.getLuBirthday()+"\","+
                    "\"luGmtModified\":\" "+l.getLuGmtModified()+"\","+
                    "\"luisblacklist\":\""+b+"\""+
                    "},";
            data+=c;
            ccc=1;
        }
        data=data.substring(0,data.length()-1);
        data+="]";
        String s="{\"code\":0," +
                "\"msg\":\"\"," +
                "\"count\":"+count+ ","+data+"}";
        if(ccc==0){
            s="{\"code\":0," +
                    "\"msg\":\"\"," +
                    "\"count\":0,\"data\":[]}";
        }
//        System.out.println("用户数据:"+s);
        return s;
    }
    @RequestMapping("user_update")//修改数据
    public int user_update(int id,int block){
        return us.update(id,block);
    }
}
