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

    /**
     * 根据省名查询省Id
     * @param province
     * @return
     */
    Integer getProvinceIdByName(String province);

    /**
     * 根据市名查询市Id
     * @param city
     * @return
     */
    Integer getCityIdByName(String city);

    /**
     * 根据区县名查询区县ID
     * @param areas
     * @return
     */
    Integer getAreasIdByName(String areas);

    /**
     *根据省名查询市名和市ID
     * @param addr
     * @return
     */
    List<ExpressProvincesCityAreas> findAddrByParentName(String addr);

    /**
     * 查询所有省列表
     * @return
     */
    List<ExpressProvincesCityAreas> getProvinceList();

    List<ExpressProvincesCityAreas> getCityListByProvinceId(Integer provinceId);

    List<ExpressProvincesCityAreas> getAreasListByCityId(Integer cityId);

    CharSequence getCountyCode(String cityTem);

    @Select("select epca_name from express_provinces_city_areas where epca_id = #{countyCode} and epca_level = 3;")
    String getCountyName(String countyCode);

    @Select("select epca_name from express_provinces_city_areas where epca_id = #{cityCode} and epca_level = 2;")
    String getCityName(String cityCode);
}
