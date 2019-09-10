package com.cssl.orders.mapper;

import com.cssl.entity.LogisticsOrders;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface Euser_index {
    //查询全部的收寄人数据
    public List<LogisticsOrders> selectAll(@Param("id") int id, @Param("name") String name, @Param("page") int page, @Param("limit") int limit);
    //获取总数据数
    public int count(@Param("id") int id, @Param("name") String name);
}
