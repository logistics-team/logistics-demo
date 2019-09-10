package com.cssl.mailing.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cssl.entity.TransportMeans;
import com.cssl.entity.TransportationStatus;
import com.cssl.mailing.mapper.TransportMeansMapper;
import com.cssl.mailing.mapper.TransportationStatusMapper;
import com.cssl.mailing.service.ITransportMeansService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 记录运输类型，速度，支出，运输方式表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-04
 */
@Service
public class TransportMeansServiceImpl extends ServiceImpl<TransportMeansMapper, TransportMeans> implements ITransportMeansService {
    @Autowired
    private TransportationStatusMapper statusMapper;        //运单

    @Autowired
    private TransportMeansMapper meansMapper;        //运单
    @Override
    public TransportationStatus generateWaybill() {
        TransportationStatus status = new TransportationStatus();
        //获取寄件信息
        //获取运输方式
//        return statusMapper.insert(status);
        return null;
    }

    @Override
    public TransportMeans saveMeans(TransportMeans means) {
        int i = meansMapper.saveMeans(means);
        if (i>0)
            means.setTmId(meansMapper.findTmId());
        return means;
    }
}
