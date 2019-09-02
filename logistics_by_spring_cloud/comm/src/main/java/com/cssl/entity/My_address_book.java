package com.cssl.entity;

    import java.io.Serializable;

/**
* <p>
    * 记录收件地址和寄件地址，地址薄信息表
    * </p>
*
* @author Devil
* @since 2019-09-02
*/
    public class My_address_book implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer mab_id;

    private Integer ep_id;

    private Integer ec_id;

    private Integer ea_id;

    private String mab_address;

    private String mab_phone;

    private String mab_isdefault;

        public Integer getMab_id() {
        return mab_id;
        }

            public void setMab_id(Integer mab_id) {
        this.mab_id = mab_id;
        }
        public Integer getEp_id() {
        return ep_id;
        }

            public void setEp_id(Integer ep_id) {
        this.ep_id = ep_id;
        }
        public Integer getEc_id() {
        return ec_id;
        }

            public void setEc_id(Integer ec_id) {
        this.ec_id = ec_id;
        }
        public Integer getEa_id() {
        return ea_id;
        }

            public void setEa_id(Integer ea_id) {
        this.ea_id = ea_id;
        }
        public String getMab_address() {
        return mab_address;
        }

            public void setMab_address(String mab_address) {
        this.mab_address = mab_address;
        }
        public String getMab_phone() {
        return mab_phone;
        }

            public void setMab_phone(String mab_phone) {
        this.mab_phone = mab_phone;
        }
        public String getMab_isdefault() {
        return mab_isdefault;
        }

            public void setMab_isdefault(String mab_isdefault) {
        this.mab_isdefault = mab_isdefault;
        }

    @Override
    public String toString() {
    return "My_address_book{" +
            "mab_id=" + mab_id +
            ", ep_id=" + ep_id +
            ", ec_id=" + ec_id +
            ", ea_id=" + ea_id +
            ", mab_address=" + mab_address +
            ", mab_phone=" + mab_phone +
            ", mab_isdefault=" + mab_isdefault +
    "}";
    }
}
