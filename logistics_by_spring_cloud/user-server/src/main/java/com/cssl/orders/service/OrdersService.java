package com.cssl.orders.service;

import com.cssl.entity.LogisticsOrders;
import com.cssl.entity.LogisticsStatus;
import com.cssl.entity.TransportationStatus;

import java.util.List;

public interface OrdersService {
    public List<LogisticsOrders> show(int id, int page, int limit);

    public List<LogisticsStatus> statue(int id);

    public int ts_update(TransportationStatus ts);

    public int count(int id);
}
