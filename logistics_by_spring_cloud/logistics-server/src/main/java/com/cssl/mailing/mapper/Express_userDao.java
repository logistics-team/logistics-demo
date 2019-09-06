package com.cssl.mailing.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cssl.entity.ExpressUser;
import com.cssl.entity.ItemType;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface Express_userDao extends BaseMapper<ExpressUser> {
    @Insert("insert into Express_user  values (0,#{eu_gmt_create},#{eu_gmt_modified},#{eu_receipt_name},\n"+
            "  #{ep_receipt_id},#{ec_receipt_id},#{ea_receipt_id},#{eu_receipt_phone},#{eu_sender_name}," +

            "#{ep_sender_id},#{ec_sender_id},#{ea_sender_id},#{eu_sender_phone})")
            "#{ep_sender_id},#{ec_sender_id},#{ea_sender_id},#{eu_sender_phone},#{eg_id})")

    int saveExpress_user(ExpressUser expressUser);

    @Select("select * from express_user")
    List<ExpressUser> find();


    @Select("select * from item_type")
    List<ItemType> findIt();


    List<ExpressUser> findUserByWhere();


}
