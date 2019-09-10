package com.cssl;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = UserServerApplication.class)
@EnableEurekaClient
public class UserServerApplicationTests {

    @Test
    public void contextLoads() {
        Integer ms = 123456;

        String ma = "123456 ";

        boolean a = ms!=Integer.parseInt(ma.trim());
        System.out.println("a = "+ a);
        boolean b = ms.toString().equals(ma);
        System.out.println("b = "+ b);
        boolean c = ms.toString()==ma;
        System.out.println("c = " + c);
    }

}
