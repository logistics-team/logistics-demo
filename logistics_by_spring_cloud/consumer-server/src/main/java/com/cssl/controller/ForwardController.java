package com.cssl.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("go")
public class ForwardController {
    @RequestMapping("backstage")     //重定向到后台
    public String goBackstage(){
        return "redirect:/html/backstage.html"; //redirect:/html/backstage.html
    }

    @RequestMapping("about")         //重定向到关于页面
    public String goAbout(){
        return "redirect:/html/about.html"; //redirect:/html/backstage.html
    }

    @RequestMapping("business")         //重定向到商业页面
    public String goBusiness(){
        return "redirect:/html/business.html"; //redirect:/html/backstage.html
    }

    @RequestMapping("customer_service")         //重定向到客服服务页面
    public String goCustomer_service(){
        return "redirect:/html/customer_service.html"; //redirect:/html/backstage.html
    }

    @RequestMapping("index")         //重定向到首页页面
    public String goIndex(){
        return "redirect:/html/index.html"; //redirect:/html/backstage.html
    }



    @RequestMapping("join_in")         //重定向到加入我们页面
    public String goJoin_in(){
        return "redirect:/html/join_in.html"; //redirect:/html/backstage.html
    }

    @RequestMapping("login")         //重定向到登录页面
    public String goLogin(){
        return "redirect:/html/login.html"; //redirect:/html/backstage.html
    }

    @RequestMapping("queryExpress")         //重定向到快递查询页面
    public String goQueryExpress(){
        return "redirect:/html/queryExpress.html"; //redirect:/html/backstage.html
    }

    @RequestMapping("queryNetwork")         //重定向到网点页面
    public String goQueryNetwork(){
        return "redirect:/html/queryNetwork.html"; //redirect:/html/backstage.html
    }

    @RequestMapping("queryPrice")         //重定向到价格查询页面
    public String goQueryPrice(){
        return "redirect:/html/queryPrice.html"; //redirect:/html/backstage.html
    }

    @RequestMapping("register")         //重定向到注册页面
    public String goRegister(){
        return "redirect:/html/register.html"; //redirect:/html/backstage.html
    }


}
