package com.cssl.service;

import java.util.Map;

public interface AddressInfo {

    String findAddrByProvincesCity(String addr_p, String addr_c);

    String getAddressDataInfo(String parentCode);

    String findAddrData(String addressInfo);

    String addAddressData(Map<String,Object> map);

    //用户下的地址
    String showAddressById(Integer pageIndex,Integer pageSize,Integer uid);
    //编辑地址回显
    String echoData(Integer aId);
    //删除地址
    String deleteAddress(Integer aId);
    //修改地址
    String updateAddress(Map<String, Object> map);
}
