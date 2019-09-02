package com.cssl.entity;

    import java.io.Serializable;

/**
* <p>
    * 记录权限类型，权限表
    * </p>
*
* @author Devil
* @since 2019-09-02
*/
    public class Logistics_power implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer lp_id;

    private String lp_context;

        public Integer getLp_id() {
        return lp_id;
        }

            public void setLp_id(Integer lp_id) {
        this.lp_id = lp_id;
        }
        public String getLp_context() {
        return lp_context;
        }

            public void setLp_context(String lp_context) {
        this.lp_context = lp_context;
        }

    @Override
    public String toString() {
    return "Logistics_power{" +
            "lp_id=" + lp_id +
            ", lp_context=" + lp_context +
    "}";
    }
}
