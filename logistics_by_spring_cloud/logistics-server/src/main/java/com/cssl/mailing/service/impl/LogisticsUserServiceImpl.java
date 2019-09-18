package com.cssl.mailing.service.impl;

import com.cssl.entity.LogisticsUser;
import com.cssl.mailing.mapper.LogisticsUserMapper;
import com.cssl.mailing.service.LogisticsUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Map;
@Service
public class LogisticsUserServiceImpl implements LogisticsUserService {
    @Autowired
    LogisticsUserMapper logisticsUserMapper;
//    `lu_gmt_modified`=#{},`lu_username`=#{},`lu_sex`=#{} where `lu_id`=#{}
    @Override
    public Integer updateUser(LogisticsUser logisticsUser) {
        return logisticsUserMapper.updateUser(logisticsUser);
    }
}
