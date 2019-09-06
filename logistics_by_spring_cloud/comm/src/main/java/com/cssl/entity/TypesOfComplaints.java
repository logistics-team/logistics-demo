package com.cssl.entity;

import java.io.Serializable;

/**
* <p>
    * 记录投诉的类型，投诉类型信息表
    * </p>
*
* @author Devil
* @since 2019-09-03
*/
    public class TypesOfComplaints implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer tocId;

    private String tocContext;

        public Integer getTocId() {
        return tocId;
        }

            public void setTocId(Integer tocId) {
        this.tocId = tocId;
        }
        public String getTocContext() {
        return tocContext;
        }

            public void setTocContext(String tocContext) {
        this.tocContext = tocContext;
        }

    @Override
    public String toString() {
    return "com.cssl.entity.TypesOfComplaints{" +
            "tocId=" + tocId +
            ", tocContext=" + tocContext +
    "}";
    }
}
