package com.cssl.lc.service.impl;

import com.cssl.entity.LogisticsStatus;
import com.cssl.lc.service.Logistics_startusService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class Logistics_startusServiceImpl implements Logistics_startusService {
    @Resource
    com.cssl.lc.mapper.Logistics_startusDao Logistics_startusDao;
    @Override
    public LogisticsStatus showLogisticsStatusById(Integer sId) {
        return Logistics_startusDao.showLogisticsStatusById(sId);
    }
}
