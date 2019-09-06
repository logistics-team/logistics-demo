package com.cssl.entity;

import java.io.Serializable;

/**
* <p>
    * 记录角色类型，角色表
    * </p>
*
* @author Devil
* @since 2019-09-03
*/
    public class LogisticsRose implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer lrId;

    private String lrName;

        public Integer getLrId() {
        return lrId;
        }

            public void setLrId(Integer lrId) {
        this.lrId = lrId;
        }
        public String getLrName() {
        return lrName;
        }

            public void setLrName(String lrName) {
        this.lrName = lrName;
        }

    @Override
    public String toString() {
    return "com.cssl.entity.LogisticsRose{" +
            "lrId=" + lrId +
            ", lrName=" + lrName +
    "}";
    }
}
