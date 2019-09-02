package com.cssl.entity;

    import java.io.Serializable;

/**
* <p>
    * 记录物件的类型，物件类型信息表
    * </p>
*
* @author Devil
* @since 2019-09-02
*/
    public class Item_type implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer it_id;

    private String it_name;

        public Integer getIt_id() {
        return it_id;
        }

            public void setIt_id(Integer it_id) {
        this.it_id = it_id;
        }
        public String getIt_name() {
        return it_name;
        }

            public void setIt_name(String it_name) {
        this.it_name = it_name;
        }

    @Override
    public String toString() {
    return "Item_type{" +
            "it_id=" + it_id +
            ", it_name=" + it_name +
    "}";
    }
}
