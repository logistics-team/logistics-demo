package com.cssl.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * <p>
 * 记录物件的运输位置状态，物流状态信息表
 * </p>
 *
 * @author Devil
 * @since 2019-09-03
 */
public class TransportationStatus implements Serializable {

    private static final long serialVersionUID = 1L;

    private String tsId;

    private LocalDateTime tsGmtCreate;

    private LocalDateTime tsGmtModified;

    private Integer lsId;

    private Integer epId;

    private Integer ecId;

    private Integer eaId;

    private String loId;

    private Integer countId;

    public Integer getCountId() {
        return countId;
    }

    public void setCountId(Integer countId) {
        this.countId = countId;
    }

    public String getTsId() {
        return tsId;
    }

    public void setTsId(String tsId) {
        this.tsId = tsId;
    }

    public LocalDateTime getTsGmtCreate() {
        return tsGmtCreate;
    }

    public void setTsGmtCreate(LocalDateTime tsGmtCreate) {
        this.tsGmtCreate = tsGmtCreate;
    }

    public LocalDateTime getTsGmtModified() {
        return tsGmtModified;
    }

    public void setTsGmtModified(LocalDateTime tsGmtModified) {
        this.tsGmtModified = tsGmtModified;
    }

    public Integer getLsId() {
        return lsId;
    }

    public void setLsId(Integer lsId) {
        this.lsId = lsId;
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


    public String getLoId() {
        return loId;
    }

    public void setLoId(String loId) {
        this.loId = loId;
    }

    public TransportationStatus() {
    }

    public TransportationStatus(String tsId, LocalDateTime tsGmtCreate, LocalDateTime tsGmtModified, Integer lsId, Integer epId, Integer ecId, Integer eaId, String loId) {
        this.tsId = tsId;
        this.tsGmtCreate = tsGmtCreate;
        this.tsGmtModified = tsGmtModified;
        this.lsId = lsId;
        this.epId = epId;
        this.ecId = ecId;
        this.eaId = eaId;
        this.loId = loId;
    }

    @Override
    public String toString() {
        return "TransportationStatus{" +
                "tsId='" + tsId + '\'' +
                ", tsGmtCreate=" + tsGmtCreate +
                ", tsGmtModified=" + tsGmtModified +
                ", lsId=" + lsId +
                ", epId=" + epId +
                ", ecId=" + ecId +
                ", eaId=" + eaId +
                ", loId='" + loId + '\'' +
                '}';
    }
}
