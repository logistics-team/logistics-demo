package com.cssl.service;

public interface OrdersFindService {

    /**
     * 订单查询
     * @param orderTextInput
     * @return
     */
    String findOrdersByTexts(String orderTextInput);
}
