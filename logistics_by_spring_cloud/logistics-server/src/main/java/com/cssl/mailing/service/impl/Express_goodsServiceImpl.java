package com.cssl.mailing.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cssl.entity.ExpressGoods;
import com.cssl.mailing.mapper.Express_goodsDao;
import com.cssl.mailing.service.IExpress_goodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Express_goodsServiceImpl extends ServiceImpl<Express_goodsDao, ExpressGoods> implements IExpress_goodsService {
    @Autowired
    private Express_goodsDao dao;

    public int saveGoods(ExpressGoods goods) {
        if (goods==null){
            return 0;
        }
        return dao.saveGoods(goods);
    }
}
