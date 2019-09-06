package com.cssl.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
* <p>
    * 记录寄件人信息与收件人信息，收寄件人信息表
    * </p>
*
* @author Devil
* @since 2019-09-03
*/
    public class ExpressUser implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer euId;

    private LocalDateTime euGmtCreate;

    private LocalDateTime euGmtModified;

    private String euReceiptName;

    private Integer epReceiptId;

    private Integer ecReceiptId;

    private Integer eaReceiptId;

    private String euReceiptPhone;

    private String euSenderName;

    private Integer epSenderId;

    private Integer ecSenderId;

    private Integer eaSenderId;

    private String euSenderPhone;

    private Integer egId;

        public Integer getEuId() {
        return euId;
        }

            public void setEuId(Integer euId) {
        this.euId = euId;
        }
        public LocalDateTime getEuGmtCreate() {
        return euGmtCreate;
        }

            public void setEuGmtCreate(LocalDateTime euGmtCreate) {
        this.euGmtCreate = euGmtCreate;
        }
        public LocalDateTime getEuGmtModified() {
        return euGmtModified;
        }

            public void setEuGmtModified(LocalDateTime euGmtModified) {
        this.euGmtModified = euGmtModified;
        }
        public String getEuReceiptName() {
        return euReceiptName;
        }

            public void setEuReceiptName(String euReceiptName) {
        this.euReceiptName = euReceiptName;
        }
        public Integer getEpReceiptId() {
        return epReceiptId;
        }

            public void setEpReceiptId(Integer epReceiptId) {
        this.epReceiptId = epReceiptId;
        }
        public Integer getEcReceiptId() {
        return ecReceiptId;
        }

            public void setEcReceiptId(Integer ecReceiptId) {
        this.ecReceiptId = ecReceiptId;
        }
        public Integer getEaReceiptId() {
        return eaReceiptId;
        }

            public void setEaReceiptId(Integer eaReceiptId) {
        this.eaReceiptId = eaReceiptId;
        }
        public String getEuReceiptPhone() {
        return euReceiptPhone;
        }

            public void setEuReceiptPhone(String euReceiptPhone) {
        this.euReceiptPhone = euReceiptPhone;
        }
        public String getEuSenderName() {
        return euSenderName;
        }

            public void setEuSenderName(String euSenderName) {
        this.euSenderName = euSenderName;
        }
        public Integer getEpSenderId() {
        return epSenderId;
        }

            public void setEpSenderId(Integer epSenderId) {
        this.epSenderId = epSenderId;
        }
        public Integer getEcSenderId() {
        return ecSenderId;
        }

            public void setEcSenderId(Integer ecSenderId) {
        this.ecSenderId = ecSenderId;
        }
        public Integer getEaSenderId() {
        return eaSenderId;
        }

            public void setEaSenderId(Integer eaSenderId) {
        this.eaSenderId = eaSenderId;
        }
        public String getEuSenderPhone() {
        return euSenderPhone;
        }

            public void setEuSenderPhone(String euSenderPhone) {
        this.euSenderPhone = euSenderPhone;
        }
        public Integer getEgId() {
        return egId;
        }

            public void setEgId(Integer egId) {
        this.egId = egId;
        }

    @Override
    public String toString() {
    return "com.cssl.entity.ExpressUser{" +
            "euId=" + euId +
            ", euGmtCreate=" + euGmtCreate +
            ", euGmtModified=" + euGmtModified +
            ", euReceiptName=" + euReceiptName +
            ", epReceiptId=" + epReceiptId +
            ", ecReceiptId=" + ecReceiptId +
            ", eaReceiptId=" + eaReceiptId +
            ", euReceiptPhone=" + euReceiptPhone +
            ", euSenderName=" + euSenderName +
            ", epSenderId=" + epSenderId +
            ", ecSenderId=" + ecSenderId +
            ", eaSenderId=" + eaSenderId +
            ", euSenderPhone=" + euSenderPhone +
            ", egId=" + egId +
    "}";
    }
}
