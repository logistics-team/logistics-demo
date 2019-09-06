package com.cssl.entity;

    import java.io.Serializable;

/**
* <p>
    * 记录权限类型，权限表
    * </p>
*
* @author Devil
* @since 2019-09-03
*/
    public class LogisticsPower implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer lpId;

    private String lpContext;

        public Integer getLpId() {
        return lpId;
        }

            public void setLpId(Integer lpId) {
        this.lpId = lpId;
        }
        public String getLpContext() {
        return lpContext;
        }

            public void setLpContext(String lpContext) {
        this.lpContext = lpContext;
        }

    @Override
    public String toString() {
    return "LogisticsPower{" +
            "lpId=" + lpId +
            ", lpContext=" + lpContext +
    "}";
    }
}
