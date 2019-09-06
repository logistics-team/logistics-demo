package com.cssl.lc.mapper;

import com.cssl.entity.ExpressUser;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface Express_userDao {
    @Insert("insert into Express_user  values (0,#{eu_gmt_create},#{eu_gmt_modified},#{eu_receipt_name},\n"+
            "  #{ep_receipt_id},#{ec_receipt_id},#{ea_receipt_id},#{eu_receipt_phone},#{eu_sender_name}," +
            "#{ep_sender_id},#{ec_sender_id},#{ea_sender_id},#{eu_sender_phone},#{eg_id})")
    int saveExpress_user(ExpressUser expressUser);
    @Select("SELECT `eu_id`,`eu_gmt_create`,`eu_gmt_modified`,`eu_receipt_name`,`ep_receipt_id`,`ec_receipt_id`,`ea_receipt_id`,`eu_receipt_phone`,`eu_sender_name`,`ep_sender_id`,`ec_sender_id`,`ea_sender_id`,`eu_sender_phone`,`eg_id` FROM `express_user` WHERE `eu_id`=#{uId}")
    ExpressUser showUserById(Integer uId);
}
