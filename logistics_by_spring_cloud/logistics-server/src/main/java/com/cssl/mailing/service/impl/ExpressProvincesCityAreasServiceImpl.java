package com.cssl.mailing.service.impl;

import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cssl.entity.ExpressProvincesCityAreas;
import com.cssl.entity.ExpressProvincesCityAreas;
import com.cssl.mailing.mapper.ExpressProvincesCityAreasMapper;
import com.cssl.mailing.service.IExpressProvincesCityAreasService;
import org.omg.CORBA.OBJ_ADAPTER;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

/**
 * <p>
 * 记录中国所有省市县信息，省市县表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-04
 */
@Service
public class ExpressProvincesCityAreasServiceImpl extends ServiceImpl<ExpressProvincesCityAreasMapper, ExpressProvincesCityAreas> implements IExpressProvincesCityAreasService {

    @Autowired
    private ExpressProvincesCityAreasMapper mapper;

    @Override
    public String getJson() {
        HashMap<Integer, Object> map_1 = new HashMap<>();
        List<ExpressProvincesCityAreas> parents = mapper.getParent();
        for (ExpressProvincesCityAreas p:parents
             ) {

            List<ExpressProvincesCityAreas> city = mapper.getByParent(p.getEpcaId());
            for (ExpressProvincesCityAreas c:city)
                 {
                c.setAreaList(mapper.getByParent(c.getEpcaId()));
            }
            p.setCityList(city);

        }
//        List<ExpressProvincesCityAreas> json = mapper.getJson();
//        HashMap<Integer, Object> map = new HashMap<>();
//        for (ExpressProvincesCityAreas epca:json
//             ) {
//            HashMap<Integer, String> ma = new HashMap<>();
//            ma.put(epca.getEpcaId(),epca.getEpcaName());
//            map.put(epca.getParentId(),ma);
//        }
        return JSON.toJSONString(parents,true);
    }

    @Override
    public Integer getProvinceIdByName(String province) {
        return mapper.getProvinceIdByName(province);
    }

    @Override
    public Integer getCityIdByName(String city) {
        return mapper.getCityIdByName(city);
    }

    @Override
    public Integer getAreasIdByName(String areas) {
        return mapper.getAreasIdByName(areas);
    }
}
