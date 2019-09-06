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

    @RequestMapping("backstage")     //重定向到后台
    public String goBackstage(){
        return "redirect:/html/backstage.html"; //redirect:/html/backstage.html

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

        return "redirect:/staticFiles/pages/index.html"; //redirect:/staticFiles/pages/backstage.html

        return "redirect:/html/index.html"; //redirect:/html/backstage.html

    }



<<<<<<< HEAD
    @RequestMapping("joiningTT")         //重定向到加入我们页面
    public String goJoin_in(){
        return "redirect:/staticFiles/pages/joiningTT.html"; //redirect:/staticFiles/pages/backstage.html
=======
    @RequestMapping("join_in")         //重定向到加入我们页面
    public String goJoin_in(){
        return "redirect:/html/join_in.html"; //redirect:/html/backstage.html
>>>>>>> remotes/origin/ljx
    }

    @RequestMapping("login")         //重定向到登录页面
    public String goLogin(){
<<<<<<< HEAD
        return "redirect:/staticFiles/pages/login.html"; //redirect:/staticFiles/pages/backstage.html
=======
        return "redirect:/html/login.html"; //redirect:/html/backstage.html
>>>>>>> remotes/origin/ljx
    }

    @RequestMapping("queryExpress")         //重定向到快递查询页面
    public String goQueryExpress(){
<<<<<<< HEAD
        return "redirect:/staticFiles/pages/queryExpress.html"; //redirect:/staticFiles/pages/backstage.html
=======
        return "redirect:/html/queryExpress.html"; //redirect:/html/backstage.html
>>>>>>> remotes/origin/ljx
    }

    @RequestMapping("queryNetwork")         //重定向到网点页面
    public String goQueryNetwork(){
<<<<<<< HEAD
        return "redirect:/staticFiles/pages/queryNetwork.html"; //redirect:/staticFiles/pages/backstage.html
=======
        return "redirect:/html/queryNetwork.html"; //redirect:/html/backstage.html
>>>>>>> remotes/origin/ljx
    }

    @RequestMapping("queryPrice")         //重定向到价格查询页面
    public String goQueryPrice(){
<<<<<<< HEAD
        return "redirect:/staticFiles/pages/queryPrice.html"; //redirect:/staticFiles/pages/backstage.html
=======
        return "redirect:/html/queryPrice.html"; //redirect:/html/backstage.html
>>>>>>> remotes/origin/ljx
    }

    @RequestMapping("register")         //重定向到注册页面
    public String goRegister(){
<<<<<<< HEAD
        return "redirect:/staticFiles/pages/register.html"; //redirect:/staticFiles/pages/backstage.html
=======
        return "redirect:/html/register.html"; //redirect:/html/backstage.html
>>>>>>> remotes/origin/ljx
    }


}
