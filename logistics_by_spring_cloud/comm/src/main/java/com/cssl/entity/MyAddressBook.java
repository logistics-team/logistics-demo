package com.cssl.entity;

    import java.io.Serializable;

/**
* <p>
    * 记录收件地址和寄件地址，地址薄信息表
    * </p>
*
* @author Devil
* @since 2019-09-03
*/
    public class MyAddressBook implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer mabId;

    private Integer epId;

    private Integer ecId;

    private Integer eaId;

    private String mabAddress;

    private String mabPhone;

    private String mabIsdefault;

        public Integer getMabId() {
        return mabId;
        }

            public void setMabId(Integer mabId) {
        this.mabId = mabId;
        }
        public Integer getEpId() {
        return epId;
        }

            public void setEpId(Integer epId) {
        this.epId = epId;
        }
        public Integer getEcId() {
        return ecId;
        }

            public void setEcId(Integer ecId) {
        this.ecId = ecId;
        }
        public Integer getEaId() {
        return eaId;
        }

            public void setEaId(Integer eaId) {
        this.eaId = eaId;
        }
        public String getMabAddress() {
        return mabAddress;
        }

            public void setMabAddress(String mabAddress) {
        this.mabAddress = mabAddress;
        }
        public String getMabPhone() {
        return mabPhone;
        }

            public void setMabPhone(String mabPhone) {
        this.mabPhone = mabPhone;
        }
        public String getMabIsdefault() {
        return mabIsdefault;
        }

            public void setMabIsdefault(String mabIsdefault) {
        this.mabIsdefault = mabIsdefault;
        }

    @Override
    public String toString() {
    return "MyAddressBook{" +
            "mabId=" + mabId +
            ", epId=" + epId +
            ", ecId=" + ecId +
            ", eaId=" + eaId +
            ", mabAddress=" + mabAddress +
            ", mabPhone=" + mabPhone +
            ", mabIsdefault=" + mabIsdefault +
    "}";
    }
}
