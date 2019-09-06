package com.cssl.lc.mapper;

import com.cssl.entity.ExpressGoods;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface Express_goodsDao {
    @Insert("INSERT INTO `logistics`.`express_goods`(`eg_id`,`eg_gmt_create`,`it_id`,`weight`, `eg_appraised_price`, `eg_special_context`)VALUES(#{eg_id},#{eg_gmt_create},#{it_id},#{weight},#{eg_appraised_price},#{eg_special_context})")
    int saveGoods(ExpressGoods goods);
    @Select("SELECT `eg_id`,`it_id`,`weight`,`eg_appraised_price`,`eg_special_context` FROM `express_goods` where eg_id = #{gId}")
    ExpressGoods showExpressGoodById(@Param(value = "gId") Integer gId);
}
