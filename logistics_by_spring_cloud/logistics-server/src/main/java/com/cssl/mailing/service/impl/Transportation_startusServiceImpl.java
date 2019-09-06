package com.cssl.mailing.service.impl;

import com.cssl.entity.LogisticsStatus;
import com.cssl.entity.TransportMeans;
import com.cssl.entity.TransportationStatus;
import com.cssl.mailing.mapper.Logistics_startusDao;
import com.cssl.mailing.mapper.Transport_meansDao;
import com.cssl.mailing.mapper.Transportation_startusDao;
import com.cssl.mailing.service.Transportation_startusService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

//@Service
public class Transportation_startusServiceImpl implements Transportation_startusService {
    @Resource
    Transportation_startusDao Transportation_startusDao;
    //运输方式
    @Resource
    Transport_meansDao transport_meansDao;
    //状态表
    @Resource
    Logistics_startusDao logistics_startusDao;
    @Override
    public TransportationStatus showTransportationStatusById(Integer ts_id) {
        System.out.println("ts_Id"+ts_id);
        TransportationStatus transportation_status = Transportation_startusDao.showTransportationStatusById(ts_id);
        TransportMeans transport_means = transport_meansDao.showTransportMeansById(transportation_status.getTmId());
        System.out.println("mmmm"+transport_means.toString());
        transportation_status.setTm(transport_means);
        LogisticsStatus logistics_status = logistics_startusDao.showLogisticsStatusById(transportation_status.getLsId());
        System.out.println("yyyy"+logistics_status);
        transportation_status.setLs(logistics_status);
        return transportation_status;
    }
}
