package com.cssl.orders.service.impl;

import com.cssl.entity.LogisticsUser;
import com.cssl.orders.mapper.User_index;
import com.cssl.orders.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@Transactional
public class UserSerImpl implements UserService {
    @Autowired
    private User_index ui;

    @Override
    public String selectAll(String name, int page, int limit) {
        int s=(page-1)*limit;//第一条
        int e=page*limit;//最后一条
        //System.out.println("查询的name为:"+name+",起始:"+s+",结束:"+e);
        int phone=0;
        try {
            phone=Integer.parseInt(name);
            name="";
        }catch (Exception ex){ }
        //System.out.println();
        //if(name instanceof Integer){

       // }

        List<LogisticsUser> list=ui.selectAll(name,phone,s,e);
        int count=ui.count(name,phone);
        String data="\"data\":[";
        int ccc=0;
        for (LogisticsUser l:list) {
            boolean b=false;
            if("1".equals(l.getLuIsblacklist())){
                b=true;
            }
            String LuUsername=l.getLuUsername();
            String sex=l.getLuSex();
            if(LuUsername==null){
                LuUsername=" ";
            }
            if(sex==null){
                sex="未知";
            }
            //System.out.println(LuUsername+":"+sex);
            String c="{\"id\": "+l.getLuId()+"," +
                    "\"luUserName\":\""+LuUsername+"\","+
                    "\"luPhone\":\""+l.getLuPhone()+"\","+
                    "\"luSex\":\""+sex+"\","+
                    "\"luisblacklist\":\""+b+"\""+
                    "},";
            data+=c;
            ccc=1;
        }
        data=data.substring(0,data.length()-1);
        data+="]";
        String ss="{\"code\":0," +
                "\"msg\":\"\"," +
                "\"count\":"+count+ ","+data+"}";
        if(ccc==0){
            ss="{\"code\":0," +
                    "\"msg\":\"\"," +
                    "\"count\":0,\"data\":[]}";
        }
        //System.out.println("用户数据:"+s);

        return ss;
    }

    @Override
    public int count(String name,int phone) {
        return ui.count(name,phone);
    }

    @Override//黑名单操作
    public int update(int id, int block) {
        //System.out.println("id:"+id+",block:"+block);
        return ui.update(id,block);
    }

    @Override//获取黑名单者编号
    public String user_black() {
        List<LogisticsUser> list=ui.user_black();
        String s="";
        for (LogisticsUser l:list) {
            s+=l.getLuId()+",";
        }
        s=s.substring(0,s.length()-1);
        //System.out.println(s);
        return s;
    }


}
