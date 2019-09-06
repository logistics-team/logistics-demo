package com.cssl;


import com.cssl.entity.ExpressGoods;
import com.cssl.entity.ExpressUser;
import com.cssl.entity.LogisticsOrders;
import com.cssl.entity.TransportationStatus;
import com.cssl.lc.mapper.Express_userDao;
import com.cssl.lc.service.Express_goodsService;
import com.cssl.lc.service.Express_ordersService;
import com.cssl.lc.service.Express_userService;
import com.cssl.lc.service.Transportation_startusService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


import java.util.List;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = LogisticsServerApplication.class)
public class LogisticsServerApplicationTests {

    @Autowired(required = false)
    Express_userDao mapper;
//    @Test
//    public void contextLoads() {
//        System.out.println("LocalDateTime.now() = " + LocalDateTime.now());
//        int i = mapper.saveExpress_user(new Express_user(1, LocalDateTime.now(), LocalDateTime.now(), "李嘉欣", 430000, 430900, 430903, "17700244411", "杨舟", 430000, 431100, 431125, "15116114097", 2));
//        System.out.println("i = " + i);
//
//    }
    @Autowired(required = false)
    Express_ordersService ios;
    //物件表
    @Autowired
    Express_goodsService express_goodsServiceImpl;
    //运单表
    @Autowired
    Transportation_startusService transportation_statusServiceImpl;
    //收寄件人
    @Autowired
    Express_userService express_userServiceImpl;
    @Test
    public void showAllOrders() {
        List<LogisticsOrders> logistics_orders = ios.showAllOrders();
        for (LogisticsOrders lo:logistics_orders
        ) {
            ExpressGoods express_goods = express_goodsServiceImpl.showExpressGoodsById(lo.getEgId());
            lo.setEg(express_goods);
            TransportationStatus transportation_status = transportation_statusServiceImpl.showTransportationStatusById(Integer.parseInt(lo.getTsId()));
            lo.setTs(transportation_status);
            ExpressUser express_user = express_userServiceImpl.showUserById(lo.getEuId());
            lo.setEu(express_user);
        }
        for (LogisticsOrders lo:logistics_orders){
            System.out.println(lo);
        }
    }

}
