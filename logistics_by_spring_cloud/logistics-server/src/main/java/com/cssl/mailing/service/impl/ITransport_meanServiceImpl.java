package com.cssl.mailing.service.impl;

import com.cssl.entity.TransportMeans;
import com.cssl.mailing.mapper.Transport_meansDao;
import com.cssl.mailing.service.ITransport_meansService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

//@Service
public class ITransport_meanServiceImpl implements ITransport_meansService {
    @Resource
    Transport_meansDao transport_meansDao;
    @Override
    public TransportMeans showTransportMeansById(Integer mId) {
        return transport_meansDao.showTransportMeansById(mId);
    }
}
