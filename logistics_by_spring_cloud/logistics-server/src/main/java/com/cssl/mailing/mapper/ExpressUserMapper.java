package com.cssl.mailing.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cssl.entity.ExpressUser;
import org.apache.ibatis.annotations.Insert;

/**
 * <p>
 * 记录寄件人信息与收件人信息，收寄件人信息表 Mapper 接口
 * </p>
 *
 * @author Devil
 * @since 2019-09-05
 */
public interface ExpressUserMapper extends BaseMapper<ExpressUser> {

    Integer findEuId();

    int saveUser(ExpressUser user);
}
