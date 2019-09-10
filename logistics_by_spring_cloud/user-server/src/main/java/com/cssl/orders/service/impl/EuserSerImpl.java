package com.cssl.orders.service.impl;

import com.cssl.entity.LogisticsOrders;
import com.cssl.orders.mapper.Euser_index;
import com.cssl.orders.service.EuserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Component
@Transactional
public class EuserSerImpl implements EuserService {

    @Autowired
    private Euser_index ei;
    @Override
    public List<LogisticsOrders> selectAll(int id,String name,int page,int limit) {
        int s=(page-1)*limit;//第一条
        int e=page*limit;//最后一条
        //System.out.println("查询的id为:"+id+",name:"+name+",起始:"+s+",结束:"+e);
        List<LogisticsOrders> list=ei.selectAll(id,name,s,e);
        return list;
    }

    @Override
    public int count(int id,String name) {
        return ei.count(id,name);
    }
}
