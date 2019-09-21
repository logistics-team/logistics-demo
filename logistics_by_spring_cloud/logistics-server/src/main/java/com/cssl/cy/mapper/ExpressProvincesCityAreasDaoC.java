package com.cssl.cy.mapper;

import com.cssl.entity.ExpressProvincesCityAreas;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
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

    /**
     * 查按照关键字或者id询子节点
     * @param condition
     * @param id
     * @return
     */
    //SELECT * FROM express_provinces_city_areas WHERE 1=1 AND (parent_id IN (
    //SELECT epca_id FROM express_provinces_city_areas WHERE (epca_id = 430000 OR parent_id = 430000 )
    //) OR epca_id = 430000) AND epca_name LIKE "%%"
    @Select("<script>"
            + "select * from express_provinces_city_areas where 1=1"
            +"<if  test=' id gt 0' >and "
            + "(parent_id IN ( SELECT epca_id FROM express_provinces_city_areas WHERE (epca_id = ${id} OR parent_id = ${id} )) OR epca_id = ${id} ) </if>"
            +"<if test='condition != \"\" and condition != null '>and epca_name like '%${condition}%'</if>"
            +"</script>")
        List<ExpressProvincesCityAreas> findChild(@Param("condition") String condition, @Param("id") int id);
}
