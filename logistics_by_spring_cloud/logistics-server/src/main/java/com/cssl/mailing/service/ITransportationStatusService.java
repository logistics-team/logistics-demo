package com.cssl.mailing.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cssl.entity.TransportationStatus;

/**
 * <p>
 * 记录物件的运输位置状态，物流状态信息表 服务类
 * </p>
 *
 * @author Devil
 * @since 2019-09-04
 */
public interface ITransportationStatusService extends IService<TransportationStatus> {

    TransportationStatus saveStatus(TransportationStatus status);
}
