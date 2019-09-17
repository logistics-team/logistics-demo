package com.cssl.orders.mapper;

import com.cssl.entity.ExpressProvincesCityAreas;

import java.util.List;

public interface ExpressProvincesCityAreas_index {

    //查询所有省 select01为下拉框一 省框
    public List<ExpressProvincesCityAreas> select01();

    //查询所有市 select02为下拉框二和三 市区县框
    public List<ExpressProvincesCityAreas> select02(int id);

}
