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
* @since 2019-09-03
*/
    public class LogisticsUser implements Serializable {

    private static final long serialVersionUID = 1L;

            @TableId(value = "lu_id", type = IdType.AUTO)
    private Integer luId;

    private LocalDateTime luGmtCreate;

    private LocalDateTime luGmtModified;

    private String luUsername;

    private String luPassword;

    private String luPhone;

    private Integer mabId;

    private Integer mcId;

    private String luImgLocation;

    private String luSex;

    private LocalDate luBirthday;

    private String luIsblacklist;

        public Integer getLuId() {
        return luId;
        }

            public void setLuId(Integer luId) {
        this.luId = luId;
        }
        public LocalDateTime getLuGmtCreate() {
        return luGmtCreate;
        }

            public void setLuGmtCreate(LocalDateTime luGmtCreate) {
        this.luGmtCreate = luGmtCreate;
        }
        public LocalDateTime getLuGmtModified() {
        return luGmtModified;
        }

            public void setLuGmtModified(LocalDateTime luGmtModified) {
        this.luGmtModified = luGmtModified;
        }
        public String getLuUsername() {
        return luUsername;
        }

            public void setLuUsername(String luUsername) {
        this.luUsername = luUsername;
        }
        public String getLuPassword() {
        return luPassword;
        }

            public void setLuPassword(String luPassword) {
        this.luPassword = luPassword;
        }
        public String getLuPhone() {
        return luPhone;
        }

            public void setLuPhone(String luPhone) {
        this.luPhone = luPhone;
        }
        public Integer getMabId() {
        return mabId;
        }

            public void setMabId(Integer mabId) {
        this.mabId = mabId;
        }
        public Integer getMcId() {
        return mcId;
        }

            public void setMcId(Integer mcId) {
        this.mcId = mcId;
        }
        public String getLuImgLocation() {
        return luImgLocation;
        }

            public void setLuImgLocation(String luImgLocation) {
        this.luImgLocation = luImgLocation;
        }
        public String getLuSex() {
        return luSex;
        }

            public void setLuSex(String luSex) {
        this.luSex = luSex;
        }
        public LocalDate getLuBirthday() {
        return luBirthday;
        }

            public void setLuBirthday(LocalDate luBirthday) {
        this.luBirthday = luBirthday;
        }
        public String getLuIsblacklist() {
        return luIsblacklist;
        }

            public void setLuIsblacklist(String luIsblacklist) {
        this.luIsblacklist = luIsblacklist;
        }

    @Override
    public String toString() {
    return "LogisticsUser{" +
            "luId=" + luId +
            ", luGmtCreate=" + luGmtCreate +
            ", luGmtModified=" + luGmtModified +
            ", luUsername=" + luUsername +
            ", luPassword=" + luPassword +
            ", luPhone=" + luPhone +
            ", mabId=" + mabId +
            ", mcId=" + mcId +
            ", luImgLocation=" + luImgLocation +
            ", luSex=" + luSex +
            ", luBirthday=" + luBirthday +
            ", luIsblacklist=" + luIsblacklist +
    "}";
    }
}
