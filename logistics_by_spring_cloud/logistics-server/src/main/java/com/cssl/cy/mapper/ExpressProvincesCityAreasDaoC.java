package com.cssl.cy.mapper;

import com.cssl.entity.ExpressProvincesCityAreas;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ExpressProvincesCityAreasDaoC {
    /**
     * 查询全部
     * @return List
     */
    @Select("SELECT * FROM express_provinces_city_areas ")
    List<ExpressProvincesCityAreas> findAll();

    /**
     * 按城市等级查询
     * @param level 城市等级
     * @return list
     */
    @Select("SELECT * FROM express_provinces_city_areas WHERE epca_level =#{level}")
    List<ExpressProvincesCityAreas> findByLevel(int level);

    /**
     * 按id查询
     * @param id 编号
     * @return list
     */
    @Select("SELECT * FROM express_provinces_city_areas WHERE epca_id = #{id}")
    ExpressProvincesCityAreas findByID(int id);


}
