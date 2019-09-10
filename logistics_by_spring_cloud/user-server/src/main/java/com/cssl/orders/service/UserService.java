package com.cssl.orders.service;

import com.cssl.entity.LogisticsUser;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserService {

    //分页+显示+筛选
    public List<LogisticsUser> selectAll(String name, int page, int limit);

    public int count(String name);

    //拉入黑名单
    public int update(int id, int block);
}
