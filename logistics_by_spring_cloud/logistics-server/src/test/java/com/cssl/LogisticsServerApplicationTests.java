package com.cssl;



import com.cssl.entity.*;
import com.cssl.mailing.mapper.Express_userDao;
import com.cssl.mailing.service.IExpressProvincesCityAreasService;
import com.cssl.mailing.service.ILogisticsOrdersService;

import com.cssl.entity.ExpressUser;
import com.cssl.entity.ItemType;
import com.cssl.mailing.mapper.Express_userDao;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;





import java.time.LocalDateTime;

import java.util.List;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = LogisticsServerApplication.class)
public class LogisticsServerApplicationTests {

    @Autowired
    Express_userDao mapper;

    @Autowired
    IExpressProvincesCityAreasService cityAreas;
    @Test
    public void contextLoads() {
//        System.out.println("**************************************************************************");
//        System.out.println("cityAreas.getJson() = " + cityAreas.getJson());
//        System.out.println("**************************************************************************");
//        List<ExpressUser> list = mapper.findUserByWhere();
//        list.forEach(express_user -> System.out.println("express_user = " + express_user));
//        List<ItemType> it = mapper.findIt();
//        it.forEach(itemType -> System.out.println("itemType = " + itemType));
//        IdSequenceUtils idSequenceUtils = new IdSequenceUtils();
//        String l = idSequenceUtils.nextId();
//        System.out.println("订单号 = " + l);
//        System.out.println("s.length() = " + l.length());
    }

    @Autowired
    ILogisticsOrdersService ordersService;
    @Test
    public void  test(){
        System.out.println("cityAreas.getAreasIdByName(\"江永\") = " + cityAreas.getAreasIdByName("江永"));
        System.out.println("cityAreas.getCityIdByName(\"永州市\") = " + cityAreas.getCityIdByName("永州市"));
        System.out.println("cityAreas.getProvinceIdByName(\"湖南\") = " + cityAreas.getProvinceIdByName("湖南"));
//        ExpressGoods goods = new ExpressGoods();
//        BigDecimal bigDecimal = BigDecimal.valueOf(15.5);
//        goods.setWeight(bigDecimal);
//        goods.setEgAppraisedPrice(bigDecimal);
//        goods.setItId(1);
//        goods.setEgGmtCreate(LocalDateTime.now());
//        goods.setEgSpecialContext("这是一个马踏飞燕");
//        ExpressUser user = new ExpressUser(1, LocalDateTime.now(), LocalDateTime.now(), "佟丽娅",
//                430000, 430900, 430903, "17700244411",
//                "Cheney", 620000, 620800, 620822,
//                "15116114097");
//        goods.setExpressUser(user);
//
//        LogisticsOrders logisticsOrders = ordersService.generateOrders(goods);
//        System.out.println("logisticsOrders = " + logisticsOrders);

    @Test
    public void contextLoads() {
        List<ExpressUser> list = mapper.find();
        list.forEach(express_user -> System.out.println("express_user = " + express_user));
        List<ItemType> it = mapper.findIt();
        it.forEach(itemType -> System.out.println("itemType = " + itemType));

    }

}
