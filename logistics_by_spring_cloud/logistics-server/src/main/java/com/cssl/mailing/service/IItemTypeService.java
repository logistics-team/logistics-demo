package com.cssl.mailing.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cssl.entity.ItemType;

/**
 * <p>
 * 记录物件的类型，物件类型信息表 服务类
 * </p>
 *
 * @author Devil
 * @since 2019-09-04
 */
public interface IItemTypeService extends IService<ItemType> {

    Integer getItIdByName(String goodsType);
}
