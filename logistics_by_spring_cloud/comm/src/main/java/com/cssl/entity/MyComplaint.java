package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.time.LocalDateTime;

import com.baomidou.mybatisplus.annotation.TableField;

import java.io.Serializable;

/**
 * <p>
 * 记录个人对物流不满的投诉，投诉信息表
 * </p>
 *
 * @author Devil
 * @since 2019-09-20
 */
public class MyComplaint implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "mc_id", type = IdType.AUTO)
    private Integer mcId;

    private LocalDateTime mcGmtCreate;

    private LocalDateTime mcGmtModified;

    private String loId;

    private LocalDateTime mcComplaintTime;

    private Integer tocId;

    private Integer psId;

    private Integer ciId;

    private Integer ciAilingId;

    private String mcImgLocation;

    private String mcContext;

    @TableField("mc_creatorRole")
    private Integer mcCreatorrole;

    private String mcCreator;

    @TableField("mc_creatorMobilePhone")
    private String mcCreatormobilephone;


    private TypesOfComplaints typesOfComplaints; //投诉类型
    private ProcessingStatus processingStatus; //状态
    private ComplainantInfo complainantInfo; //投诉 收寄人

    public TypesOfComplaints getTypesOfComplaints() {
        return typesOfComplaints;
    }

    public void setTypesOfComplaints(TypesOfComplaints typesOfComplaints) {
        this.typesOfComplaints = typesOfComplaints;
    }

    public ProcessingStatus getProcessingStatus() {
        return processingStatus;
    }

    public void setProcessingStatus(ProcessingStatus processingStatus) {
        this.processingStatus = processingStatus;
    }

    public ComplainantInfo getComplainantInfo() {
        return complainantInfo;
    }

    public void setComplainantInfo(ComplainantInfo complainantInfo) {
        this.complainantInfo = complainantInfo;
    }

    public Integer getMcId() {
        return mcId;
    }

    public void setMcId(Integer mcId) {
        this.mcId = mcId;
    }

    public LocalDateTime getMcGmtCreate() {
        return mcGmtCreate;
    }

    public void setMcGmtCreate(LocalDateTime mcGmtCreate) {
        this.mcGmtCreate = mcGmtCreate;
    }

    public LocalDateTime getMcGmtModified() {
        return mcGmtModified;
    }

    public void setMcGmtModified(LocalDateTime mcGmtModified) {
        this.mcGmtModified = mcGmtModified;
    }

    public String getLoId() {
        return loId;
    }

    public void setLoId(String loId) {
        this.loId = loId;
    }

    public LocalDateTime getMcComplaintTime() {
        return mcComplaintTime;
    }

    public void setMcComplaintTime(LocalDateTime mcComplaintTime) {
        this.mcComplaintTime = mcComplaintTime;
    }

    public Integer getTocId() {
        return tocId;
    }

    public void setTocId(Integer tocId) {
        this.tocId = tocId;
    }

    public Integer getPsId() {
        return psId;
    }

    public void setPsId(Integer psId) {
        this.psId = psId;
    }

    public Integer getCiId() {
        return ciId;
    }

    public void setCiId(Integer ciId) {
        this.ciId = ciId;
    }

    public Integer getCiAilingId() {
        return ciAilingId;
    }

    public void setCiAilingId(Integer ciAilingId) {
        this.ciAilingId = ciAilingId;
    }

    public String getMcImgLocation() {
        return mcImgLocation;
    }

    public void setMcImgLocation(String mcImgLocation) {
        this.mcImgLocation = mcImgLocation;
    }

    public String getMcContext() {
        return mcContext;
    }

    public void setMcContext(String mcContext) {
        this.mcContext = mcContext;
    }

    public Integer getMcCreatorrole() {
        return mcCreatorrole;
    }

    public void setMcCreatorrole(Integer mcCreatorrole) {
        this.mcCreatorrole = mcCreatorrole;
    }

    public String getMcCreator() {
        return mcCreator;
    }

    public void setMcCreator(String mcCreator) {
        this.mcCreator = mcCreator;
    }

    public String getMcCreatormobilephone() {
        return mcCreatormobilephone;
    }

    public void setMcCreatormobilephone(String mcCreatormobilephone) {
        this.mcCreatormobilephone = mcCreatormobilephone;
    }

    @Override
    public String toString() {
        return "MyComplaint{" +
                "mcId=" + mcId +
                ", mcGmtCreate=" + mcGmtCreate +
                ", mcGmtModified=" + mcGmtModified +
                ", loId=" + loId +
                ", mcComplaintTime=" + mcComplaintTime +
                ", tocId=" + tocId +
                ", psId=" + psId +
                ", ciId=" + ciId +
                ", ciAilingId=" + ciAilingId +
                ", mcImgLocation=" + mcImgLocation +
                ", mcContext=" + mcContext +
                ", mcCreatorrole=" + mcCreatorrole +
                ", mcCreator=" + mcCreator +
                ", mcCreatormobilephone=" + mcCreatormobilephone +
                "}";
    }
}
