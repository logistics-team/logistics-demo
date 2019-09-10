package com.cssl.mailing.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cssl.entity.LogisticsOrders;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 * 记录订单详细信息，物流订单表 Mapper 接口
 * </p>
 *
 * @author Devil
 * @since 2019-09-04
 */
@Mapper
public interface LogisticsOrdersMapper extends BaseMapper<LogisticsOrders> {

}
