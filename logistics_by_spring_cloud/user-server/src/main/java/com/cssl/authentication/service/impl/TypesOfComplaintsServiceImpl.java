package com.cssl.authentication.service.impl;

import com.cssl.entity.TypesOfComplaints;
import com.cssl.authentication.mapper.TypesOfComplaintsMapper;
import com.cssl.authentication.service.ITypesOfComplaintsService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 记录投诉的类型，投诉类型信息表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-07
 */
@Service
public class TypesOfComplaintsServiceImpl extends ServiceImpl<TypesOfComplaintsMapper, TypesOfComplaints> implements ITypesOfComplaintsService {

}
