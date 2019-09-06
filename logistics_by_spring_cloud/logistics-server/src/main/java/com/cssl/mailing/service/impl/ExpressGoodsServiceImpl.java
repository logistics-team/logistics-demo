package com.cssl.mailing.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cssl.entity.ExpressGoods;
import com.cssl.mailing.mapper.ExpressGoodsMapper;
import com.cssl.mailing.service.IExpressGoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 记录每个物件的状态信息，物件信息表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-05
 */
@Service
public class ExpressGoodsServiceImpl extends ServiceImpl<ExpressGoodsMapper, ExpressGoods> implements IExpressGoodsService {

    @Autowired
    private ExpressGoodsMapper goodsMapper;
    @Override
    public ExpressGoods saveGoods(ExpressGoods goods) {
        int googs = goodsMapper.saveGoods(goods);
        if (googs>0){
            goods.setEgId(goodsMapper.findEgId());
        }
        return goods;
    }
}
