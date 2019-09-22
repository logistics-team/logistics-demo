package com.cssl.mailing.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cssl.entity.AddressUserRela;
import com.cssl.entity.ExpressProvincesCityAreas;
import com.cssl.entity.MyAddressBook;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

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

    @Select("select * from express_provinces_city_areas where parent_id = #{parentCode} ;")
    List<ExpressProvincesCityAreas> getAddressDataInfo(String parentCode);


    //新增用户地址
    @Insert("INSERT INTO `my_address_book`(`ep_id`,`ec_id`,`ea_id`,`mab_address`,`mab_phone`,`mab_isdefault`,`mab_is_receipt`,`mab_creator`,`mab_tag`)  values (#{provinceCode},#{cityCode},#{regionCode},#{address},#{phone},#{defaultType},#{addressType},#{name},#{tag})")
    Integer addAddress(Map<String,Object> map);

    //获取地址最近一次增长的id
    @Select("select max(mab_id) from  `my_address_book`")
    Integer selectId();
    //新增用户地址关联信息
    @Insert("insert into`address_user_rela`(`lu_id`,`mab_id`) values (#{userId},#{mabId})")
    Integer addUserAddress(Integer userId,Integer mabId);
    //查询用户地址表里面的地址id
    @Select("SELECT `aur_id`,`lu_id`,`mab_id` FROM  `address_user_rela` where `lu_id`=#{uid}")
    List<AddressUserRela> selectAllUserAddressById(Integer uid);
    //查询该用户地址
    List<MyAddressBook> showAllMyAddressById(Integer mId);
    //地址回显
    MyAddressBook echoData(Integer aId);
    //根据aId删除
    //地址表
    @Delete(" DELETE FROM `my_address_book` WHERE mab_id=#{aId} ")
    Integer deleteAddress(Integer aId);
    //用户地址关系表
    @Delete(" DELETE FROM `address_user_rela` WHERE mab_id=#{aId} ")
    Integer deleteUserAddress(Integer aId);
    //修改地址
    Integer updateAddress(Map<String,Object> map);

}
