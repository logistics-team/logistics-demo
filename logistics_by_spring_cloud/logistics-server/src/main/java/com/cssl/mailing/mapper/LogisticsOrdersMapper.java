package com.cssl.mailing.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cssl.entity.LogisticsOrders;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

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
    //根据id查询所有的订单
    @Select("SELECT `lo_id`,`lo_gmt_create`,`lo_gmt_modified`,`eg_id`,`eu_id`,`ts_id`,`tm_id`  FROM `logistics_orders` where lo_id=#{loId}")
    List<LogisticsOrders> chaxun(@RequestParam(value = "loId") Integer loId);
    //查询所有的订单
    @Select("SELECT `lo_id`,`lo_gmt_create`,`lo_gmt_modified`,`eg_id`,`eu_id`,`ts_id`,`tm_id`  FROM `logistics_orders`")
    List<LogisticsOrders> chaxunOrders();
    //查询总数量
    Integer ordersCount();
    //查询订单状态showAllOrders
    List<LogisticsOrders> showAllOrders(@RequestParam(value = "lsId") Integer lsId);
}
