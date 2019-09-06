package com.cssl.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
* <p>
    * 记录运输类型，速度，支出，运输方式表
    * </p>
*
* @author Devil
* @since 2019-09-03
*/
    public class TransportMeans implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer tmId;

    private LocalDateTime tmGmtCreate;

    private LocalDateTime tmGmtModified;

    private Integer tmSpeed;

    private BigDecimal tmExpenditure;

    private String tmType;

        public Integer getTmId() {
        return tmId;
        }

            public void setTmId(Integer tmId) {
        this.tmId = tmId;
        }
        public LocalDateTime getTmGmtCreate() {
        return tmGmtCreate;
        }

            public void setTmGmtCreate(LocalDateTime tmGmtCreate) {
        this.tmGmtCreate = tmGmtCreate;
        }
        public LocalDateTime getTmGmtModified() {
        return tmGmtModified;
        }

            public void setTmGmtModified(LocalDateTime tmGmtModified) {
        this.tmGmtModified = tmGmtModified;
        }
        public Integer getTmSpeed() {
        return tmSpeed;
        }

            public void setTmSpeed(Integer tmSpeed) {
        this.tmSpeed = tmSpeed;
        }
        public BigDecimal getTmExpenditure() {
        return tmExpenditure;
        }

            public void setTmExpenditure(BigDecimal tmExpenditure) {
        this.tmExpenditure = tmExpenditure;
        }
        public String getTmType() {
        return tmType;
        }

            public void setTmType(String tmType) {
        this.tmType = tmType;
        }

    @Override
    public String toString() {
    return "com.cssl.entity.TransportMeans{" +
            "tmId=" + tmId +
            ", tmGmtCreate=" + tmGmtCreate +
            ", tmGmtModified=" + tmGmtModified +
            ", tmSpeed=" + tmSpeed +
            ", tmExpenditure=" + tmExpenditure +
            ", tmType=" + tmType +
    "}";
    }
}
