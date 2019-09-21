package com.cssl.controller;

import com.cssl.service.LogisticsService;
import com.cssl.service.impl.LogisticsServiceHystrix;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * @author Kagura Linne
 * @version 0.01
 * @since 2019/9/16---21:06
 */
@RestController
@RequestMapping("cityAreas")
public class CityAreasController {

    private LogisticsService logisticsService;
    @Autowired
    public LogisticsService logisticsService(LogisticsService logisticsService){
        this.logisticsService = logisticsService;
        return this.logisticsService;
    }
    /**
     * 查询全部地区
     * @return  json
     */
    @RequestMapping("findAll")
    public String findAll(){
        return  logisticsService.cityAreasFindAll();
    }

    /**
     * 按照城市等级查询
     * @param level  城市等级
     * @return json
     */
    @RequestMapping("findByLevel")
    public String findByLevel(@RequestParam(required=false,defaultValue="1")int level){
        return  logisticsService.cityAreasFindByLevel(level);
    }

    /**
     * 按照id查询
     * @param id ID
     * @return json
     */
    @RequestMapping("findByID")
    public String findByID(@RequestParam(required=true) int id){
        return  logisticsService.cityAreasFindByID(id);
    }

    /**
     *  网点查询    四个参数都不是必须参数,但得提供 其中一种
     * @param condition  关键字
     * @param province   省id
     * @param city         市id
     * @param district      区县id
     * @return json
     */
    @RequestMapping("findChild")
        public String findChild(@RequestParam(required = false) String condition ,@RequestParam(required = false,defaultValue = "0") int province ,
                            @RequestParam(required = false,defaultValue = "0") int city ,@RequestParam(required = false,defaultValue = "0") int district){
        return  logisticsService.cityAreasFindChild(condition,province,city,district);
    }
}
