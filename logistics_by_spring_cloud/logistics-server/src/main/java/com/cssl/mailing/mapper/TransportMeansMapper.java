package com.cssl.mailing.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cssl.entity.TransportMeans;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 * 记录运输类型，速度，支出，运输方式表 Mapper 接口
 * </p>
 *
 * @author Devil
 * @since 2019-09-04
 */
@Mapper
public interface TransportMeansMapper extends BaseMapper<TransportMeans> {

    int saveMeans(TransportMeans means);

    Integer findTmId();
}
