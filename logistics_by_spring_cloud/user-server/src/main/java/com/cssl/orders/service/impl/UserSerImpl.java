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
    public List<LogisticsUser> selectAll(String name, int page, int limit) {
        int s=(page-1)*limit;//第一条
        int e=page*limit;//最后一条
//        System.out.println("查询的name为:"+name+",起始:"+s+",结束:"+e);
        List<LogisticsUser> list=ui.selectAll(name,s,e);
        return list;
    }

    @Override
    public int count(String name) {
        return ui.count(name);
    }

    @Override//黑名单操作
    public int update(int id, int block) {
//        System.out.println("id:"+id+",block:"+block);
        return ui.update(id,block);
    }
}
