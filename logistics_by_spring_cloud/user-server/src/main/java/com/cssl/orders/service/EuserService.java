package com.cssl.orders.service;

import com.cssl.entity.LogisticsOrders;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Component
@Transactional
public interface EuserService {
    //获取所有收寄件人信息
    public String selectAll(int id, String name, int page, int limit);

    public int count(int id, String name);
}
