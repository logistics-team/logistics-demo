package com.cssl.service.impl;

import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.request.AlipayTradePagePayRequest;
import com.cssl.config.AlipayConfig;
import com.cssl.service.AlipayOrders;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
@Service
public class AlipayOrdersImpl implements AlipayOrders {
    @Override
    public void ali(HttpServletResponse response, HttpServletRequest request, String ordersId, String amount) throws IOException {
        //设置编码
        response.setContentType("text/html;charset=utf-8");

        PrintWriter out = response.getWriter();
        //获得初始化的AlipayClient
        AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.gatewayUrl, AlipayConfig.app_id, AlipayConfig.merchant_private_key, "json", AlipayConfig.charset, AlipayConfig.alipay_public_key, AlipayConfig.sign_type);
        //设置请求参数
        AlipayTradePagePayRequest aliPayRequest = new AlipayTradePagePayRequest();
        aliPayRequest.setReturnUrl(AlipayConfig.return_url);
        aliPayRequest.setNotifyUrl(AlipayConfig.notify_url);

        //商户订单号，后台可以写一个工具类生成一个订单号，必填
        String order_number = new String(ordersId);
        //付款金额，从前台获取，必填
        String total_amount = new String(amount);
        //订单名称，必填
        String subject = new String("天天快递单号："+order_number);
        aliPayRequest.setBizContent("{\"out_trade_no\":\"" + order_number + "\","
                + "\"total_amount\":\"" + total_amount + "\","
                + "\"subject\":\"" + subject + "\","
                + "\"product_code\":\"FAST_INSTANT_TRADE_PAY\"}");
        //请求
        String result = null;
        try {
            result = alipayClient.pageExecute(aliPayRequest).getBody();
        } catch (AlipayApiException e) {
            System.out.println("e = " + e.getErrMsg());
            e.printStackTrace();
        }
        //输出
        out.println(result);//以下写自己的订单代码
    }
}