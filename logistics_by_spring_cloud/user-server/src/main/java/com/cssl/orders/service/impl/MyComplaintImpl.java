package com.cssl.orders.service.impl;

import com.cssl.entity.LogisticsOrders;
import com.cssl.entity
        .MyComplaint;
import com.cssl.orders.mapper.MyComplaint_index;
import com.cssl.orders.service.MyComplaintService;
import org.omg.CORBA.PRIVATE_MEMBER;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@EnableTransactionManagement
@Transactional
public class MyComplaintImpl implements MyComplaintService {

    @Autowired
    private MyComplaint_index mi;

    @Override
    public String select_psid(int id,int page,int limit) {
        int s=(page-1)*limit;//第一条
        int e=page*limit;//最后一条
        List<MyComplaint> list=mi.select_psid(id,s,e);
        int count=mi.count(id);

        String data="\"data\":[";
        int ccc=0;
        for (MyComplaint l:list) {
            System.out.println("l = " + l);
            String [] name=new String[2];
            String [] phone=new String[2];
            String [] address=new String[2];
                if(l.getComplainantInfo().getCiName()!=null){
                    name=l.getComplainantInfo().getCiName().split("/");
                }
                if(l.getComplainantInfo().getCiPhone()!=null){
                    phone=l.getComplainantInfo().getCiPhone().split("/");
                }
                if(l.getComplainantInfo().getCiAddress()!=null){
                    address=l.getComplainantInfo().getCiAddress().split("/");
                }
                String img=l.getMcImgLocation();
                //if(img.isEmpty()){
                //    img="";
                //}
                String c="{\"loId\": "+l.getLoId()+"," +
                        "\"id\": "+l.getMcId()+","+
                        "\"ciName\":\""+name[0]+"\","+
                        "\"ciPhone\":\""+phone[0]+"\","+
                        "\"ciAddress\":\""+address[0]+"\","+
                        "\"ciName2\":\""+name[1]+"\","+
                        "\"ciPhone2\":\""+phone[1]+"\","+
                        "\"ciAddress2\":\""+address[1]+"\","+
                        "\"tocContext\":\""+l.getTypesOfComplaints().getTocContext()+"\","+
                        "\"mcContext\":\""+l.getMcContext()+"\","+
                        "\"psContext\":\""+l.getProcessingStatus().getPsContext()+"\","+
                        "\"mcGmtModified\":\""+l.getMcGmtModified()+"\","+
                        "\"mcimglocation\":\""+img+"\""+
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
        //System.out.println("条件下的投诉信息数据:"+ss);

        return ss;
    }

    @Override
    public int count(int id) {
        return mi.count(id);
    }

    @Override
    @Transactional
    public int update_psid(int id, int psid) {
        int i=mi.update_psid(id,psid);
        return i;
    }

    @Override
    public String select_user_id(int id,int page) {
        int pg=(page-1)*10;
        List<MyComplaint> list=mi.select_user_id(id,pg,10);//10为每页显示数量size
        int i=count_qt(1,id);
        String data="[";
        int ccc=0;
        for (MyComplaint l:list) {
            String c="{\"loId\": "+l.getLoId()+"," +
                    "\"tocContext\":\""+l.getTypesOfComplaints().getTocContext()+"\","+
                    "\"psContext\":\""+l.getProcessingStatus().getPsContext()+"\","+
                    "\"mcGmtCreate\":\""+l.getMcGmtCreate()+"\","+
                    "\"count01\":\""+i+"\""+
                    "},";
            data+=c;
            ccc=1;
        }
        data=data.substring(0,data.length()-1);
        data+="]";
        if(ccc==0){
            data="[]";
        }
        return data;
    }

    /**
     * 前台--投诉详情
     *
     * @param id 订单id
     */
    @Override
    public String select_mc_id(String id) {
        MyComplaint l=mi.select_mc_id(id);
        int ccc=0;
        String dt="[{\"loId\": "+l.getLoId()+"," +
                "\"mcContext\":\""+l.getMcContext()+"\","+
                "\"psId\":\""+l.getPsId()+"\","+
                "\"mcImgLocation\":\""+l.getMcImgLocation()+"\","+
                "\"tocContext\":\""+l.getTypesOfComplaints().getTocContext()+"\","+
                "\"mcGmtCreate\":\""+l.getMcGmtCreate()+"\""+
                "}]";
        return dt;
    }

    /**
     * 前台--删除投诉 根据订单id
     *
     * @param id 订单id
     */
    @Override
    @Transactional
    public int remova_mc_id(String id) {
        return mi.remove_mc_id(id);
    }

    /**
     * 总页数---前台投诉
     */
    private int count_qt(int size,int id){
        int i=mi.count02(id);
        int coun=i%size==0?(i/size):(i/size)+1;
        return coun;
    }
}
