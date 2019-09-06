package com.cssl.lc.mapper;

import com.cssl.entity.TransportMeans;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface Transport_meansDao {
    @Select("SELECT `tm_id`,`tm_gmt_create`,`tm_gmt_modified`,`tm_speed`,`tm_expenditure`,`tm_type` FROM `transport_means` WHERE `tm_id`=#{mId}")
    TransportMeans showTransportMeansById(Integer mId);
}
