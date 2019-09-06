package com.cssl.mailing.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cssl.entity.ExpressGoods;

/**
 * <p>
 * 记录每个物件的状态信息，物件信息表 服务类
 * </p>
 *
 * @author Devil
 * @since 2019-09-05
 */
public interface IExpressGoodsService extends IService<ExpressGoods> {

    ExpressGoods saveGoods(ExpressGoods goods);

}
