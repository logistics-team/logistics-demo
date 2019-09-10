package com.cssl.authentication.service.impl;

import com.cssl.entity.ComplainantInfo;
import com.cssl.authentication.mapper.ComplainantInfoMapper;
import com.cssl.authentication.service.IComplainantInfoService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 记录投诉人信息，包含寄件人和收件人，投诉信息表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-07
 */
@Service
public class ComplainantInfoServiceImpl extends ServiceImpl<ComplainantInfoMapper, ComplainantInfo> implements IComplainantInfoService {

}
