package com.cssl.entity;

    import java.io.Serializable;

/**
* <p>
    * 记录物流状态信息，物流状态表
    * </p>
*
* @author Devil
* @since 2019-09-03
*/
    public class LogisticsStatus implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer lsId;

    private String lsContext;

        public Integer getLsId() {
        return lsId;
        }

            public void setLsId(Integer lsId) {
        this.lsId = lsId;
        }
        public String getLsContext() {
        return lsContext;
        }

            public void setLsContext(String lsContext) {
        this.lsContext = lsContext;
        }

    @Override
    public String toString() {
    return "LogisticsStatus{" +
            "lsId=" + lsId +
            ", lsContext=" + lsContext +
    "}";
    }
}
