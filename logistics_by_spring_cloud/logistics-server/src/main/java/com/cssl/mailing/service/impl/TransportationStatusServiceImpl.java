package com.cssl.mailing.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cssl.entity.TransportationStatus;
import com.cssl.mailing.mapper.TransportationStatusMapper;
import com.cssl.mailing.service.ITransportationStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 记录物件的运输位置状态，物流状态信息表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-04
 */
@Service
public class TransportationStatusServiceImpl extends ServiceImpl<TransportationStatusMapper, TransportationStatus> implements ITransportationStatusService {
    @Autowired
    private TransportationStatusMapper statusMapper;
    @Override
    public TransportationStatus saveStatus(TransportationStatus status) {
        int i = statusMapper.saveStatus(status);
        if (i>0)
            return status;
        return null;
    }
}
