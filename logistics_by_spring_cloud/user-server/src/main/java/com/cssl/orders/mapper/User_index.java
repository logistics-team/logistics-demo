package com.cssl.orders.mapper;

import com.cssl.entity.LogisticsUser;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface User_index {
    //分页+显示+筛选
    public List<LogisticsUser> selectAll(@Param("name") String name, @Param("page") int page, @Param("limit") int limit);
    //查询的数据条数
    public int count(@Param("name") String name);
    //拉入黑名单
    public int update(@Param("id") int id, @Param("block") int block);
}
