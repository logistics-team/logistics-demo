package com.cssl.config;

import org.springframework.stereotype.Service;

import java.io.FileWriter;
import java.io.IOException;


public class AlipayConfig{
    // 应用ID,您的APPID，收款账号既是您的APPID对应支付宝账号
    public static String app_id = "2016100200645216";

    // 商户私钥，您的PKCS8格式RSA2私钥
    public static String merchant_private_key = "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDZS8bJYnNXVPy5fEpClHPrZ8hOUtujHBh5LIT/bXxrEm3Ywmf/1CAu/UZuulhEkSvYpLSLBOZRVnp/OtrKfu3lSLNQV3HckZoFSgszLiUVQx1vhGzWzr6Qvn7b5sBIqVIkZU854nrF41aQzyHsko3RvU2PALwS9ntfPNq03AzWGDou/cp7ZWYvr0hN4gcOsbCiPCqjrV2gag4sLRCZCYSr2n4yUbDuZ7WiIjNPBYyYtUvl2P/3Lc1FUCRefIz7oSETmrqBJRfYiL2FyZi0rkaj9cCJfcZIVWBKq6HbCkgQGE6feU5WZKBhOVOnCToTHgnWnSRp5XxjrobIvO8zq5RhAgMBAAECggEAL06sDJP+gHjkPI2urSgcxJdnqIWpg61ONrNWkTWI7NaqS5Knia7pAtHpT5oKNYNVhGj3VXzPl824BZMOpx9TM6PMRiWDiH26hoREQ/Q75pEiC3FNMMb5/hE7FSz7l9YlJ/9WbEe+au6/ne86d4LAlXUdOZDzYT2ARo+9Hbr6oHFnIzSG3Oyn3E8MYZepgIq/UvKtKfGl6OzbBfLehrRhasM6geHpvdqVp8y1U8wxsXrReGPyUDKMapKIPfk4uJOVgnKVexCu8Sqgz8V2LQr99/ZRBF89DaUxvAcCmaCZH55HTvkQInjkLK9cz2TU93YMVAPvw/9BKgfPTBFMl2vAAQKBgQDv2Z/Nq672TclGqAaNncCwkDH6Ns/qmXQHx8C9S7pUXOk8hmEGRCGG6PSGi6ZchOak3bwQjAS62tSVzwblMnMmOF5FkbubEm0sv80nKf9sDCFiqmeBQ8USXviNED4K1jEPkHCEpwmG2XcT4FphseglzbEB8C3lGWcTbK6rCiRVgQKBgQDn7WFAdqfs9V4QRvpZ7lE+scL+CEQnQ8WCkvee2LRPHNYIhgndRDZ5UgEDqpWP2+PX2UtSPe412Yc0aNJVJcGSQKThx3g8XSc6dsi8IvSz7akAKiccF/kGxpTkHxGphY79Xh35x07sW/zt6PWH/kI9IooHx1En4bG3eHcuQn9u4QKBgQC4rsqk1GCZWRX1qOW639CCY9WHw/LewqAcaYwYdhoYYZ5aM2K8L3PdbLz0aM2FifQK2I259AakVmHApLO7gdg2gsrcKLXbVxnnjhyK3oTFjqWaUnn2h9dUKPqbq/kJ4RnP0TlCe1gTlJljHaqadSG7EiIMywKb2K6Mv2/TVbDagQKBgCmDuTvDwY1N4neBbQC6Avr48NFuA10P6YPU8NQTMDtVCw7dh1h/BE01G49fcoQctS0G7U+cXE5xUJ1WAghRyNN4FMuBXAlaF1KEvqvGigzHBtBLu1JxDBdlZnNrCEtS5+R8e1shjQQL9ztSzth3771nuFNqHyHHaXtQ6exy5MKhAoGAMVa5hud7wfgPNd0pC7XcivDs8S2wJT1PAc0TXzd6MST8NWhyG5UBQTCcCL8Jpuk0YlW395SgR479PbMJ3CLldBrdeZqpfqSAqdTAdm6UTBwdS6LIt2qAdFXtrJefp4lkFcmCT7iqesdBYtGZO3fwsv1LDm90EO0o5gSBaVVrx9A=";
    // 支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
    public static String alipay_public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnn52mtAA5oDoi4DgBKlZZoxZqogXWdRdmz9T+u+2GonD7r7YwZ3lt5qNdl1B4mSK8cMDImKrqb5diZnszmnwTZxAaqFqNMXfCiB8gc5f069ddUyDeTX3+VmQRlQzyq72c4Z4S/50+fsWqSY+7jBAukt0F09x5EA48yUbNW0qLpO2vNAwnMzUBnWAl6RJjMvHwLppuhpGCc8tHEakroS5dt1O5v3Tw9C5h3EtgBzghbb6pLQTlZKT4vVHJJSzXYrvFAVXSZ/5upd2WWbx8J72WKLHaBQmHOGeCm8iSWJXu1ahUymE4yRQ9F30lHv6GBRDSVNLvkJKtvUIHZi9+VaxFQIDAQAB";
    // 服务器异步通知页面路径  需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
    public static String notify_url = "http://127.0.0.1:9292/staticFiles/pages/placeOrder.html";

    // 页面跳转同步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
    public static String return_url = "http://127.0.0.1:9292/staticFiles/pages/queryExpress.html";  //跳转至订单查询

    // 签名方式
    public static String sign_type = "RSA2";

    // 字符编码格式
    public static String charset = "utf-8";

    // 支付宝网关
    public static String gatewayUrl = "https://openapi.alipaydev.com/gateway.do";

    // 支付宝网关
    public static String log_path = "C:\\Users\\pc\\Desktop\\alipay";


//↑↑↑↑↑↑↑↑↑↑请在这里配置您的基本信息↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    /**
     * 写日志，方便测试（看网站需求，也可以改成把记录存入数据库）
     * @param sWord 要写入日志里的文本内容
     */
    public static void logResult(String sWord) {
        FileWriter writer = null;
        try {
            writer = new FileWriter(log_path + "alipay_log_" + System.currentTimeMillis()+".txt");
            writer.write(sWord);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (writer != null) {
                try {
                    writer.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
