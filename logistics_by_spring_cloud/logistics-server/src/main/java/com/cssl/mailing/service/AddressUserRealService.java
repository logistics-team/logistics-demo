package com.cssl.mailing.service;

import com.cssl.entity.MyAddressBook;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageInfo;

import java.util.List;
import java.util.Map;

public interface AddressUserRealService {
     PageInfo showAllMyAddress(Integer pageIndex, Integer pageSize, Integer uid);
    //地址回显
    MyAddressBook echoData(Integer aId);
    //地址删除
    Integer deleteAddress(Integer aId);
    //修改地址
    String updateAddress(Map<String, Object> map);
}
