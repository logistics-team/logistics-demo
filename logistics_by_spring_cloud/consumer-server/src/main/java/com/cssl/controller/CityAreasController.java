package com.cssl.controller;

import com.cssl.service.LogisticsService;
import com.cssl.service.impl.LogisticsServiceHystrix;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Kagura Linne
 * @version 0.01
 * @since 2019/9/16---21:06
 */
@RestController
@RequestMapping("cityAreas")
public class CityAreasController {

    @Autowired
    private LogisticsService logisticsService;
    @RequestMapping("findAll")
    public String findAll(){
        return  logisticsService.cityAreasFindAll();
    }

    @RequestMapping("findByLevel")
    public String findByLevel(@RequestParam(required=false,defaultValue="1")int level){
        return  logisticsService.cityAreasFindByLevel(level);
    }

    @RequestMapping("findByID")
    public String findByID(@RequestParam(required=true) int id){
        return  logisticsService.cityAreasFindByID(id);
    }
}
