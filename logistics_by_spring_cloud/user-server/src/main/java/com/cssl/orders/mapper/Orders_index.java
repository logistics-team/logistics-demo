package com.cssl.orders.mapper;

import com.cssl.entity.LogisticsOrders;
import com.cssl.entity.LogisticsStatus;
import com.cssl.entity.TransportationStatus;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface Orders_index {

    public List<LogisticsOrders> show(@Param("id") int id, @Param("page") int page, @Param("limit") int limit, @Param("name") String name, @Param("select01") int select01, @Param("select02") int select02, @Param("select03") int select03);

    public List<LogisticsStatus> l_statue(int id);

    public int ts_update(TransportationStatus ts);

    public int count(@Param("id") int id, @Param("name") String name, @Param("select01") int select01, @Param("select02") int select02, @Param("select03") int select03);
}
