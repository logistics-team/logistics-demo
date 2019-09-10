package com.cssl.authentication.service;

import com.cssl.entity.RoleUser;
import com.baomidou.mybatisplus.extension.service.IService;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

/**
 * <p>
 * 关联用户和角色之间的关系，角色用户关联表 服务类
 * </p>
 *
 * @author Devil
 * @since 2019-09-07
 */
public interface IRoleUserService extends IService<RoleUser> {


    Integer getRoleIdByUserId(Integer userId);


    int saveRoleUser(RoleUser roleUser);
}
