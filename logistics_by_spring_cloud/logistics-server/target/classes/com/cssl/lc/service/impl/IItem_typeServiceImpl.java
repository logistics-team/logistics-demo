package com.cssl.lc.service.impl;

import com.cssl.entity.ItemType;
import com.cssl.lc.mapper.Item_typeDao;
import com.cssl.lc.service.IItem_typeService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class IItem_typeServiceImpl implements IItem_typeService {
    @Resource
    Item_typeDao typeDao;
    @Override
    public ItemType showTypeById(Integer tId) {
        return typeDao.showTypeById(tId);
    }
}
