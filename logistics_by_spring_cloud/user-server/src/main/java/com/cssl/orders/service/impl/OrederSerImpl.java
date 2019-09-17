package com.cssl.orders.service.impl;

import com.cssl.entity.LogisticsOrders;
import com.cssl.entity.LogisticsStatus;
import com.cssl.entity.TransportationStatus;
import com.cssl.orders.mapper.Orders_index;
import com.cssl.orders.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@Transactional
public class OrederSerImpl implements OrdersService {
    @Autowired
   private Orders_index osss;

    @Override
    public String show(int id,int page,int limit,String name,int select01,int select02,int select03) {

        int s=(page-1)*limit;//第一条
        int e=page*limit;//最后一条
        //System.out.println("id:"+id+",page:"+s+",limit:"+e);
        List<LogisticsOrders> lo=osss.show(id ,s ,e,name,select01,select02,select03);
        int count=osss.count(id,name,select01,select02,select03);

        String data="\"data\":[";
        int ccc=0;
        for (LogisticsOrders l:lo) {
            String c="{\"loId\": "+l.getLoId()+"," +
                    "\"euId\": "+l.getExpressUser().getEuId()+","+
                    "\"euReceiptName\":\""+l.getExpressUser().getEuReceiptName()+"\","+
                    "\"euReceiptPhone\":\""+l.getExpressUser().getEuReceiptPhone()+"\","+
                    "\"euSenderName\":\""+l.getExpressUser().getEuSenderName()+"\","+
                    "\"euSenderPhone\":\""+l.getExpressUser().getEuSenderPhone()+"\","+
                    "\"egId\":"+l.getExpressGoods().getEgId()+","+
                    "\"egSpecialContext\":\""+l.getExpressGoods().getEgSpecialContext()+"\","+
                    "\"itId\": "+l.getItemType().getItId()+","+
                    "\"itName\":\""+l.getItemType().getItName()+"\","+
                    "\"lsId\":"+l.getLogisticsStatus().getLsId()+","+
                    "\"lsContext\":\""+l.getLogisticsStatus().getLsContext()+"\","+
                    "\"tmType\":\""+l.getTransportMeans().getTmType()+"\","+
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
                    "\"count\":0,\"data\":[]}";;
        }
        //System.out.println(s);

        return ss;
    }

    @Override
    public List<LogisticsStatus> statue(int id) {
        List<LogisticsStatus> list=osss.l_statue(id);
        return list;
    }

    @Override
    @Transactional
    public int ts_update(TransportationStatus ts) {
        int i=osss.ts_update(ts);
        return i;
    }

    @Override
    public int count(int id,String name,int select01,int select02,int select03) {
        return osss.count(id,name,select01,select02,select03);
    }
}
