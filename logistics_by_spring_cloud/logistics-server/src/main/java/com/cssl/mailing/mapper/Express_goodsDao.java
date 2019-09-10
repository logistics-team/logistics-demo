package com.cssl.mailing.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cssl.entity.ExpressGoods;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface Express_goodsDao extends BaseMapper<ExpressGoods> {
    @Insert("INSERT INTO `logistics`.`express_goods`(`eg_id`,`eg_gmt_create`,`it_id`,`weight`, `eg_appraised_price`, `eg_special_context`)VALUES(#{eg_id},#{eg_gmt_create},#{it_id},#{weight},#{eg_appraised_price},#{eg_special_context})")
    int saveGoods(ExpressGoods goods);


}
