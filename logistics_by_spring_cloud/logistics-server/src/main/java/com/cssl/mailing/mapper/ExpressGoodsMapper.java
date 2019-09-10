package com.cssl.mailing.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cssl.entity.ExpressGoods;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Options;

/**
 * <p>
 * 记录每个物件的状态信息，物件信息表 Mapper 接口
 * </p>
 *
 * @author Devil
 * @since 2019-09-05
 */
public interface ExpressGoodsMapper extends BaseMapper<ExpressGoods> {

    @Insert("INSERT INTO `express_goods`(`eg_gmt_create`,`it_id`,`weight`,`eg_appraised_price`,`eg_special_context`)VALUES(#{egGmtCreate} ,#{itId},#{weight} ,#{egAppraisedPrice} ,#{egSpecialContext} )")
    int saveGoods(ExpressGoods goods);

    int findEgId();
}
