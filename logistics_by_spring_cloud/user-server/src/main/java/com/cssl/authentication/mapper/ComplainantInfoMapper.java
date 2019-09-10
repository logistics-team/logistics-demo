package com.cssl.authentication.mapper;

import com.cssl.entity.ComplainantInfo;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 * 记录投诉人信息，包含寄件人和收件人，投诉信息表 Mapper 接口
 * </p>
 *
 * @author Devil
 * @since 2019-09-07
 */
@Mapper
public interface ComplainantInfoMapper extends BaseMapper<ComplainantInfo> {

}
