package com.cssl.service.impl;

import com.cssl.entity.ExpressGoods;
import com.cssl.entity.LogisticsStatus;
import com.cssl.entity.LogisticsUser;
import com.cssl.service.LogisticsService;
import org.springframework.stereotype.Component;

import java.util.Map;


@Component
public class LogisticsServiceHystrix implements LogisticsService {

//    @Override
//    public String sayHi(String message) {
//        return "客户端连接失败！请检查网络信息"+message;
//    }


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
    public String confirmOrder(Map<String, Object> map) {
        //提交失败！返回原页面
        return "redirect:/staticFiles/pages/placeOrder.html";
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


//    @Override
//    public String save(LocalDateTime eg_gmt_create, Integer it_id, BigDecimal weight, BigDecimal eg_appraised_price, String eg_special_context, LocalDateTime eu_gmt_create, LocalDateTime eu_gmt_modified, String eu_receipt_name, Integer ep_receipt_id, Integer ec_receipt_id, Integer ea_receipt_id, String eu_receipt_phone, String eu_sender_name, Integer ep_sender_id, Integer ec_sender_id, Integer ea_sender_id, String eu_sender_phone, Integer eg_id) {
//        return "客户端连接失败！请检查网络信息";
//    }


}
