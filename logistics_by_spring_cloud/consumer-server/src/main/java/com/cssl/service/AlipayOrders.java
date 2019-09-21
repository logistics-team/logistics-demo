package com.cssl.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 支付宝订单支付
 */
public interface AlipayOrders {

    void ali(HttpServletResponse response, HttpServletRequest request, String ordersId, String amount) throws IOException;
}
