package com.cssl.mailing.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cssl.entity.ExpressProvincesCityAreas;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * <p>
 * 记录中国所有省市县信息，省市县表 Mapper 接口
 * </p>
 *
 * @author Devil
 * @since 2019-09-04
 */
@Mapper
public interface ExpressProvincesCityAreasMapper extends BaseMapper<ExpressProvincesCityAreas> {

//    @Select("select epca_id,epca_name from express_provinces_city_areas;")
    List<ExpressProvincesCityAreas> getJson();
    //查找所有父级ID
    @Select("select epca_id,epca_name from express_provinces_city_areas where epca_level in (1)")
    List<ExpressProvincesCityAreas> getParent();
    //查找详细
    @Select("select epca_id,epca_name from express_provinces_city_areas where parent_id in (#{parent}) ")
    List<ExpressProvincesCityAreas> getByParent(Integer parent);

    Integer getProvinceIdByName(String province);

    Integer getCityIdByName(String city);

    Integer getAreasIdByName(String areas);
}
