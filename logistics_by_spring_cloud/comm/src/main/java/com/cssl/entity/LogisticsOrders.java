package com.cssl.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

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

    private String tsId;

    private BigDecimal loCharge;

    private Integer tmId;

    private ExpressUser expressUser;//收寄人信息表

    private ExpressGoods expressGoods;//快递物件表

    private ItemType itemType;//物件类型表

    private LogisticsStatus logisticsStatus;//订单状态表

    private TransportMeans transportMeans;//运输方式

    private ExpressProvincesCityAreas expressProvincesCityAreas;//地点表

    private TransportationStatus transportationStatus;//运单表

    public TransportationStatus getTransportationStatus() {
        return transportationStatus;
    }

    public void setTransportationStatus(TransportationStatus transportationStatus) {
        this.transportationStatus = transportationStatus;
    }

    public Integer getTmId() {
        return tmId;
    }

    public void setTmId(Integer tmId) {
        this.tmId = tmId;
    }

    public ExpressProvincesCityAreas getExpressProvincesCityAreas() {
        return expressProvincesCityAreas;
    }

    public void setExpressProvincesCityAreas(ExpressProvincesCityAreas expressProvincesCityAreas) {
        this.expressProvincesCityAreas = expressProvincesCityAreas;
    }

    public TransportMeans getTransportMeans() {
        return transportMeans;
    }

    public void setTransportMeans(TransportMeans transportMeans) {
        this.transportMeans = transportMeans;
    }

    public ExpressUser getExpressUser() {
        return expressUser;
    }

    public void setExpressUser(ExpressUser expressUser) {
        this.expressUser = expressUser;
    }

    public ExpressGoods getExpressGoods() {
        return expressGoods;
    }

    public void setExpressGoods(ExpressGoods expressGoods) {
        this.expressGoods = expressGoods;
    }

    public ItemType getItemType() {
        return itemType;
    }

    public void setItemType(ItemType itemType) {
        this.itemType = itemType;
    }

    public LogisticsStatus getLogisticsStatus() {
        return logisticsStatus;
    }

    public void setLogisticsStatus(LogisticsStatus logisticsStatus) {
        this.logisticsStatus = logisticsStatus;
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

    public String getTsId() {
        return tsId;
    }

    public void setTsId(String tsId) {
        this.tsId = tsId;
    }

    public BigDecimal getLoCharge() {
        return loCharge;
    }

    public void setLoCharge(BigDecimal loCharge) {
        this.loCharge = loCharge;
    }

    @Override
    public String toString() {
        return "LogisticsOrders{" +
                "loId=" + loId +
                ", loGmtCreate=" + loGmtCreate +
                ", loGmtModified=" + loGmtModified +
                ", egId=" + egId +
                ", euId=" + euId +
                ", tsId=" + tsId +
                ", loCharge=" + loCharge +
                "}";
    }
}
