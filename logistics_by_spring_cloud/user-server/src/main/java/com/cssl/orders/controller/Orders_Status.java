package com.cssl.orders.controller;

import com.cssl.entity.ExpressGoods;
import com.cssl.entity.LogisticsOrders;
import com.cssl.entity.LogisticsStatus;
import com.cssl.entity.TransportationStatus;
import com.cssl.orders.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class Orders_Status {

   // ExpressGoods 快递物件;ExpressUser 收寄人; itemtype 物品类型;logisticsorders 物流订单
    @Autowired
    private OrdersService os;
    @RequestMapping("/show")
    public String show(@RequestParam(required=false,name="id",defaultValue="0") int id,int page,int limit){
        List<LogisticsOrders> lo=os.show(id,page,limit);
        int count=os.count(id);

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
        String s="{\"code\":0," +
                "\"msg\":\"\"," +
                "\"count\":"+count+ ","+data+"}";
        if(ccc==0){
            s="{\"code\":0," +
                    "\"msg\":\"\"," +
                    "\"count\":0,\"data\":[]}";;
        }

        return s;
    }

    @RequestMapping("/l_statue")
    public String l_statue(int id){
//        System.out.println("下拉框id:"+id);
        List<LogisticsStatus> list=os.statue(id);
//        System.out.println("订单下拉框数据:"+list);
        String s=",";
        for (LogisticsStatus l:list){
            s+=l.getLsId()+","+l.getLsContext()+",";
        }
        s=s.substring(1,s.length()-1);
//        System.out.println("订单下拉框数据:"+s);
        return s;
    }

    @RequestMapping("/ts_update")
    public String ts_update(String ts_id,int ls_id){
        if(ts_id.isEmpty() || ls_id == 0){
            return "0";
        }
//        System.out.println(ts_id+":"+ls_id);
        TransportationStatus ts=new TransportationStatus();
        ts.setTsId(ts_id);
        ts.setLsId(ls_id);
        int i=os.ts_update(ts);
//        System.out.println("编辑订单:"+i);
        String s=String.valueOf(i);
        return s;
    }
}
