package com.cssl.entity;

    import java.io.Serializable;

/**
* <p>
    * 记录角色类型，角色表
    * </p>
*
* @author Devil
* @since 2019-09-02
*/
    public class Logistics_rose implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer lr_id;

    private String lr_name;

        public Integer getLr_id() {
        return lr_id;
        }

            public void setLr_id(Integer lr_id) {
        this.lr_id = lr_id;
        }
        public String getLr_name() {
        return lr_name;
        }

            public void setLr_name(String lr_name) {
        this.lr_name = lr_name;
        }

    @Override
    public String toString() {
    return "Logistics_rose{" +
            "lr_id=" + lr_id +
            ", lr_name=" + lr_name +
    "}";
    }
}
