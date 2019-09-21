package com.cssl.vo;

import com.cssl.entity.TransportationStatus;

import java.time.LocalDateTime;

public class TransportationInfo extends TransportationStatus {
    private WaybillInfo data;

    public WaybillInfo getData() {
        return data;
    }

    public void setData(WaybillInfo data) {
        this.data = data;
    }

    public TransportationInfo() {
    }

    public TransportationInfo(String tsId, LocalDateTime tsGmtCreate, LocalDateTime tsGmtModified, Integer lsId, Integer epId, Integer ecId, Integer eaId, String loId, WaybillInfo data) {
        super(tsId, tsGmtCreate, tsGmtModified, lsId, epId, ecId, eaId, loId);
        this.data = data;
    }


}
