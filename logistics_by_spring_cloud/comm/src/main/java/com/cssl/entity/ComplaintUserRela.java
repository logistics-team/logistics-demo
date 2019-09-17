package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

/**
 * <p>
 *
 * </p>
 *投诉用户关系
 * @author Devil
 * @since 2019-09-17
 */
public class ComplaintUserRela implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "cur_id", type = IdType.AUTO)
    private Integer curId;

    private Integer luId;

    private Integer mcId;

    public Integer getCurId() {
        return curId;
    }

    public void setCurId(Integer curId) {
        this.curId = curId;
    }

    public Integer getLuId() {
        return luId;
    }

    public void setLuId(Integer luId) {
        this.luId = luId;
    }

    public Integer getMcId() {
        return mcId;
    }

    public void setMcId(Integer mcId) {
        this.mcId = mcId;
    }

    @Override
    public String toString() {
        return "ComplaintUserRela{" +
                "curId=" + curId +
                ", luId=" + luId +
                ", mcId=" + mcId +
                "}";
    }
}
