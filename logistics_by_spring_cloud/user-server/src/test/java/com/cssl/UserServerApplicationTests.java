package com.cssl;

import com.cssl.authentication.mapper.RoleUserMapper;
import com.cssl.entity.RoleUser;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = UserServerApplication.class)
@EnableEurekaClient
public class UserServerApplicationTests {

    @Autowired
    RoleUserMapper roleUserMapper;
    @Test
    public void contextLoads() {
        List<RoleUser> all = roleUserMapper.findAll();
        all.forEach(roleUser -> System.out.println("roleUser = " + roleUser));
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
