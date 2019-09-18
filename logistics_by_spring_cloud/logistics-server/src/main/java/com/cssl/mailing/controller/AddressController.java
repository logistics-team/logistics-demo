package com.cssl.mailing.controller;

import com.alibaba.fastjson.JSON;
import com.cssl.cy.controller.ExpressProvincesCityAreasControllerC;
import com.cssl.mailing.service.IExpressProvincesCityAreasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RequestMapping("address")
@RestController
public class AddressController {

    @Autowired
    private IExpressProvincesCityAreasService areasService;

    @Autowired
    private ExpressProvincesCityAreasControllerC controllerC;

    /**
     * 三级联动 2
     * @param parentCode
     * @return
     */
    @RequestMapping("getAddressDataInfo")
    public String getAddressDataInfo(String parentCode){
        return areasService.getAddressDataInfo(parentCode);
    }

    /**
     *  运费估算  2
     * @return json 响应数据
     */
    @RequestMapping("freightEstimate")
    public String getFreightEstimate(Map<String,Object> map){
        Integer parseInt = 0;
        Integer parseInt1 = 0;
        double valueOf = 0;
        boolean transport = false;
        boolean isProvince = false;
        boolean b = false;
        //非空判断
        if (map.get("sendRegionCode")!=null)
            parseInt = (Integer) map.get("sendRegionCode");
        if (map.get("receiveRegionCode")!=null)
            parseInt1 = (Integer) map.get("receiveRegionCode");
        if (map.get("goodsWeight")!=null)
            valueOf = (Integer) map.get("goodsWeight");
        if (map.get("transport")!=null)
            transport = (boolean) map.get("transport");
        if (map.get("isProvince")!=null)
            isProvince = (boolean) map.get("isProvince");
        if (map.get("insuranceMoney")!=null)
            b = (boolean) map.get("insuranceMoney");

        //获取运费估算
        map = (Map<String, Object>) controllerC.freightCharge(parseInt, parseInt1, valueOf, transport, isProvince, b);
        Double totalprices = (Double) map.get("totalprices");   //估算价格

        if (null == totalprices){   //若为空返回失败
            map = new HashMap<>();
            map.put("returnStatus","02");
            map.put("returnMsg","价格估算失败！检查数据是否合格");
            return JSON.toJSONString(map);
        }
        map.put("returnStatus","01");
        return JSON.toJSONString(map);
    }

}
