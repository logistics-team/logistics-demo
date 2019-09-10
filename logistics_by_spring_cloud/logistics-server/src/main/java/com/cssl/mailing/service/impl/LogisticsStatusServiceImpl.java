package com.cssl.mailing.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cssl.entity.LogisticsStatus;
import com.cssl.mailing.mapper.LogisticsStatusMapper;
import com.cssl.mailing.service.ILogisticsStatusService;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 记录物流状态信息，物流状态表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-04
 */
@Service
public class LogisticsStatusServiceImpl extends ServiceImpl<LogisticsStatusMapper, LogisticsStatus> implements ILogisticsStatusService {

}
