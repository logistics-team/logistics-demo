package com.cssl.entity;

import java.io.Serializable;
import java.util.List;

/**
 * <p>
 * 记录中国所有省市县信息，省市县表
 * </p>
 *
 * @author Devil
 * @since 2019-09-03
 */
public class ExpressProvincesCityAreas implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer epcaId;

    private String epcaName;

    private Integer parentId;

    private String epcaAbbreviation;

    private String epcaLevel;

    private String epcaCitycode;

    private Integer epcaNumber;

    private String epcaLng;

    private String epcaLat;

    private String epcaPinyin;

    private Boolean epcaCenter;

    private List<ExpressProvincesCityAreas> cityList;

    private List<ExpressProvincesCityAreas> areaList;

    public Integer getEpcaId() {
        return epcaId;
    }

    public void setEpcaId(Integer epcaId) {
        this.epcaId = epcaId;
    }

    public String getEpcaName() {
        return epcaName;
    }

    public void setEpcaName(String epcaName) {
        this.epcaName = epcaName;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public String getEpcaAbbreviation() {
        return epcaAbbreviation;
    }

    public void setEpcaAbbreviation(String epcaAbbreviation) {
        this.epcaAbbreviation = epcaAbbreviation;
    }

    public String getEpcaLevel() {
        return epcaLevel;
    }

    public void setEpcaLevel(String epcaLevel) {
        this.epcaLevel = epcaLevel;
    }

    public String getEpcaCitycode() {
        return epcaCitycode;
    }

    public void setEpcaCitycode(String epcaCitycode) {
        this.epcaCitycode = epcaCitycode;
    }

    public Integer getEpcaNumber() {
        return epcaNumber;
    }

    public void setEpcaNumber(Integer epcaNumber) {
        this.epcaNumber = epcaNumber;
    }

    public String getEpcaLng() {
        return epcaLng;
    }

    public void setEpcaLng(String epcaLng) {
        this.epcaLng = epcaLng;
    }

    public String getEpcaLat() {
        return epcaLat;
    }

    public void setEpcaLat(String epcaLat) {
        this.epcaLat = epcaLat;
    }

    public String getEpcaPinyin() {
        return epcaPinyin;
    }

    public void setEpcaPinyin(String epcaPinyin) {
        this.epcaPinyin = epcaPinyin;
    }

    public List<ExpressProvincesCityAreas> getCityList() {
        return cityList;
    }

    public void setCityList(List<ExpressProvincesCityAreas> cityList) {
        this.cityList = cityList;
    }

    public List<ExpressProvincesCityAreas> getAreaList() {
        return areaList;
    }

    public void setAreaList(List<ExpressProvincesCityAreas> areaList) {
        this.areaList = areaList;
    }

    public Boolean getEpcaCenter() {
        return epcaCenter;
    }

    public void setEpcaCenter(Boolean epcaCenter) {
        this.epcaCenter = epcaCenter;
    }

    public ExpressProvincesCityAreas() {
    }


    @Override
    public String toString() {
        return "ExpressProvincesCityAreas{" +
                "epcaId=" + epcaId +
                ", epcaName='" + epcaName + '\'' +
                ", parentId=" + parentId +
                ", epcaAbbreviation='" + epcaAbbreviation + '\'' +
                ", epcaLevel='" + epcaLevel + '\'' +
                ", epcaCitycode='" + epcaCitycode + '\'' +
                ", epcaNumber=" + epcaNumber +
                ", epcaLng='" + epcaLng + '\'' +
                ", epcaLat='" + epcaLat + '\'' +
                ", epcaPinyin='" + epcaPinyin + '\'' +
                ", epcaCenter=" + epcaCenter +
                ", cityList=" + cityList +
                ", areaList=" + areaList +
                '}';
    }
}
