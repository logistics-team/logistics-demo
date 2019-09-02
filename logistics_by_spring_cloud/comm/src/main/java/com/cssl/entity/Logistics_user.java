package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
* <p>
    * 提供一个用户登录和注册，管理进入后台的信息，用户登录信息表
    * </p>
*
* @author Devil
* @since 2019-09-02
*/
    public class Logistics_user implements Serializable {

    private static final long serialVersionUID = 1L;

            @TableId(value = "lu_id", type = IdType.AUTO)
    private Integer lu_id;

    private LocalDateTime lu_gmt_create;

    private LocalDateTime lu_gmt_modified;

    private String lu_username;

    private String lu_password;

    private String lu_phone;

    private Integer mab_id;

    private Integer mc_id;

    private String lu_img_location;

    private String lu_sex;

    private LocalDate lu_birthday;

    private String lu_isblacklist;

        public Integer getLu_id() {
        return lu_id;
        }

            public void setLu_id(Integer lu_id) {
        this.lu_id = lu_id;
        }
        public LocalDateTime getLu_gmt_create() {
        return lu_gmt_create;
        }

            public void setLu_gmt_create(LocalDateTime lu_gmt_create) {
        this.lu_gmt_create = lu_gmt_create;
        }
        public LocalDateTime getLu_gmt_modified() {
        return lu_gmt_modified;
        }

            public void setLu_gmt_modified(LocalDateTime lu_gmt_modified) {
        this.lu_gmt_modified = lu_gmt_modified;
        }
        public String getLu_username() {
        return lu_username;
        }

            public void setLu_username(String lu_username) {
        this.lu_username = lu_username;
        }
        public String getLu_password() {
        return lu_password;
        }

            public void setLu_password(String lu_password) {
        this.lu_password = lu_password;
        }
        public String getLu_phone() {
        return lu_phone;
        }

            public void setLu_phone(String lu_phone) {
        this.lu_phone = lu_phone;
        }
        public Integer getMab_id() {
        return mab_id;
        }

            public void setMab_id(Integer mab_id) {
        this.mab_id = mab_id;
        }
        public Integer getMc_id() {
        return mc_id;
        }

            public void setMc_id(Integer mc_id) {
        this.mc_id = mc_id;
        }
        public String getLu_img_location() {
        return lu_img_location;
        }

            public void setLu_img_location(String lu_img_location) {
        this.lu_img_location = lu_img_location;
        }
        public String getLu_sex() {
        return lu_sex;
        }

            public void setLu_sex(String lu_sex) {
        this.lu_sex = lu_sex;
        }
        public LocalDate getLu_birthday() {
        return lu_birthday;
        }

            public void setLu_birthday(LocalDate lu_birthday) {
        this.lu_birthday = lu_birthday;
        }
        public String getLu_isblacklist() {
        return lu_isblacklist;
        }

            public void setLu_isblacklist(String lu_isblacklist) {
        this.lu_isblacklist = lu_isblacklist;
        }

    @Override
    public String toString() {
    return "Logistics_user{" +
            "lu_id=" + lu_id +
            ", lu_gmt_create=" + lu_gmt_create +
            ", lu_gmt_modified=" + lu_gmt_modified +
            ", lu_username=" + lu_username +
            ", lu_password=" + lu_password +
            ", lu_phone=" + lu_phone +
            ", mab_id=" + mab_id +
            ", mc_id=" + mc_id +
            ", lu_img_location=" + lu_img_location +
            ", lu_sex=" + lu_sex +
            ", lu_birthday=" + lu_birthday +
            ", lu_isblacklist=" + lu_isblacklist +
    "}";
    }
}
