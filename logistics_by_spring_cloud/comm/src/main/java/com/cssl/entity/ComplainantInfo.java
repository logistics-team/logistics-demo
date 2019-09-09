package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.TableField;

import java.io.Serializable;

/**
 * <p>
 * 记录投诉人信息，包含寄件人和收件人，投诉信息表
 * </p>
 *
 * @author Devil
 * @since 2019-09-03
 */
public class ComplainantInfo implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer ciId;

    private String ciName;

    private String ciPhone;

    private String ciAddress;

    public Integer getCiId() {
        return ciId;
    }

    public void setCiId(Integer ciId) {
        this.ciId = ciId;
    }

    public String getCiName() {
        return ciName;
    }

    public void setCiName(String ciName) {
        this.ciName = ciName;
    }

    public String getCiPhone() {
        return ciPhone;
    }

    public void setCiPhone(String ciPhone) {
        this.ciPhone = ciPhone;
    }

    public String getCiAddress() {
        return ciAddress;
    }

    public void setCiAddress(String ciAddress) {
        this.ciAddress = ciAddress;
    }

    @Override
    public String toString() {
        return "ComplainantInfo{" +
                "ciId=" + ciId +
                ", ciName=" + ciName +
                ", ciPhone=" + ciPhone +
                ", ciAddress=" + ciAddress +
                "}";
    }
}
