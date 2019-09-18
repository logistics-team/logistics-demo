package com.cssl.mailing.service.impl;

import com.alibaba.fastjson.JSON;
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
import java.util.List;
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
public class LogisticsOrdersServiceImpl extends ServiceImpl<LogisticsOrdersMapper, com.cssl.entity.LogisticsOrders> implements ILogisticsOrdersService {
    //订单表
    @Autowired
    private LogisticsOrdersMapper ordersMapper;
    //物流状态表
    @Autowired
    private ILogisticsStatusService logisticsStatusService;

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
    //运输方式
    @Autowired
    private ITransportationStatusService transportationStatusService;

    @Transactional
    @Override
    public Object generateOrders(Map<String, Object> map) {
//        boolean flag = false;       //确认生成订单
        for (String key : map.keySet()) {
            System.out.println(key);
        }
        for (Object value : map.values()) {
            System.out.println(value);
        }
        //if (true)
//            return null;

        IdSequenceUtils utils = new IdSequenceUtils();          //订单生成类
        ExpressUser user = new ExpressUser();              //收寄人信息
        LocalDateTime now = LocalDateTime.now();    //当前时间
        user.setEuGmtCreate(now);           //默认当前时间  待修复时区问题
        //收寄人信息
        if (map.get("receiveProvinceCode") != null && map.get("receiveProvinceCode") != "") {
            String receiveProvinceCode = (String) map.get("receiveProvinceCode");
            user.setEpReceiptId(Integer.valueOf(receiveProvinceCode));//存入收件人省id
        }
        if (map.get("receiveCityCode") != null && map.get("receiveCityCode") != "") {
            String receiveCity = (String) map.get("receiveCityCode");
            user.setEcReceiptId(Integer.valueOf(receiveCity));//存入收件人市id
        }
        if (map.get("receiveRegionCode") != null && map.get("receiveRegionCode") != "") {
            String receiveArea = (String) map.get("receiveRegionCode");
            user.setEaReceiptId(Integer.valueOf(receiveArea));//存入收件人区县id
        }else {
            return "未选择收件地址！";
        }
        if (map.get("receiveName") == null || map.get("receiveName") == "")
            return "未填写收件人姓名";
        user.setEuReceiptName(map.get("receiveName").toString());
        if (map.get("receivePhone") == null || map.get("receivePhone") == "")
            return "未填写收件人号码";
        user.setEuReceiptPhone(map.get("receivePhone").toString());
        //寄件人信息
        if (map.get("sendProvinceCode") != null && map.get("sendProvinceCode") != "") {
            String sendProvinceCode = (String) map.get("sendProvinceCode");
            user.setEpSenderId(Integer.parseInt(sendProvinceCode));//存入寄件人省id
        }
        if (map.get("sendCityCode") != null && map.get("sendCityCode") != "") {
            String sendCityCode = (String) map.get("sendCityCode");
            user.setEcSenderId(Integer.parseInt(sendCityCode));//存入寄件人市id
        }
        if (map.get("sendRegionCode") != null && map.get("sendRegionCode") != "") {
            String sendRegionCode = (String) map.get("sendRegionCode");
            user.setEaSenderId(Integer.parseInt(sendRegionCode));//存入寄件人区县id
        }else {
            return "未选择寄件地址！";
        }
        if (map.get("sendName") == null || map.get("sendName") == "")
            return "未填写寄件人姓名";
        user.setEuSenderName(map.get("sendName").toString());
        if (map.get("sendPhone") == null || map.get("sendPhone") == "")
            return "未填写寄件人号码";
        user.setEuSenderPhone(map.get("sendPhone").toString());
        //寄件物品信息
        ExpressGoods goods = new ExpressGoods();            //物品信息
        goods.setEgGmtCreate(now);
        if (map.get("goodsType") != null && map.get("goodsType") != "") {
            String goodsType = (String) map.get("goodsType");
            goods.setItId(typeService.getItIdByName(goodsType));//存入物品类型id
        }
        if (map.get("goodsWeight") != null && map.get("goodsWeight") != ""){
            if(Double.valueOf(map.get("goodsWeight").toString())>50||Double.valueOf(map.get("goodsWeight").toString())<0){
                return "请标注物品重量 0.1 ～ 50 KG";
            }
            goods.setWeight(BigDecimal.valueOf(Double.parseDouble(map.get("goodsWeight").toString()))); //物品质量
        }else {
            return "请标注物品重量 0.1 ～ 50 KG";
        }

        if (map.get("insuranceMoney") != null && map.get("insuranceMoney") != ""){
            if (Double.valueOf(map.get("insuranceMoney").toString())>5000||(Double.valueOf(map.get("insuranceMoney").toString()))<0){
                return "声明价值，1-5000间整数";
            }
            goods.setEgAppraisedPrice(BigDecimal.valueOf(Double.parseDouble(map.get("insuranceMoney").toString())));//预估价格
        }

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
                return JSON.toJSONString(orders);
            }
        }
        System.out.println("订单生成失败");
        return null;
    }

    //查询订单
    @Override
    public List<LogisticsOrders> showAllLogisticsOrders(Integer loId) {
        return ordersMapper.showAllOrders(loId);
    }
}
