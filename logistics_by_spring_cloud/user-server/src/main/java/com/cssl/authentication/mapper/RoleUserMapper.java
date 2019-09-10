package com.cssl.authentication.mapper;

import com.cssl.entity.RoleUser;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

/**
 * <p>
 * 关联用户和角色之间的关系，角色用户关联表 Mapper 接口
 * </p>
 *
 * @author Devil
 * @since 2019-09-07
 */
public interface RoleUserMapper extends BaseMapper<RoleUser> {

    @Select("select lr_id from role_user where lu_id=#{userId} ;")
    Integer getRoleIdByUserId(Integer userId);

    @Insert("insert into role_user (lr_id, lu_id) values (#{lrId} ,#{luId} );")
    int saveRoleUser(RoleUser roleUser);
}
