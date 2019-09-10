package com.cssl.mailing.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cssl.entity.LogisticsOrders;

import java.util.Map;

/**
 * <p>
 * 记录订单详细信息，物流订单表 服务类
 * </p>
 *
 * @author Devil
 * @since 2019-09-04
 */
public interface ILogisticsOrdersService extends IService<LogisticsOrders> {

    //订单生成
    LogisticsOrders generateOrders(Map<String,Object> map);

}
