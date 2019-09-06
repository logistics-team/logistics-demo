package com.cssl.mailing.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cssl.entity.ItemType;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 记录物件的类型，物件类型信息表 Mapper 接口
 * </p>
 *
 * @author Devil
 * @since 2019-09-04
 */
@Mapper
public interface ItemTypeMapper extends BaseMapper<ItemType> {

    @Select("SELECT it_id FROM item_type WHERE it_name = #{goodsType} ")
    Integer getItIdByName(String goodsType);
}
