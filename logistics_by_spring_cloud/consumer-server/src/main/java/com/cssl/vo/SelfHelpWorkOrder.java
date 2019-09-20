package com.cssl.vo;

import java.io.Serializable;

public class SelfHelpWorkOrder implements Serializable {

    private String mailNo;              //投诉运单号
    private String bizType;             //投诉类型
    private String memo;                //问题描述
    private String urls;                //图片路径
    private String creatorRole;         //身份
    private String creator;             // 联系人
    private String creatorMobilePhone;  //联系人电话
    private String receiver;            //收件人
    private String receiverMobilePhone;  //收件人电话
    private String receiverAddress;     //收件人地址
    private String sender;              //寄件人
    private String senderMobilePhone;   //寄件人电话
    private String senderAddress;      //寄件人地址

    public String getMailNo() {
        return mailNo;
    }

    public void setMailNo(String mailNo) {
        this.mailNo = mailNo;
    }

    public String getBizType() {
        return bizType;
    }

    public void setBizType(String bizType) {
        this.bizType = bizType;
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }

    public String getUrls() {
        return urls;
    }

    public void setUrls(String urls) {
        this.urls = urls;
    }

    public String getCreatorRole() {
        return creatorRole;
    }

    public void setCreatorRole(String creatorRole) {
        this.creatorRole = creatorRole;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getCreatorMobilePhone() {
        return creatorMobilePhone;
    }

    public void setCreatorMobilePhone(String creatorMobilePhone) {
        this.creatorMobilePhone = creatorMobilePhone;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public String getReceiverMobilePhone() {
        return receiverMobilePhone;
    }

    public void setReceiverMobilePhone(String receiverMobilePhone) {
        this.receiverMobilePhone = receiverMobilePhone;
    }

    public String getReceiverAddress() {
        return receiverAddress;
    }

    public void setReceiverAddress(String receiverAddress) {
        this.receiverAddress = receiverAddress;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getSenderMobilePhone() {
        return senderMobilePhone;
    }

    public void setSenderMobilePhone(String senderMobilePhone) {
        this.senderMobilePhone = senderMobilePhone;
    }

    public String getSenderAddress() {
        return senderAddress;
    }

    public void setSenderAddress(String senderAddress) {
        this.senderAddress = senderAddress;
    }

    public SelfHelpWorkOrder() {
    }

    public SelfHelpWorkOrder(String mailNo, String bizType, String memo, String urls, String creatorRole, String creator, String creatorMobilePhone, String receiver, String receiverMobilePhone, String receiverAddress, String sender, String senderMobilePhone, String senderAddress) {
        this.mailNo = mailNo;
        this.bizType = bizType;
        this.memo = memo;
        this.urls = urls;
        this.creatorRole = creatorRole;
        this.creator = creator;
        this.creatorMobilePhone = creatorMobilePhone;
        this.receiver = receiver;
        this.receiverMobilePhone = receiverMobilePhone;
        this.receiverAddress = receiverAddress;
        this.sender = sender;
        this.senderMobilePhone = senderMobilePhone;
        this.senderAddress = senderAddress;
    }

    @Override
    public String toString() {
        return "SelfHelpWorkOrder{" +
                "mailNo='" + mailNo + '\'' +
                ", bizType='" + bizType + '\'' +
                ", memo='" + memo + '\'' +
                ", urls='" + urls + '\'' +
                ", creatorRole='" + creatorRole + '\'' +
                ", creator='" + creator + '\'' +
                ", creatorMobilePhone='" + creatorMobilePhone + '\'' +
                ", receiver='" + receiver + '\'' +
                ", receiverMobilePhone='" + receiverMobilePhone + '\'' +
                ", receiverAddress='" + receiverAddress + '\'' +
                ", sender='" + sender + '\'' +
                ", senderMobilePhone='" + senderMobilePhone + '\'' +
                ", senderAddress='" + senderAddress + '\'' +
                '}';
    }
}
