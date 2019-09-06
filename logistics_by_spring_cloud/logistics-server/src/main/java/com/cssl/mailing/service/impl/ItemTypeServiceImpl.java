package com.cssl.mailing.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cssl.entity.*;
import com.cssl.mailing.mapper.ItemTypeMapper;
import com.cssl.mailing.service.IItemTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 记录物件的类型，物件类型信息表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-04
 */
@Service
public class ItemTypeServiceImpl extends ServiceImpl<ItemTypeMapper, ItemType> implements IItemTypeService {

    @Autowired
    private ItemTypeMapper mapper;
    @Override
    public Integer getItIdByName(String goodsType) {
        return mapper.getItIdByName(goodsType);
    }
}
