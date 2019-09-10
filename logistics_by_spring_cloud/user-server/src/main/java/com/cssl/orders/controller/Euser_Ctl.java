package com.cssl.orders.controller;


import com.cssl.entity.LogisticsOrders;
import com.cssl.orders.service.EuserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class Euser_Ctl {

    @Autowired
    private EuserService euserService;

    @RequestMapping("user_select")
    public String selectAll(String id,int page,int limit){
            int id2=0;
            String name="";
        try {
            id2=Integer.parseInt(id);
        }catch (Exception e){
            name=id;
        }
        List<LogisticsOrders> list=euserService.selectAll(id2,name,page,limit);
        int count=euserService.count(id2,name);

        String data="\"data\":[";
        int ccc=0;
        for (LogisticsOrders l:list) {
            String [] name2=l.getExpressProvincesCityAreas().getEpcaName().split(",");
            String c="{\"loId\": "+l.getLoId()+"," +
                    "\"euId\": "+l.getExpressUser().getEuId()+","+
                    "\"euReceiptName\":\""+l.getExpressUser().getEuReceiptName()+"\","+
                    "\"euReceiptPhone\":\""+l.getExpressUser().getEuReceiptPhone()+"\","+
                    "\"euReceiptsite\":\""+name2[0]+"\","+
                    "\"euSenderName\":\""+l.getExpressUser().getEuSenderName()+"\","+
                    "\"euSenderPhone\":\""+l.getExpressUser().getEuSenderPhone()+"\","+
                    "\"euSendersite\":\""+name2[1]+"\","+
                    "\"tsid\":"+l.getTsId()+
                    "},";
            data+=c;
            ccc=1;
        }
        data=data.substring(0,data.length()-1);
        data+="]";
        String s="{\"code\":0," +
                "\"msg\":\"\"," +
                "\"count\":"+count+ ","+data+"}";
        if(ccc==0){
            s="{\"code\":0," +
                    "\"msg\":\"\"," +
                    "\"count\":0,\"data\":[]}";
        }
//        System.out.println("收寄件人数据:"+s);
        return s;
    }
}
