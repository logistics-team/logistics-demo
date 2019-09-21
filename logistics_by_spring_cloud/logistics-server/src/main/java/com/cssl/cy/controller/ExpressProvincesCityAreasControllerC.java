package com.cssl.cy.controller;

import com.cssl.cy.service.ExpressProvincesCityAreasService;
import com.cssl.cy.util.CityAreasCalculateUtil;
import com.cssl.entity.ExpressProvincesCityAreas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *<p>地区 controller</p>
 * @author Kagura Linne
 * @version 0.01
 * @since 2019/9/16---20:13
 */
@RestController
@RequestMapping("CityAreas")
public class ExpressProvincesCityAreasControllerC {
    @Autowired
    private ExpressProvincesCityAreasService cityAreasService;


    /**
     * 查询所有地区
     * @return
     */
    @RequestMapping("findAll")
    public Object findAll(){
        return  cityAreasService.findAll();
    };

    /**
     * 按照城市等级查询地区
     * @param level
     * @return
     */
    @RequestMapping("findByLevel")
    public Object findByLevel(int level){
        return  cityAreasService.findByLevel(level);
    }

    /**
     * \按照id 查询地区
     * @param id
     * @return
     */
    @RequestMapping("findByID")
    public Object findByID( int id){
        System.out.println(id);
        return  cityAreasService.findByID(id);
    }

    /**
     * <p>计算运费</p>
     * @param id  区县起点
     * @param id2   区县终点
     * @param weight   重量
     * @param hedging  物品的估值
     * @param transportation    运输方式 false陆运  true 空运
     * @param boo    是否同省
     * @return  <p>返回一个map</p>
     * <p>weight 重量</p><p>first 首重价格</p><p>continued 续重价格</p><p>hedgingcosts 保价费用</p><p>totalprices 总价</p>
     */
    @RequestMapping("freight")
    public Object freightCharge (int id , int id2 ,double weight,int hedging,boolean transportation ,boolean boo ){
        //这个map根据是否同省来初始化
        Map <String ,Integer> map ;
        if(boo){
            //同省
            map = CityAreasCalculateUtil.freightCharge();
        }else {
            //不同省
            ExpressProvincesCityAreas city = cityAreasService.findByID(id);
            ExpressProvincesCityAreas city2 = cityAreasService.findByID(id2);
            //调用util 根据两个点坐标计算路程
            int distance = CityAreasCalculateUtil.distance(Double.parseDouble(city.getEpcaLat()), Double.parseDouble(city.getEpcaLng()),
                    Double.parseDouble(city2.getEpcaLat()), Double.parseDouble(city2.getEpcaLng()));
            map = CityAreasCalculateUtil.freightCharge(distance,transportation);
        }
        //从初始化完成了的map中获取首重和续重费用
        int first = map.get("first");
        int continued = map.get("continued");
        //向上取整后的重量 , 因为重量得按整数算,但前台传过来的是double
        int  wg = (int)Math.ceil(weight);
        //总价
        int cw = wg * continued + first;
        //保值费用,默认0
        int hg =0;
        //当物品估值大于0(也就是存在保值的时候)
        if (hedging>0){
            //保值费用取物品估值的百分之一
            hg= (int)Math.ceil(hedging * 0.01);
            //加入总价
            cw = cw + hg;
        }
        map.put("hedgingcosts",hg);
        map.put("totalprices",cw);
        map.put("weight",wg);
        return  map;
    }


    @RequestMapping("findChild")
    public Object findChild(String condition,int province,int city,int district){
        List<ExpressProvincesCityAreas> list ;
        if (district>0){
            list = cityAreasService.findChild(condition,district);
        }else if (city>0){
            list =   cityAreasService.findChild(condition,city);
        }else{
            list =    cityAreasService.findChild(condition,province);
        }
        return list ;
    }
}
