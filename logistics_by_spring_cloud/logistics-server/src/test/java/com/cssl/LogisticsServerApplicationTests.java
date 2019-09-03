package com.cssl;


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
    @Test
    public void contextLoads() {
        List<ExpressUser> list = mapper.find();
        list.forEach(express_user -> System.out.println("express_user = " + express_user));
        List<ItemType> it = mapper.findIt();
        it.forEach(itemType -> System.out.println("itemType = " + itemType));
    }

}
