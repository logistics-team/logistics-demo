package com.cssl.authentication.mapper;

import com.cssl.entity.LogisticsUser;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

/**
 * <p>
 * 提供一个用户登录和注册，管理进入后台的信息，用户登录信息表 Mapper 接口
 * </p>
 *
 * @author Devil
 * @since 2019-09-07
 */
@Mapper
public interface LogisticsUserMapper extends BaseMapper<LogisticsUser> {

    @Select("select lu_id from logistics_user where lu_phone = #{userPhone} ;")
    Integer getIdByPhone(String userPhone);

    @Select("select lu_password from logistics_user where lu_username = #{username} ;")
    String getPasswordByName(String username);

    @Select("select lu_password from logistics_user where lu_phone = #{userPhone} ;")
    String getPasswordByPhone(String userPhone);


    @Select("select lu_id from logistics_user where lu_username = #{username} ;")
    Integer getIdByUsername(String username);

    @Select("select lu_isblacklist from logistics_user where lu_username = #{nameOrPhone} ")
    String isBackListByUsername(String nameOrPhone);

    @Select("select lu_isblacklist from logistics_user where lu_phone = #{nameOrPhone} ")
    String isBackListByUserPhone(String nameOrPhone);

    @Select("select count(0) from logistics_user where lu_username = #{usernameOrPhone} ;")
    int isRedundantByUsername(String usernameOrPhone);

    @Select("select count(0) from logistics_user where lu_phone = #{usernameOrPhone} ;")
    int isRedundantByPhone(String usernameOrPhone);

    @Insert("insert into logistics_user (lu_gmt_create, lu_password, lu_phone) values (#{luGmtCreate} ,#{luPassword} ,#{luPhone} );")
    int saveLogisticsUser(LogisticsUser logisticsUser);

    /**
     *
     * @return  此次生成的ID
     */
    @Select("select max(lu_id) from logistics_user")
    Integer findMaxId();
}
