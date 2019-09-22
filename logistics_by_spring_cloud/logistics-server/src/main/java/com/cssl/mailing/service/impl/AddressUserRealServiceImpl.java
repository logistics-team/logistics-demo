package com.cssl.mailing.service.impl;

import com.cssl.entity.AddressUserRela;
import com.cssl.entity.ExpressProvincesCityAreas;
import com.cssl.entity.LogisticsOrders;
import com.cssl.entity.MyAddressBook;
import com.cssl.mailing.mapper.ExpressProvincesCityAreasMapper;
import com.cssl.mailing.service.AddressUserRealService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class AddressUserRealServiceImpl implements AddressUserRealService{
    @Autowired
    ExpressProvincesCityAreasMapper expressProvincesCityAreasMapper;
    @Override
    public PageInfo<MyAddressBook> showAllMyAddress(Integer pageIndex,Integer pageSize,Integer uid) {
        Page<MyAddressBook> page = PageHelper.startPage(pageIndex, pageSize);
        List<MyAddressBook> addressUserRelas = expressProvincesCityAreasMapper.showAllMyAddressById(uid);
        //集合
        PageInfo<MyAddressBook> pageInfo = new PageInfo<>(page.getResult());
        System.out.println("pageInfo"+pageInfo);
        return pageInfo;
    }

    @Override
    public MyAddressBook echoData(Integer aId) {
        return expressProvincesCityAreasMapper.echoData(aId);
    }

    @Override
    public Integer deleteAddress(Integer aId) {
        Integer integer = expressProvincesCityAreasMapper.deleteUserAddress(aId);
        if(integer>0){
            integer = expressProvincesCityAreasMapper.deleteAddress(aId);
        }
        return integer;
    }

    @Override
    public String updateAddress(Map<String, Object> map) {
        return expressProvincesCityAreasMapper.updateAddress(map).toString();
    }
}
