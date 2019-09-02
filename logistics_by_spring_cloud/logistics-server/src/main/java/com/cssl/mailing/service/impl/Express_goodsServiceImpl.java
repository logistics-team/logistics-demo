package com.cssl.mailing.service.impl;

import com.cssl.entity.Express_goods;
import com.cssl.mailing.mapper.Express_goodsDao;
import com.cssl.mailing.service.IExpress_goodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Express_goodsServiceImpl implements IExpress_goodsService {
    @Autowired
    private Express_goodsDao dao;

    public int saveGoods(Express_goods goods) {
        if (goods==null){
            return 0;
        }
        return dao.saveGoods(goods);
    }
}
