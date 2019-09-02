package com.cssl.mailing.mapper;

import com.cssl.mailing.entity.Express_user;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface Express_userDao {

    int saveExpress_user(Express_user expressUser);
}
