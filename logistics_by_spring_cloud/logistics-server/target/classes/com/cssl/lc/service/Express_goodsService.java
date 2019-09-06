package com.cssl.lc.service;

import com.cssl.entity.ExpressGoods;

public interface Express_goodsService {
    int saveGoods(ExpressGoods goods);
    //根据id查询快递物件表
    ExpressGoods showExpressGoodsById(Integer gId);
}
