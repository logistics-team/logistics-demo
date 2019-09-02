package com.cssl.entity;

    import java.io.Serializable;

/**
* <p>
    * 记录投诉的处理状态，投诉状态信息表
    * </p>
*
* @author Devil
* @since 2019-09-02
*/
    public class Processing_status implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer ps_id;

    private String ps_context;

        public Integer getPs_id() {
        return ps_id;
        }

            public void setPs_id(Integer ps_id) {
        this.ps_id = ps_id;
        }
        public String getPs_context() {
        return ps_context;
        }

            public void setPs_context(String ps_context) {
        this.ps_context = ps_context;
        }

    @Override
    public String toString() {
    return "Processing_status{" +
            "ps_id=" + ps_id +
            ", ps_context=" + ps_context +
    "}";
    }
}
