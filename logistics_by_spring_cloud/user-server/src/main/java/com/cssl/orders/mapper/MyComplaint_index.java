package com.cssl.orders.mapper;

import com.cssl.entity.MyComplaint;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MyComplaint_index {

    //按照状态查询投诉信息
    public List<MyComplaint> select_psid(@Param("id") int id, @Param("page") int page, @Param("limit") int limit);

    //查询在条件下的总数据量
    public int count(int id);

    //修改 投诉处理状态
    public int update_psid(@Param("id") int id, @Param("psid") int psid);

    //前台----投诉显示根据用户的id
    public List<MyComplaint> select_user_id(@Param("id") int id, @Param("page") int page, @Param("size") int size);

    /**前台---查看投诉详情 投诉id*/
    public MyComplaint select_mc_id(String id);

    /**前台--删除投诉信息*/
    public int remove_mc_id(String id);

    /**前台--投诉总数量*/
    public int count02(@Param("id") int id);
}
