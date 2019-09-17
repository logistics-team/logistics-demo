package com.cssl.orders.service.impl;

import com.cssl.entity.ExpressProvincesCityAreas;
import com.cssl.orders.mapper.ExpressProvincesCityAreas_index;
import com.cssl.orders.service.ExpressProvincesCityAreasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Component
@Transactional
public class ExpressProvincesCityAreasSerImpl implements ExpressProvincesCityAreasService {
    @Autowired
    private ExpressProvincesCityAreas_index epci;

    @Override//查询所有省 select01为下拉框一 省框
    public String select01() {
        List<ExpressProvincesCityAreas> list=epci.select01();
        return transition(list);
    }

    @Override//查询所有市 select02为下拉框二和三 市区县框
    public String select02(int id) {
        List<ExpressProvincesCityAreas> list=epci.select02(id);
        return transition(list);
    }

    private String  transition( List<ExpressProvincesCityAreas> list){
        String s="";
        for ( ExpressProvincesCityAreas lt:list) {
            s+=lt.getEpcaId()+","+lt.getEpcaName()+",";
        }
        s=s.substring(0,s.length()-1);
        return s;
    }
}
