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
    //电话
    private String mabPhone;
    //0默认 1不默认
    private String mabIsdefault;
    //1 收件人  0寄件人
    private String mabIsReceipt;
    //联系人
    private String mabCreator;
    //标签
    private String tag;

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    //省市
    private Provinces provinces;

    public Provinces getProvinces() {
        return provinces;
    }

    public void setProvinces(Provinces provinces) {
        this.provinces = provinces;
    }

    public String getMabIsReceipt() {
        return mabIsReceipt;
    }

    public void setMabIsReceipt(String mabIsReceipt) {
        this.mabIsReceipt = mabIsReceipt;
    }

    public String getMabCreator() {
        return mabCreator;
    }

    public void setMabCreator(String mabCreator) {
        this.mabCreator = mabCreator;
    }

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
                ", mabAddress='" + mabAddress + '\'' +
                ", mabPhone='" + mabPhone + '\'' +
                ", mabIsdefault='" + mabIsdefault + '\'' +
                ", mabIsReceipt='" + mabIsReceipt + '\'' +
                ", mabCreator='" + mabCreator + '\'' +
                ", tag='" + tag + '\'' +
                ", provinces=" + provinces +
                '}';
    }
}
