package com.cssl.controller;

import com.cssl.entity.ExpressProvincesCityAreas;
import com.cssl.entity.LogisticsStatus;
import com.cssl.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@RequestMapping("admin")
@RestController
public class Orders_ExpressProvincesCityAreas_Controller {
    private UserService us;
    @Autowired
    public UserService userService(UserService us){
        this.us = us;
        return this.us;
    }
    @RequestMapping("/epca_select01")//所有省
    public List<ExpressProvincesCityAreas> select01(){
        String s=us.select01();
        //System.out.println("省:"+s);
        return transition(s);
    }

    @RequestMapping("/epca_select02")//所有市区,县
    public List<ExpressProvincesCityAreas> select02(int id){
        String s=us.select02(id);
        //System.out.println("省/市,区:"+s);
        return transition(s);
    }
    //格式转换,string转list
    private List<ExpressProvincesCityAreas> transition(String s){
        String[] l=s.split(",");
        List<ExpressProvincesCityAreas> list=new ArrayList<ExpressProvincesCityAreas>();
        for(int i=0;i<l.length;i+=2){
            ExpressProvincesCityAreas epc=new ExpressProvincesCityAreas();
            epc.setEpcaId(Integer.parseInt(l[i]));
            epc.setEpcaName(l[i+1]);
            list.add(epc);
        }
        //System.out.println(list);
        return list;
    }
    @RequestMapping("show")
    @ResponseBody//显示订单,下拉框搜索,搜索框搜索,省市区搜索
    public String show(@RequestParam(required=false,name="id",defaultValue="0")int id,int page,int limit,@RequestParam(required=false,name="name",defaultValue="")String name,@RequestParam(required=false,name="select01",defaultValue="0")int select01,@RequestParam(required=false,name="select02",defaultValue="0")int select02,@RequestParam(required=false,name="select03",defaultValue="0")int select03){
        //System.out.println("id:"+id+",page:"+page+",limit:"+limit);
        //System.out.println("name:"+name+",select01:"+select01+",select02:"+select02+",select03:"+select03);
        String s=us.show(id,page,limit,name,select01,select02,select03);// 服务者 名 logistics-server 访问orders/show方法 获取String 数据
        //System.out.println("数据显示:"+s);
        return s;
    }
    @RequestMapping("l_statue")
    @ResponseBody//订单下拉框
    public List<LogisticsStatus> l_statue(@RequestParam(required=false,name="id",defaultValue="0")int id){
        //System.out.println("id:"+id);
        String s=us.l_statue(id);// 服务者 名 logistics-server 访问orders/show方法 获取list 数据
        List<LogisticsStatus> list=new ArrayList<LogisticsStatus>();
        String[] ss=s.split(",");
        for (int i=0;i<ss.length;i+=2){
            LogisticsStatus ls=new LogisticsStatus();
            ls.setLsId(Integer.parseInt(ss[i]));
            ls.setLsContext(ss[i+1]);
            list.add(ls);
        }
        //System.out.println("下拉框显示:"+list);
        return list;
    }
    @RequestMapping("ls_update")
    @ResponseBody//编辑订单
    public int ls_update(@RequestParam(required=false,name="ls_id",defaultValue="0")int ls_id, @RequestParam(required=false,name="ts_id",defaultValue="")String ts_id){
        System.out.println("ls_id:"+ls_id+",ts_id:"+ts_id);
        String s=us.ls_update(ls_id,ts_id);// 服务者 名 logistics-server 访问orders/show方法 获取int 数据
        int i=Integer.parseInt(s);
        return i;
    }

    @RequestMapping("select_untreated") //未处理的投诉查询
    public String select_untreated(int page,int limit){
        String s=us.select_untreated(page,limit);
        //System.out.println("数据01:"+s);
        return s;
    }

    @RequestMapping("select_inHand")//处理中的投诉信息查询
    public String select_inHand(int page,int limit){
        String s=us.select_inHand(page,limit);
        //System.out.println("数据02:"+s);
        return s;
    }

    @RequestMapping("select_processed") //已处理的投诉信息查询
    public String select_processed(int page,int limit){
        String s=us.select_processed(page,limit);
        //System.out.println("数据03:"+s);
        return s;
    }

    @RequestMapping("update_psid")//修改投诉状态 根据id和psid
    public int update_psid(int id,int psid){
        System.out.println("传入的数据:"+id+":"+psid);
        int i=us.update_psid(id,psid);
        //System.out.println("修改:"+i);
        return i;
    }

}
