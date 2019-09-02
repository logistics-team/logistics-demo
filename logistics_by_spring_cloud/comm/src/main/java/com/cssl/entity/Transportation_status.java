package com.cssl.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
* <p>
    * 记录物件的运输位置状态，物流状态信息表
    * </p>
*
* @author Devil
* @since 2019-09-02
*/
    public class Transportation_status implements Serializable {

    private static final long serialVersionUID = 1L;

    private String ts_id;

    private LocalDateTime ts_gmt_create;

    private LocalDateTime ts_gmt_modified;

    private Integer ls_id;

    private Integer ep_id;

    private Integer ec_id;

    private Integer ea_id;

    private Integer tm_id;

        public String getTs_id() {
        return ts_id;
        }

            public void setTs_id(String ts_id) {
        this.ts_id = ts_id;
        }
        public LocalDateTime getTs_gmt_create() {
        return ts_gmt_create;
        }

            public void setTs_gmt_create(LocalDateTime ts_gmt_create) {
        this.ts_gmt_create = ts_gmt_create;
        }
        public LocalDateTime getTs_gmt_modified() {
        return ts_gmt_modified;
        }

            public void setTs_gmt_modified(LocalDateTime ts_gmt_modified) {
        this.ts_gmt_modified = ts_gmt_modified;
        }
        public Integer getLs_id() {
        return ls_id;
        }

            public void setLs_id(Integer ls_id) {
        this.ls_id = ls_id;
        }
        public Integer getEp_id() {
        return ep_id;
        }

            public void setEp_id(Integer ep_id) {
        this.ep_id = ep_id;
        }
        public Integer getEc_id() {
        return ec_id;
        }

            public void setEc_id(Integer ec_id) {
        this.ec_id = ec_id;
        }
        public Integer getEa_id() {
        return ea_id;
        }

            public void setEa_id(Integer ea_id) {
        this.ea_id = ea_id;
        }
        public Integer getTm_id() {
        return tm_id;
        }

            public void setTm_id(Integer tm_id) {
        this.tm_id = tm_id;
        }

    @Override
    public String toString() {
    return "Transportation_status{" +
            "ts_id=" + ts_id +
            ", ts_gmt_create=" + ts_gmt_create +
            ", ts_gmt_modified=" + ts_gmt_modified +
            ", ls_id=" + ls_id +
            ", ep_id=" + ep_id +
            ", ec_id=" + ec_id +
            ", ea_id=" + ea_id +
            ", tm_id=" + tm_id +
    "}";
    }
}
