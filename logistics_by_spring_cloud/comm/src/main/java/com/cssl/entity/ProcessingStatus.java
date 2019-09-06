package com.cssl.entity;

import java.io.Serializable;

/**
* <p>
    * 记录投诉的处理状态，投诉状态信息表
    * </p>
*
* @author Devil
* @since 2019-09-03
*/
    public class ProcessingStatus implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer psId;

    private String psContext;

        public Integer getPsId() {
        return psId;
        }

            public void setPsId(Integer psId) {
        this.psId = psId;
        }
        public String getPsContext() {
        return psContext;
        }

            public void setPsContext(String psContext) {
        this.psContext = psContext;
        }

    @Override
    public String toString() {
    return "com.cssl.entity.ProcessingStatus{" +
            "psId=" + psId +
            ", psContext=" + psContext +
    "}";
    }
}
