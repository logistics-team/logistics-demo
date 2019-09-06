package com.cssl.mailing.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cssl.entity.*;
import com.cssl.mailing.mapper.LogisticsOrdersMapper;
import com.cssl.mailing.service.*;
import com.cssl.util.IdSequenceUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Map;


/**
 * <p>
 * 记录订单详细信息，物流订单表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-04
 */
@Service
public class LogisticsOrdersServiceImpl extends ServiceImpl<LogisticsOrdersMapper, LogisticsOrders> implements ILogisticsOrdersService {

    @Autowired
    private LogisticsOrdersMapper ordersMapper;

    @Autowired
    private ITransportationStatusService statusService;        //运单信息

    @Autowired
    private ITransportMeansService meansService;        //运单信息

    @Autowired
    private IExpressGoodsService goodsService;      //物件信息

    @Autowired
    private IExpressUserService userService;        //寄件信息

    @Autowired
    private IItemTypeService typeService;        //物品类型信息

    @Autowired
    private IExpressProvincesCityAreasService areasService;     //地区信息

    @Transactional
    @Override
    public LogisticsOrders generateOrders(Map<String, Object> map) {
//        boolean flag = false;       //确认生成订单

//        for (String key : map.keySet()) {
//            System.out.println(key);
//        }
//
//        for (Object value : map.values()) {
//            System.out.println(value);
//        }
//        if (true)
//            return null;

        IdSequenceUtils utils = new IdSequenceUtils();          //订单生成类
        ExpressUser user = new ExpressUser();              //收寄人信息
        LocalDateTime now = LocalDateTime.now();    //当前时间
        user.setEuGmtCreate(now);           //默认当前时间  待修复时区问题
        //收寄人信息
        if (map.get("receiveProvince") != null && map.get("receiveProvince") != "") {
            String receiveProvince = (String) map.get("receiveProvince");
            user.setEpReceiptId(areasService.getProvinceIdByName(receiveProvince));//存入收件人省id
        }
        if (map.get("receiveCity") != null && map.get("receiveCity") != "") {
            String receiveCity = (String) map.get("receiveCity");
            user.setEcReceiptId(areasService.getCityIdByName(receiveCity));//存入收件人市id
        }
        if (map.get("receiveArea") != null && map.get("receiveArea") != "") {
            String receiveArea = (String) map.get("receiveArea");
            user.setEaReceiptId(areasService.getAreasIdByName(receiveArea));//存入收件人区县id
        }
        if (map.get("receiveName") != null && map.get("receiveName") != "")
            user.setEuReceiptName(map.get("receiveName").toString());
        if (map.get("receivePhone") != null && map.get("receivePhone") != "")
            user.setEuReceiptPhone(map.get("receivePhone").toString());
        //寄件人信息
        if (map.get("sendProvince") != null && map.get("sendProvince") != "") {
            String sendProvince = (String) map.get("sendProvince");
            user.setEpSenderId(areasService.getProvinceIdByName(sendProvince));//存入寄件人省id
        }
        if (map.get("sendCity") != null && map.get("sendCity") != "") {
            String sendCity = (String) map.get("sendCity");
            user.setEcSenderId(areasService.getCityIdByName(sendCity));//存入寄件人市id
        }
        if (map.get("sendArea") != null && map.get("sendArea") != "") {
            String sendArea = (String) map.get("sendArea");
            user.setEaSenderId(areasService.getAreasIdByName(sendArea));//存入寄件人区县id
        }
        if (map.get("sendName") != null && map.get("sendName") != "")
            user.setEuSenderName(map.get("sendName").toString());
        if (map.get("sendPhone") != null && map.get("sendPhone") != "")
            user.setEuSenderPhone(map.get("sendPhone").toString());
        //寄件物品信息
        ExpressGoods goods = new ExpressGoods();            //物品信息
        goods.setEgGmtCreate(now);
        if (map.get("goodsType") != null && map.get("goodsType") != "") {
            String goodsType = (String) map.get("goodsType");
            goods.setItId(typeService.getItIdByName(goodsType));//存入物品类型id
        }
        if (map.get("goodsWeight") != null && map.get("goodsWeight") != "")
            goods.setWeight(BigDecimal.valueOf(Double.parseDouble(map.get("goodsWeight").toString()))); //物品质量
        if (map.get("insuranceMoney") != null && map.get("insuranceMoney") != "")
            goods.setEgAppraisedPrice(BigDecimal.valueOf(Double.parseDouble(map.get("insuranceMoney").toString()))); //预估价格
        if (map.get("goodsRemarks") != null && map.get("goodsRemarks") != "")
            goods.setEgSpecialContext(map.get("goodsRemarks").toString()); //特殊报备

        //运单类
        TransportationStatus status = new TransportationStatus();   //运单类
        status.setLsId(1);//物流状态：（默认）确认配货状态
        status.setTsGmtCreate(now); //和订单一起创建
        status.setTsId(utils.nextId());  //运单号生成
        status.setEpId(user.getEpSenderId());  //初始值同寄件人地址一样  ==》（模拟配送） 后期转向收寄人地址
        status.setEcId(user.getEcSenderId());   //市
        status.setEaId(user.getEaSenderId());   //区县

        //运输类型
        TransportMeans means = new TransportMeans();            //运输方式
        means.setTmGmtCreate(now);
        if (map.get("transport") != null && map.get("transport") != "")
            means.setTmType(map.get("transport").toString());   //运输类型

        //数据插入
        means = meansService.saveMeans(means);
        status = statusService.saveStatus(status);
        user = userService.saveUser(user);
        goods = goodsService.saveGoods(goods);
        //订单类
        if (means != null & status != null & goods != null & user != null) {
            final LogisticsOrders orders = new LogisticsOrders();   //订单类
            orders.setLoId(utils.nextId());     //订单生成
            orders.setLoGmtCreate(now);   //同运单一起 创建
            orders.setEgId(goods.getEgId());            //物品信息
            orders.setEuId(user.getEuId());         //收寄人信息
            orders.setTmId(means.getTmId());        //运输方式  后台分配运输方法
            orders.setTsId(status.getTsId());       //运输单号
            //orders.setLoCharge(BigDecimal.valueOf(199.9)); //运费计算 ？？？
//        System.out.println("orders = " + orders);
            int insert = ordersMapper.insert(orders);

            if (insert > 0) {
                return orders;
            }
        }
        System.out.println("生成失败");
        return null;
    }

    //生成订单


}
