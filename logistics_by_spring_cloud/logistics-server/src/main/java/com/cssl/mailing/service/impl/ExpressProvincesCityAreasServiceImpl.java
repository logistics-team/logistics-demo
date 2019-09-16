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
        HashMap<String, Object> map_1 = new HashMap<>();
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

    @Override
    public Map<String,Object> findAddr(String addr_p, String addr_c) {
        System.out.println("addr = " + addr_p);
        List<ExpressProvincesCityAreas> clist = mapper.findAddrByParentName(addr_p);
        List<ExpressProvincesCityAreas> alist = mapper.findAddrByParentName(addr_c);
        Map<String,Object> map = new HashMap<>();
        map.put("clist",clist);
        map.put("alist",alist);
        return map;
    }
}
