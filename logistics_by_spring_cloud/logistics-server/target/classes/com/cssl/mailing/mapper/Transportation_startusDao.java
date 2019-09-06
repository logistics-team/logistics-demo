package com.cssl.mailing.mapper;

import com.cssl.entity.TransportationStatus;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
///@Mapper
public interface Transportation_startusDao {
    @Select("SELECT `ts_id`,`ts_gmt_create`,`ts_gmt_modified`,`ls_id`,`ep_id`,`ec_id`,`ea_id`,`tm_id` FROM `transportation_status` where `ts_id`=#{ts_id}")
    TransportationStatus showTransportationStatusById(Integer ts_id);
}
