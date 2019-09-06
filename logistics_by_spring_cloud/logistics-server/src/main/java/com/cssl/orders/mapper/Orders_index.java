package com.cssl.orders.mapper;

import com.cssl.entity.LogisticsOrders;
import com.cssl.entity.LogisticsStatus;
import com.cssl.entity.TransportationStatus;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Orders_index {

    public List<LogisticsOrders> show(int id);

    public List<LogisticsStatus> l_statue(int id);

    public int ts_update(TransportationStatus ts);
}
