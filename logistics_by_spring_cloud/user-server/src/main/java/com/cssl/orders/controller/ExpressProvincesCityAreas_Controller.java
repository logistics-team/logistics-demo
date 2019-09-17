package com.cssl.orders.controller;

import com.cssl.orders.service.ExpressProvincesCityAreasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orders")
public class ExpressProvincesCityAreas_Controller {
    @Autowired
    private ExpressProvincesCityAreasService epcs;

    @RequestMapping("select01")//省的下拉框数据
    public String select01(){
        String s=epcs.select01();
        return s;
    }

    @RequestMapping("select02")//市区,县的下拉框数据
    public String select02(int id){
        String s=epcs.select02(id);
        return s;
    }

}
