package com.cssl.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("go")
public class ForwardController {
    @RequestMapping("three")     //重定向到后台
    public String goThree(){
        return "redirect:/staticFiles/pages/three.html"; //redirect:/staticFiles/pages/backstage.html
    }

    @RequestMapping("backstage")     //重定向到后台
    public String goBackstage(){
        return "redirect:/staticFiles/pages/backstage.html"; //redirect:/staticFiles/pages/backstage.html
    }

    @RequestMapping("about")         //重定向到关于页面
    public String goAbout(){
        return "redirect:/staticFiles/pages/about.html"; //redirect:/staticFiles/pages/backstage.html
    }

    @RequestMapping("expressServiceTab")         //重定向到商业页面
    public String goBusiness(){
        return "redirect:/staticFiles/pages/expressServiceTab.html"; //redirect:/staticFiles/pages/backstage.html
    }

    @RequestMapping("placeOrder")         //重定向到寄件页面
    public String goCustomer_service(){
        return "redirect:/staticFiles/pages/placeOrder.html"; //redirect:/staticFiles/pages/backstage.html
    }

    @RequestMapping("index")         //重定向到首页页面
    public String goIndex(){
        return "redirect:/staticFiles/pages/index.html"; //redirect:/staticFiles/pages/backstage.html
    }



    @RequestMapping("joiningTT")         //重定向到加入我们页面
    public String goJoin_in(){
        return "redirect:/staticFiles/pages/joiningTT.html"; //redirect:/staticFiles/pages/backstage.html
    }

    @RequestMapping("login")         //重定向到登录页面
    public String goLogin(){
        return "redirect:/staticFiles/pages/login.html"; //redirect:/staticFiles/pages/backstage.html
    }

    @RequestMapping("queryExpress")         //重定向到快递查询页面
    public String goQueryExpress(){
        return "redirect:/staticFiles/pages/queryExpress.html"; //redirect:/staticFiles/pages/backstage.html
    }

    @RequestMapping("queryNetwork")         //重定向到网点页面
    public String goQueryNetwork(){
        return "redirect:/staticFiles/pages/queryNetwork.html"; //redirect:/staticFiles/pages/backstage.html
    }

    @RequestMapping("queryPrice")         //重定向到价格查询页面
    public String goQueryPrice(){
        return "redirect:/staticFiles/pages/queryPrice.html"; //redirect:/staticFiles/pages/backstage.html
    }

    @RequestMapping("register")         //重定向到注册页面
    public String goRegister(){
        return "redirect:/staticFiles/pages/register.html"; //redirect:/staticFiles/pages/backstage.html
    }


}
