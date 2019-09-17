package com.cssl.orders.service.impl;

import com.cssl.entity.LogisticsOrders;
import com.cssl.orders.mapper.Euser_index;
import com.cssl.orders.service.EuserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Component
@Transactional
public class EuserSerImpl implements EuserService {

    @Autowired
    private Euser_index ei;
    @Override
    public String selectAll(int id,String name,int page,int limit) {
        int s=(page-1)*limit;//第一条
        int e=page*limit;//最后一条
        //System.out.println("查询的id为:"+id+",name:"+name+",起始:"+s+",结束:"+e);
        List<LogisticsOrders> list=ei.selectAll(id,name,s,e);
        int count=ei.count(id,name);

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
        String ss="{\"code\":0," +
                "\"msg\":\"\"," +
                "\"count\":"+count+ ","+data+"}";
        if(ccc==0){
            ss="{\"code\":0," +
                    "\"msg\":\"\"," +
                    "\"count\":0,\"data\":[]}";
        }
        //System.out.println("收寄件人数据:"+s);
        return ss;
    }

    @Override
    public int count(int id,String name) {
        return ei.count(id,name);
    }
}
