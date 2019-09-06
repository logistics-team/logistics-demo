package com.cssl.lc.mapper;

import com.cssl.entity.ItemType;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface Item_typeDao {
    @Select("SELECT `it_id`,`it_name` FROM `item_type` where it_id=#{tId} ")
    ItemType showTypeById(Integer tId);

}
