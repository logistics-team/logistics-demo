package com.cssl.controller;

import com.alibaba.fastjson.JSON;
import com.cssl.entity.MyAddressBook;
import com.cssl.service.AddressInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@RequestMapping("/address")
@Controller
public class AddressController {

    private AddressInfo addressInfo;
    @Autowired
    public AddressInfo addressInfo(AddressInfo addressInfo){
        this.addressInfo = addressInfo;
        return this.addressInfo;
    }

    /**
     * 三级联动 2
     * @param parentCode 父级ID
     * @return
     */
    @ResponseBody
    @RequestMapping("getAddressDataInfo")
    public String getAddressDataInfo(String parentCode){
        return addressInfo.getAddressDataInfo(parentCode);
    }

    //添加地址
    @RequestMapping("addAddress")
    @ResponseBody
    public Map addAddress(
            @RequestParam(value = "id")Integer userId,
            @RequestParam(value = "name")String userName,
            @RequestParam(value = "addressBook.provinceCode")String provinceCode,
            @RequestParam(value = "addressBook.cityCode")String cityCode,
            @RequestParam(value = "addressBook.regionCode")String regionCode,
            @RequestParam(value = "addressBook.provinceName")String provinceName,
            @RequestParam(value = "addressBook.cityName")String cityName,
            @RequestParam(value = "addressBook.addressType")String addressType,
            @RequestParam(value = "addressBook.regionName")String regionName,
            @RequestParam(value = "addressBook.address")String address,
            @RequestParam(value = "addressBook.tel") String tel,
            @RequestParam(value = "addressBook.tag") String tag,
            @RequestParam(value = "addressBook.phone") String phone,
            @RequestParam(value = "addressBook.defaultType")String defaultType){
//        //联系人
//        System.out.println("name"+userName);
//        //省编号
//        System.out.println("provinceCode"+provinceCode);
//        //城市编号
//        System.out.println("cityCode"+cityCode);
//        //县编号
//        System.out.println("regionCode"+regionCode);
//        //省名
//        System.out.println("provinceName"+provinceName);
//        //城市名
//        System.out.println("cityName"+cityName);
//        //县名
//        System.out.println("regionName"+regionName);
//        //具体地址
//        System.out.println("address"+address);
//        //座机
//        System.out.println("tel"+tel);
//        //标签
//        System.out.println("tag"+tag);
//        //02寄件  01收件
//        System.out.println("addressType"+addressType);
//        //02不是默认地址  01默认地址
//        System.out.println("defaultType"+defaultType);
//        //电话  phone
        //userId 添加者的id
//        System.out.println("uId"+userId);
        userId=15;
        Map<String,Object> map=new HashMap<String,Object>();
        map.put("name",userName);
        map.put("provinceCode",provinceCode);
        map.put("cityCode",cityCode);
        map.put("regionCode",regionCode);
        map.put("provinceName",provinceName);
        map.put("cityName",cityName);
        map.put("regionName",regionName);
        map.put("address",address);
        map.put("tel",tel);
        map.put("tag",tag);
        map.put("addressType",addressType);
        map.put("defaultType",defaultType);
        map.put("phone",phone);
        map.put("userId",userId);
        String addAddressData = addressInfo.addAddressData(map);
        System.out.println("fanhui"+addAddressData);
        map.put("returnStatus",addAddressData);
        return map;
    }

    @RequestMapping("showAllAddressByUid")
    @ResponseBody
    public String showAllAddressByUid(Integer pageIndex,Integer pageSize,Integer uid){
        System.out.println("显示"+addressInfo.showAddressById(pageIndex,pageSize,uid));
        MyAddressBook mn=new MyAddressBook();
        return addressInfo.showAddressById(pageIndex,pageSize,uid);
    }
    @RequestMapping("echoData")
    @ResponseBody
    public Map echoData(Integer aId){
        //编辑地址回显
        System.out.println("aId"+aId);
        String echoData = addressInfo.echoData(aId);
        System.out.println("地址"+echoData);
        Map<String,Object> map=new HashMap<String,Object>();
        if(echoData!=null){
            map.put("addressBook",echoData);
            map.put("returnStatus",1);
        }else{
            map.put("returnStatus",0);
        }
        return  map;
    }
    @RequestMapping("deleteAddress")
    @ResponseBody
    public Map<String,Object> deleteAddress(Integer aId){
        System.out.println("aId"+aId);
        Map<String,Object> map=new HashMap<String,Object>();
        Integer addTF=Integer.parseInt(addressInfo.deleteAddress(aId));
        if(addTF>0){
            map.put("returnStatus",addTF);
        }else{
            map.put("returnStatus","2");
        }
        return map;
    }

    //添加地址
    @RequestMapping("updateAddress")
    @ResponseBody
    public Map updateAddress(
            @RequestParam(value = "id")Integer userId,
            @RequestParam(value = "name")String userName,
            @RequestParam(value = "addressBook.provinceCode")String provinceCode,
            @RequestParam(value = "addressBook.cityCode")String cityCode,
            @RequestParam(value = "addressBook.regionCode")String regionCode,
            @RequestParam(value = "addressBook.provinceName")String provinceName,
            @RequestParam(value = "addressBook.cityName")String cityName,
            @RequestParam(value = "addressBook.addressType")String addressType,
            @RequestParam(value = "addressBook.regionName")String regionName,
            @RequestParam(value = "addressBook.address")String address,
            @RequestParam(value = "addressBook.tel") String tel,
            @RequestParam(value = "addressBook.tag") String tag,
            @RequestParam(value = "addressBook.phone") String phone,
            @RequestParam(value = "addressBook.defaultType")String defaultType){
        Map<String,Object> map=new HashMap<String,Object>();
        map.put("name",userName);
        map.put("provinceCode",provinceCode);
        map.put("cityCode",cityCode);
        map.put("regionCode",regionCode);
        map.put("provinceName",provinceName);
        map.put("cityName",cityName);
        map.put("regionName",regionName);
        map.put("address",address);
        map.put("tel",tel);
        map.put("tag",tag);
        map.put("addressType",addressType);
        map.put("defaultType",defaultType);
        map.put("phone",phone);
        map.put("userId",userId);
        System.out.println("uname"+map.get("name"));
        String addAddressData = addressInfo.updateAddress(map);
        System.out.println("fanhui"+addAddressData);
        if(Integer.parseInt(addAddressData)>0){
            map.put("returnStatus",addAddressData);
        }else{
            map.put("returnStatus",2);
        }

        return map;
    }
}
