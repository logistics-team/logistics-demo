package com.cssl.authentication.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cssl.entity.LogisticsRose;
import org.apache.ibatis.annotations.Select;

/**
 * <p>
 * 记录角色类型，角色表 Mapper 接口
 * </p>
 *
 * @author Devil
 * @since 2019-09-07
 */
public interface LogisticsRoseMapper extends BaseMapper<LogisticsRose> {

    @Select("select * from logistics_rose where lr_id = #{roleId} ;")
    LogisticsRose getRoseById(Integer roleId);

    @Select("select lr_id from logistics_rose where lr_name = #{role} ")
    Integer findIdByRole(String role);
}
