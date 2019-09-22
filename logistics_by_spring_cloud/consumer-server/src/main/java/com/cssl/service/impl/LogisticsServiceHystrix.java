package com.cssl.service.impl;

import com.cssl.entity.ExpressGoods;
import com.cssl.entity.LogisticsOrders;
import com.cssl.entity.LogisticsStatus;
import com.cssl.entity.LogisticsUser;
import com.cssl.service.LogisticsService;
import org.springframework.stereotype.Component;

import java.util.Map;


@Component
public class LogisticsServiceHystrix implements LogisticsService {


    @Override
    public String show(int id, int page, int limit) {
        return "数据获取异常";
    }

    /**
     * 查询全部地区
     * @return json
     */
    @Override
    public String cityAreasFindAll() {
        return "数据获取失败";
    }

    /**
     * 按照城市等级查询
     *
     * @param level
     * @return json
     */
    @Override
    public String cityAreasFindByLevel(int level) {
        return "啊♂";
    }

    /**
     * 按照id查询城市
     *
     * @param id id
     * @return json
     */
    @Override
    public String cityAreasFindByID(int id) {
        return "李嘉兴是沙雕";
    }

    @Override
    public String freightEstimate(Map<String,Object> map) {
        return null;
    }

    @Override
    public String workOrderCustomerSubmit(Map<String, Object> complaintInfoMap) {
        return null;
    }

    /**
     * 按照id 和 关键字 查询子节点   3
     *
     * @param condition 关键字
     * @param province  省id
     * @param city      市id
     * @param district  区县id
     * @return 子节点的json
     */
    @Override
    public String cityAreasFindChild(String condition, int province, int city, int district) {
        return null;
    }

    /**
     * 新增地址 4
     *
     * @param map
     * @return
     */
    @Override
    public String addAddress(Map<String, Object> map) {
        return null;
    }

    /**
     * 查询用户下的所有地址 4
     *
     * @param pageIndex
     * @param pageSize
     * @param uid
     * @return
     */
    @Override
    public String showAddressUserById(Integer pageIndex, Integer pageSize, Integer uid) {
        return null;
    }

    /**
     * 编辑地址回显 4
     *
     * @param aId
     * @return
     */
    @Override
    public String echoData(Integer aId) {
        return null;
    }

    /**
     * 地址删除 4
     *
     * @param aId
     */
    @Override
    public String deleteAddress(Integer aId) {
        return null;
    }

    /**
     * 修改地址 4
     *
     * @param map
     * @return
     */
    @Override
    public String updateAddress(Map<String, Object> map) {
        return null;
    }

    /**
     * 订单查询 2
     *
     * @param orderTextInput
     * @return
     */
    @Override
    public String findOrdersByTexts(String orderTextInput) {
        return null;
    }

    @Override
    public String confirmOrder(Map<String, Object> map) {
        //提交失败！返回原页面
        return null;
    }

    @Override
    public String findAddrByProvincesCity(String addr_p, String addr_c) {
        return "查询地址失败";
    }

    @Override
    public String updateUser(LogisticsUser logisticsUser) {
        return null;
    }

    @Override
    public String showAllOrders(String search, Integer pageIndex, Integer pageSize) {
        return null;
    }

    @Override
    public String getAddressDataInfo(String parentCode) {
        return null;
    }



}
