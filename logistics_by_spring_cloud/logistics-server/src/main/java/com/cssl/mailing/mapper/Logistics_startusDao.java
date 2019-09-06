package com.cssl.mailing.mapper;

import com.cssl.entity.LogisticsStatus;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;


//@Mapper
public interface Logistics_startusDao {
    @Select("SELECT `ls_id`,`ls_context` FROM `logistics_status` WHERE `ls_id`=#{sId}")
    LogisticsStatus showLogisticsStatusById(Integer sId);
}
