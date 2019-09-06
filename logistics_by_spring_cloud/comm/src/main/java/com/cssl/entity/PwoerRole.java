package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

/**
* <p>
    * 关联权限与用户之间的关系，权限用户关联表
    * </p>
*
* @author Devil
* @since 2019-09-03
*/
    public class PwoerRole implements Serializable {

    private static final long serialVersionUID = 1L;

            @TableId(value = "pr_id", type = IdType.AUTO)
    private Integer prId;

    private Integer lpId;

    private Integer lrId;

        public Integer getPrId() {
        return prId;
        }

            public void setPrId(Integer prId) {
        this.prId = prId;
        }
        public Integer getLpId() {
        return lpId;
        }

            public void setLpId(Integer lpId) {
        this.lpId = lpId;
        }
        public Integer getLrId() {
        return lrId;
        }

            public void setLrId(Integer lrId) {
        this.lrId = lrId;
        }

    @Override
    public String toString() {
    return "com.cssl.entity.PwoerRole{" +
            "prId=" + prId +
            ", lpId=" + lpId +
            ", lrId=" + lrId +
    "}";
    }
}
