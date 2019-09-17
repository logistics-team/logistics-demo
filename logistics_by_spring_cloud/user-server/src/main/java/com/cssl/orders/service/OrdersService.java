package com.cssl.orders.service;

import com.cssl.entity.LogisticsOrders;
import com.cssl.entity.LogisticsStatus;
import com.cssl.entity.TransportationStatus;

import java.util.List;

public interface OrdersService {
    public String show(int id, int page, int limit, String name, int select01, int select02, int select03);

    public List<LogisticsStatus> statue(int id);

    public int ts_update(TransportationStatus ts);

    public int count(int id, String name, int select01, int select02, int select03);
}
