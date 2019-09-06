package com.cssl.lc.service.impl;

import com.cssl.entity.ExpressGoods;
import com.cssl.entity.ItemType;
import com.cssl.lc.mapper.Express_goodsDao;
import com.cssl.lc.mapper.Item_typeDao;
import com.cssl.lc.service.Express_goodsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class Express_goodsServiceImpl implements Express_goodsService {
    @Resource
    private Express_goodsDao goodsDao;
    //类型表
    @Resource
    private Item_typeDao itemTypeDao;

    public int saveGoods(ExpressGoods goods) {
        if (goods==null){
            return 0;
        }
        return goodsDao.saveGoods(goods);
    }
    //查询类型
    @Override
    public ExpressGoods showExpressGoodsById(Integer gId) {
        ExpressGoods express_goods = goodsDao.showExpressGoodById(gId);
        ItemType item_type = itemTypeDao.showTypeById(express_goods.getItId());
        express_goods.setIt(item_type);
        System.out.println("----------------------------");
        System.out.println(express_goods==null);
        return express_goods;

    }
}
