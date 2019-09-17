package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

/**
 * <p>
 *
 * </p>
 *  地址薄与用户关系类
 * @author Devil
 * @since 2019-09-17
 */
public class AddressUserRela implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "aur_id", type = IdType.AUTO)
    private Integer aurId;

    private Integer luId;

    private Integer mabId;

    public Integer getAurId() {
        return aurId;
    }

    public void setAurId(Integer aurId) {
        this.aurId = aurId;
    }

    public Integer getLuId() {
        return luId;
    }

    public void setLuId(Integer luId) {
        this.luId = luId;
    }

    public Integer getMabId() {
        return mabId;
    }

    public void setMabId(Integer mabId) {
        this.mabId = mabId;
    }

    @Override
    public String toString() {
        return "AddressUserRela{" +
                "aurId=" + aurId +
                ", luId=" + luId +
                ", mabId=" + mabId +
                "}";
    }
}
