package com.cssl.entity;

import java.io.Serializable;

/**
* <p>
    * 记录物件的类型，物件类型信息表
    * </p>
*
* @author Devil
* @since 2019-09-03
*/
    public class ItemType implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer itId;

    private String itName;

        public Integer getItId() {
        return itId;
        }

            public void setItId(Integer itId) {
        this.itId = itId;
        }
        public String getItName() {
        return itName;
        }

            public void setItName(String itName) {
        this.itName = itName;
        }

    @Override
    public String toString() {
    return "com.cssl.entity.ItemType{" +
            "itId=" + itId +
            ", itName=" + itName +
    "}";
    }
}
