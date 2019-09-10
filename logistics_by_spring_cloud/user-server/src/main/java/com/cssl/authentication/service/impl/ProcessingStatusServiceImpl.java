package com.cssl.authentication.service.impl;

import com.cssl.entity.ProcessingStatus;
import com.cssl.authentication.mapper.ProcessingStatusMapper;
import com.cssl.authentication.service.IProcessingStatusService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 记录投诉的处理状态，投诉状态信息表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-07
 */
@Service
public class ProcessingStatusServiceImpl extends ServiceImpl<ProcessingStatusMapper, ProcessingStatus> implements IProcessingStatusService {

}
