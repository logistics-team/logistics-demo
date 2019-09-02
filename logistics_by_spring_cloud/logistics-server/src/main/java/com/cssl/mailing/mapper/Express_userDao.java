package com.cssl.mailing.mapper;

import com.cssl.entity.Express_user;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface Express_userDao {
    @Insert("insert into Express_user  values (0,#{eu_gmt_create},#{eu_gmt_modified},#{eu_receipt_name},\n"+
            "  #{ep_receipt_id},#{ec_receipt_id},#{ea_receipt_id},#{eu_receipt_phone},#{eu_sender_name}," +
            "#{ep_sender_id},#{ec_sender_id},#{ea_sender_id},#{eu_sender_phone},#{eg_id})")
    int saveExpress_user(Express_user expressUser);
}
