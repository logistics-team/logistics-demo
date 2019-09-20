package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

/**
 * <p>
 *用户与订单关系表
 * </p>
 *
 * @author Devil
 * @since 2019-09-19
 */
public class OrderUserRela implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "our_id", type = IdType.AUTO)
    private Integer ourId;

    private String loId;

    private Integer luId;

    public Integer getOurId() {
        return ourId;
    }

    public void setOurId(Integer ourId) {
        this.ourId = ourId;
    }

    public String getLoId() {
        return loId;
    }

    public void setLoId(String loId) {
        this.loId = loId;
    }

    public Integer getLuId() {
        return luId;
    }

    public void setLuId(Integer luId) {
        this.luId = luId;
    }

    @Override
    public String toString() {
        return "OrderUserRela{" +
                "ourId=" + ourId +
                ", loId=" + loId +
                ", luId=" + luId +
                "}";
    }
}
