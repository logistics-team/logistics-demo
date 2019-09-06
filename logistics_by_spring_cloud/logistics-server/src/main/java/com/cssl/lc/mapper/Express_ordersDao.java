package com.cssl.lc.mapper;

import com.cssl.entity.LogisticsOrders;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface Express_ordersDao {
    @Select("SELECT lo_id,lo_gmt_create,lo_gmt_modified,eg_id,eu_id,ts_id  FROM logistics_orders")
    List<LogisticsOrders> showAllOrders();
    List<LogisticsOrders> showAllOrders2();
}
