package com.cssl.mailing.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cssl.entity.TransportMeans;
import com.cssl.entity.TransportationStatus;

/**
 * <p>
 * 记录运输类型，速度，支出，运输方式表 服务类
 * </p>
 *
 * @author Devil
 * @since 2019-09-04
 */
public interface ITransportMeansService extends IService<TransportMeans> {

    TransportationStatus generateWaybill();

    TransportMeans saveMeans(TransportMeans means);
}
