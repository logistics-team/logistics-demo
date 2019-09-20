package com.cssl.service;

public interface AddressInfo {

    String findAddrByProvincesCity(String addr_p,String addr_c);

    String getAddressDataInfo(String parentCode);

    String findAddrData(String addressInfo);
}
