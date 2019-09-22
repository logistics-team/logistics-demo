package com.cssl.entity;

import java.io.Serializable;

public class Provinces implements Serializable {
    //省id
    private Integer provincesCode;
    //省名
    private String provincesName;
    //市id
    private  Integer  citiesCode;
    //市名
    private String citiesName;
    //县id
    private Integer countiesCode;
    //县名
    private String countiesName;

    public Integer getProvincesCode() {
        return provincesCode;
    }

    public void setProvincesCode(Integer provincesCode) {
        this.provincesCode = provincesCode;
    }

    public String getProvincesName() {
        return provincesName;
    }

    public void setProvincesName(String provincesName) {
        this.provincesName = provincesName;
    }

    public Integer getCitiesCode() {
        return citiesCode;
    }

    public void setCitiesCode(Integer citiesCode) {
        this.citiesCode = citiesCode;
    }

    public String getCitiesName() {
        return citiesName;
    }

    public void setCitiesName(String citiesName) {
        this.citiesName = citiesName;
    }

    public Integer getCountiesCode() {
        return countiesCode;
    }

    public void setCountiesCode(Integer countiesCode) {
        this.countiesCode = countiesCode;
    }

    public String getCountiesName() {
        return countiesName;
    }

    public void setCountiesName(String countiesName) {
        this.countiesName = countiesName;
    }

    public Provinces(Integer provincesCode, String provincesName, Integer citiesCode, String citiesName, Integer countiesCode, String countiesName) {
        this.provincesCode = provincesCode;
        this.provincesName = provincesName;
        this.citiesCode = citiesCode;
        this.citiesName = citiesName;
        this.countiesCode = countiesCode;
        this.countiesName = countiesName;
    }

    public Provinces() {
    }

    @Override
    public String toString() {
        return "Provinces{" +
                "provincesCode=" + provincesCode +
                ", provincesName='" + provincesName + '\'' +
                ", citiesCode=" + citiesCode +
                ", citiesName='" + citiesName + '\'' +
                ", countiesCode=" + countiesCode +
                ", countiesName='" + countiesName + '\'' +
                '}';
    }
}
