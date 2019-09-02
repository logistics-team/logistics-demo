package com.cssl.mailing.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * <p>
 * 记录寄件人信息与收件人信息，收寄件人信息表
 * </p>
 *
 * @author Devil
 * @since 2019-09-02
 */
public class Express_user implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer eu_id;

    private LocalDateTime eu_gmt_create;

    private LocalDateTime eu_gmt_modified;

    private String eu_receipt_name;

    private Integer ep_receipt_id;

    private Integer ec_receipt_id;

    private Integer ea_receipt_id;

    private String eu_receipt_phone;

    private String eu_sender_name;

    private Integer ep_sender_id;

    private Integer ec_sender_id;

    private Integer ea_sender_id;

    private String eu_sender_phone;

    private Integer eg_id;

    public Integer getEu_id() {
        return eu_id;
    }

    public void setEu_id(Integer eu_id) {
        this.eu_id = eu_id;
    }

    public LocalDateTime getEu_gmt_create() {
        return eu_gmt_create;
    }

    public void setEu_gmt_create(LocalDateTime eu_gmt_create) {
        this.eu_gmt_create = eu_gmt_create;
    }

    public LocalDateTime getEu_gmt_modified() {
        return eu_gmt_modified;
    }

    public void setEu_gmt_modified(LocalDateTime eu_gmt_modified) {
        this.eu_gmt_modified = eu_gmt_modified;
    }

    public String getEu_receipt_name() {
        return eu_receipt_name;
    }

    public void setEu_receipt_name(String eu_receipt_name) {
        this.eu_receipt_name = eu_receipt_name;
    }

    public Integer getEp_receipt_id() {
        return ep_receipt_id;
    }

    public void setEp_receipt_id(Integer ep_receipt_id) {
        this.ep_receipt_id = ep_receipt_id;
    }

    public Integer getEc_receipt_id() {
        return ec_receipt_id;
    }

    public void setEc_receipt_id(Integer ec_receipt_id) {
        this.ec_receipt_id = ec_receipt_id;
    }

    public Integer getEa_receipt_id() {
        return ea_receipt_id;
    }

    public void setEa_receipt_id(Integer ea_receipt_id) {
        this.ea_receipt_id = ea_receipt_id;
    }

    public String getEu_receipt_phone() {
        return eu_receipt_phone;
    }

    public void setEu_receipt_phone(String eu_receipt_phone) {
        this.eu_receipt_phone = eu_receipt_phone;
    }

    public String getEu_sender_name() {
        return eu_sender_name;
    }

    public void setEu_sender_name(String eu_sender_name) {
        this.eu_sender_name = eu_sender_name;
    }

    public Integer getEp_sender_id() {
        return ep_sender_id;
    }

    public void setEp_sender_id(Integer ep_sender_id) {
        this.ep_sender_id = ep_sender_id;
    }

    public Integer getEc_sender_id() {
        return ec_sender_id;
    }

    public void setEc_sender_id(Integer ec_sender_id) {
        this.ec_sender_id = ec_sender_id;
    }

    public Integer getEa_sender_id() {
        return ea_sender_id;
    }

    public void setEa_sender_id(Integer ea_sender_id) {
        this.ea_sender_id = ea_sender_id;
    }

    public String getEu_sender_phone() {
        return eu_sender_phone;
    }

    public void setEu_sender_phone(String eu_sender_phone) {
        this.eu_sender_phone = eu_sender_phone;
    }

    public Integer getEg_id() {
        return eg_id;
    }

    public void setEg_id(Integer eg_id) {
        this.eg_id = eg_id;
    }

    public Express_user() {
    }

    public Express_user(Integer eu_id, LocalDateTime eu_gmt_create, LocalDateTime eu_gmt_modified, String eu_receipt_name, Integer ep_receipt_id, Integer ec_receipt_id, Integer ea_receipt_id, String eu_receipt_phone, String eu_sender_name, Integer ep_sender_id, Integer ec_sender_id, Integer ea_sender_id, String eu_sender_phone, Integer eg_id) {
        this.eu_id = eu_id;
        this.eu_gmt_create = eu_gmt_create;
        this.eu_gmt_modified = eu_gmt_modified;
        this.eu_receipt_name = eu_receipt_name;
        this.ep_receipt_id = ep_receipt_id;
        this.ec_receipt_id = ec_receipt_id;
        this.ea_receipt_id = ea_receipt_id;
        this.eu_receipt_phone = eu_receipt_phone;
        this.eu_sender_name = eu_sender_name;
        this.ep_sender_id = ep_sender_id;
        this.ec_sender_id = ec_sender_id;
        this.ea_sender_id = ea_sender_id;
        this.eu_sender_phone = eu_sender_phone;
        this.eg_id = eg_id;
    }

    @Override
    public String toString() {
        return "Express_user{" +
                "eu_id=" + eu_id +
                ", eu_gmt_create=" + eu_gmt_create +
                ", eu_gmt_modified=" + eu_gmt_modified +
                ", eu_receipt_name=" + eu_receipt_name +
                ", ep_receipt_id=" + ep_receipt_id +
                ", ec_receipt_id=" + ec_receipt_id +
                ", ea_receipt_id=" + ea_receipt_id +
                ", eu_receipt_phone=" + eu_receipt_phone +
                ", eu_sender_name=" + eu_sender_name +
                ", ep_sender_id=" + ep_sender_id +
                ", ec_sender_id=" + ec_sender_id +
                ", ea_sender_id=" + ea_sender_id +
                ", eu_sender_phone=" + eu_sender_phone +
                ", eg_id=" + eg_id +
                "}";
    }
}
