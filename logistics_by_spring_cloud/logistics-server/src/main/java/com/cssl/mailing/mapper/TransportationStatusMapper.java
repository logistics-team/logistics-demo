package com.cssl.mailing.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cssl.entity.TransportationStatus;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * <p>
 * 记录物件的运输位置状态，物流状态信息表 Mapper 接口
 * </p>
 *
 * @author Devil
 * @since 2019-09-04
 */
@Mapper
public interface TransportationStatusMapper extends BaseMapper<TransportationStatus> {

    int saveStatus(TransportationStatus status);
}
