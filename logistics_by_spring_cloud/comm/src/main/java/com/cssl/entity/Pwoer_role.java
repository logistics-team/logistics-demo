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
* @since 2019-09-02
*/
    public class Pwoer_role implements Serializable {

    private static final long serialVersionUID = 1L;

            @TableId(value = "pr_id", type = IdType.AUTO)
    private Integer pr_id;

    private Integer lp_id;

    private Integer lr_id;

        public Integer getPr_id() {
        return pr_id;
        }

            public void setPr_id(Integer pr_id) {
        this.pr_id = pr_id;
        }
        public Integer getLp_id() {
        return lp_id;
        }

            public void setLp_id(Integer lp_id) {
        this.lp_id = lp_id;
        }
        public Integer getLr_id() {
        return lr_id;
        }

            public void setLr_id(Integer lr_id) {
        this.lr_id = lr_id;
        }

    @Override
    public String toString() {
    return "Pwoer_role{" +
            "pr_id=" + pr_id +
            ", lp_id=" + lp_id +
            ", lr_id=" + lr_id +
    "}";
    }
}
