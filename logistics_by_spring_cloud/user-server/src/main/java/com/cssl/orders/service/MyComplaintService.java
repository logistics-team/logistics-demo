package com.cssl.orders.service;


public interface MyComplaintService {

    //按状态查询投诉
    public String select_psid(int id, int page, int limit);

    //在条件下的数据总量
    public int count(int id);

    //修改 投诉处理状态
    public int update_psid(int id, int psid);

    /**前台----投诉显示根据用户的id*/
    public String select_user_id(int id, int page);

    /**
     * 前台--投诉详情
     */
    public String select_mc_id(String id);

    /**
     * 前台--删除投诉 根据订单id
     */
    public int remova_mc_id(String id);

}
