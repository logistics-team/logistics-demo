package com.cssl.entity;

    import java.io.Serializable;

/**
* <p>
    * 记录投诉人信息，包含寄件人和收件人，投诉信息表
    * </p>
*
* @author Devil
* @since 2019-09-02
*/
    public class Complainant_info implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer ci_id;

    private String ci_name;

    private String ci_phone;

    private String ci_address;

        public Integer getCi_id() {
        return ci_id;
        }

            public void setCi_id(Integer ci_id) {
        this.ci_id = ci_id;
        }
        public String getCi_name() {
        return ci_name;
        }

            public void setCi_name(String ci_name) {
        this.ci_name = ci_name;
        }
        public String getCi_phone() {
        return ci_phone;
        }

            public void setCi_phone(String ci_phone) {
        this.ci_phone = ci_phone;
        }
        public String getCi_address() {
        return ci_address;
        }

            public void setCi_address(String ci_address) {
        this.ci_address = ci_address;
        }

    @Override
    public String toString() {
    return "Complainant_info{" +
            "ci_id=" + ci_id +
            ", ci_name=" + ci_name +
            ", ci_phone=" + ci_phone +
            ", ci_address=" + ci_address +
    "}";
    }
}
