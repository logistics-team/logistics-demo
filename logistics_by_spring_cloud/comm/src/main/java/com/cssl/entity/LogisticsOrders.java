package com.cssl.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * <p>
 * 记录订单详细信息，物流订单表
 * </p>
 *
 * @author Devil
 * @since 2019-09-03
 */
public class LogisticsOrders implements Serializable {

    private static final long serialVersionUID = 1L;

    private String loId;

    private LocalDateTime loGmtCreate;

    private LocalDateTime loGmtModified;

    private Integer egId;

    private Integer euId;

    private BigDecimal loCharge;

    private String tsId;

    private Integer tmId;

    public Integer getTmId() {
        return tmId;
    }

    public void setTmId(Integer tmId) {
        this.tmId = tmId;
    }

    public String getTsId() {
        return tsId;
    }

    public void setTsId(String tsId) {
        this.tsId = tsId;
    }

    public String getLoId() {
        return loId;
    }

    public void setLoId(String loId) {
        this.loId = loId;
    }

    public LocalDateTime getLoGmtCreate() {
        return loGmtCreate;
    }

    public void setLoGmtCreate(LocalDateTime loGmtCreate) {
        this.loGmtCreate = loGmtCreate;
    }

    public LocalDateTime getLoGmtModified() {
        return loGmtModified;
    }

    public void setLoGmtModified(LocalDateTime loGmtModified) {
        this.loGmtModified = loGmtModified;
    }

    public Integer getEgId() {
        return egId;
    }

    public void setEgId(Integer egId) {
        this.egId = egId;
    }

    public Integer getEuId() {
        return euId;
    }

    public void setEuId(Integer euId) {
        this.euId = euId;
    }


    public BigDecimal getLoCharge() {
        return loCharge;
    }

    public void setLoCharge(BigDecimal loCharge) {
        this.loCharge = loCharge;
    }

    public LogisticsOrders() {
    }

    public LogisticsOrders(String loId, LocalDateTime loGmtCreate, LocalDateTime loGmtModified, Integer egId, Integer euId, BigDecimal loCharge, String tsId, Integer tmId) {
        this.loId = loId;
        this.loGmtCreate = loGmtCreate;
        this.loGmtModified = loGmtModified;
        this.egId = egId;
        this.euId = euId;
        this.loCharge = loCharge;
        this.tsId = tsId;
        this.tmId = tmId;
    }

    @Override
    public String toString() {
        return "LogisticsOrders{" +
                "loId='" + loId + '\'' +
                ", loGmtCreate=" + loGmtCreate +
                ", loGmtModified=" + loGmtModified +
                ", egId=" + egId +
                ", euId=" + euId +
                ", loCharge=" + loCharge +
                ", tsId='" + tsId + '\'' +
                ", tmId=" + tmId +
                '}';
    }
}
