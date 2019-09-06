package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

/**
* <p>
    * 关联用户和角色之间的关系，角色用户关联表
    * </p>
*
* @author Devil
* @since 2019-09-03
*/
    public class RoleUser implements Serializable {

    private static final long serialVersionUID = 1L;

            @TableId(value = "ru_id", type = IdType.AUTO)
    private Integer ruId;

    private Integer lrId;

    private Integer luId;

        public Integer getRuId() {
        return ruId;
        }

            public void setRuId(Integer ruId) {
        this.ruId = ruId;
        }
        public Integer getLrId() {
        return lrId;
        }

            public void setLrId(Integer lrId) {
        this.lrId = lrId;
        }
        public Integer getLuId() {
        return luId;
        }

            public void setLuId(Integer luId) {
        this.luId = luId;
        }

    @Override
    public String toString() {
    return "com.cssl.entity.RoleUser{" +
            "ruId=" + ruId +
            ", lrId=" + lrId +
            ", luId=" + luId +
    "}";
    }
}
