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
* @since 2019-09-02
*/
    public class Role_user implements Serializable {

    private static final long serialVersionUID = 1L;

            @TableId(value = "ru_id", type = IdType.AUTO)
    private Integer ru_id;

    private Integer lr_id;

    private Integer lu_id;

        public Integer getRu_id() {
        return ru_id;
        }

            public void setRu_id(Integer ru_id) {
        this.ru_id = ru_id;
        }
        public Integer getLr_id() {
        return lr_id;
        }

            public void setLr_id(Integer lr_id) {
        this.lr_id = lr_id;
        }
        public Integer getLu_id() {
        return lu_id;
        }

            public void setLu_id(Integer lu_id) {
        this.lu_id = lu_id;
        }

    @Override
    public String toString() {
    return "Role_user{" +
            "ru_id=" + ru_id +
            ", lr_id=" + lr_id +
            ", lu_id=" + lu_id +
    "}";
    }
}
