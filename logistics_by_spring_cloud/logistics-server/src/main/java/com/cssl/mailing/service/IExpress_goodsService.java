package com.cssl.mailing.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cssl.entity.ExpressGoods;

public interface IExpress_goodsService extends IService<ExpressGoods> {
    int saveGoods(ExpressGoods goods);
}
