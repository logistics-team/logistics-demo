package com.cssl.entity;

    import java.io.Serializable;

/**
* <p>
    * 记录投诉的类型，投诉类型信息表
    * </p>
*
* @author Devil
* @since 2019-09-02
*/
    public class Types_of_complaints implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer toc_id;

    private String toc_context;

        public Integer getToc_id() {
        return toc_id;
        }

            public void setToc_id(Integer toc_id) {
        this.toc_id = toc_id;
        }
        public String getToc_context() {
        return toc_context;
        }

            public void setToc_context(String toc_context) {
        this.toc_context = toc_context;
        }

    @Override
    public String toString() {
    return "Types_of_complaints{" +
            "toc_id=" + toc_id +
            ", toc_context=" + toc_context +
    "}";
    }
}
