package com.cssl.mailing.service.impl;

import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cssl.entity.ExpressProvincesCityAreas;
import com.cssl.mailing.mapper.ExpressProvincesCityAreasMapper;
import com.cssl.mailing.service.IExpressProvincesCityAreasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
        List<ExpressProvincesCityAreas> parents = mapper.getParent();
        StringBuilder plist = new StringBuilder();
        for (ExpressProvincesCityAreas p:parents){
            //省
            plist.append("{name:'"+p.getEpcaName()+"',");
            StringBuilder clist = new StringBuilder();
            for (ExpressProvincesCityAreas c:mapper.getByParent(p.getEpcaId())){
                //市
                clist.append("{name:'"+c.getEpcaName()+"',");
                StringBuilder alist = new StringBuilder();
                for (ExpressProvincesCityAreas a:mapper.getByParent(c.getEpcaId())){
                    //区县
                    alist.append("'"+a.getEpcaName()+"',");
                }
                clist.append("areaList:["+alist+"]},");
            }
            plist.append("cityList:["+clist+"]},");
        }
        return JSON.toJSONString(plist,true);
    }


    @Override
    public String getAddressDataInfo(String parentCode) {
        List<ExpressProvincesCityAreas> addressDataInfo = mapper.getAddressDataInfo(parentCode);
        Map<String,String> map_c = new HashMap<>();
        for (ExpressProvincesCityAreas addr:addressDataInfo){
            if (addr!=null)
                map_c.put(addr.getEpcaId().toString(),addr.getEpcaName());
        }
        Map<String,Object> map = new HashMap<>();
        map.put("returnStatus","01");
        map.put("areaData",map_c);
        return JSON.toJSONString(map);
    }

    @Override
    public String addAddress(Map<String, Object> map) {
        System.out.println("map = " + map);
        Integer addAddress = mapper.addAddress(map);
        Integer selectId = mapper.selectId();
        System.out.println("selectId"+selectId);
        Integer userId = mapper.addUserAddress(Integer.parseInt(map.get("userId").toString()), selectId);
        return addAddress.toString();
    }
}
