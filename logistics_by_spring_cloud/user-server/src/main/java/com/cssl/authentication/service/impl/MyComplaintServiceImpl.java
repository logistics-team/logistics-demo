package com.cssl.authentication.service.impl;

import com.cssl.entity.MyComplaint;
import com.cssl.authentication.mapper.MyComplaintMapper;
import com.cssl.authentication.service.IMyComplaintService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 记录个人对物流不满的投诉，投诉信息表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-07
 */
@Service
public class MyComplaintServiceImpl extends ServiceImpl<MyComplaintMapper, MyComplaint> implements IMyComplaintService {

}
