package com.cssl.controller;

import com.cssl.entity.ExpressProvincesCityAreas;
import com.cssl.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/guest")
public class ExpressProvincesCityAreas_Controller {
    @Autowired
    private UserService us;
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
}
