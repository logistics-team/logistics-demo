package com.cssl.mailing.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cssl.entity.ExpressProvincesCityAreas;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 记录中国所有省市县信息，省市县表 服务类
 * </p>
 *
 * @author Devil
 * @since 2019-09-04
 */
public interface IExpressProvincesCityAreasService extends IService<ExpressProvincesCityAreas> {

    String getJson();

    /**
     * 查找ID
     */
    //2




    String getAddressDataInfo(String parentCode);


    //用户添加地址 4
    String addAddress(Map<String,Object> map);
}
