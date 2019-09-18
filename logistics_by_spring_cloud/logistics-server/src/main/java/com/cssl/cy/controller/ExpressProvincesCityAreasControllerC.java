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
    public Object findByLevel(@RequestBody() int level){
        return  cityAreasService.findByLevel(level);
    }

    /**
     * \按照id 查询地区
     * @param id
     * @return
     */
    @RequestMapping("findByID")
    public Object findByID(@RequestBody() int id){
        System.out.println(id);
        return  cityAreasService.findByID(id);
    }

    /**
     * <p>计算运费</p>
     * @param id  起点
     * @param id2   终点
     * @param weight   重量
     * @param transportation    运输方式 false陆运  true 空运
     * @param boo    是否同省
     * @param hedging   是否保值
     * @return  <p>一个map</p>
     * <p>weight 重量</p><p>first 首重价格</p><p>continued 续重价格</p><p>hedgingcosts 保价费用</p><p>totalprices 总价</p>
     */
    @RequestMapping("freight")
    public Object freightCharge (int id , int id2 ,double weight,boolean transportation ,boolean boo , boolean hedging){
        Map <String ,Object> map ;
        if(boo){
            map = CityAreasCalculateUtil.freightCharge();
        }else {
            ExpressProvincesCityAreas city = cityAreasService.findByID(id);
            ExpressProvincesCityAreas city2 = cityAreasService.findByID(id2);
            //调用util 根据两个点坐标计算路程
            int distance = CityAreasCalculateUtil.distance(Integer.parseInt(city.getEpcaLat()), Integer.parseInt(city.getEpcaLng()),
                    Integer.parseInt(city2.getEpcaLat()), Integer.parseInt(city2.getEpcaLng()));
            map = CityAreasCalculateUtil.freightCharge(distance,transportation);
        }
        int first = (int) map.get("first");
        int continued = (int) map.get("continued");
        double cw = weight * continued + first;
        int hg =0;
        if (hedging){
            hg= (int)Math.ceil(cw * 0.01);
            cw = cw + (hg>50?50:hg);
        }
        map.put("hedgingcosts",hg);
        map.put("totalprices",cw);
        map.put("weight",weight);
        return  map;
    }


}
