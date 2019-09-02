package com.cssl.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
* <p>
    * 记录运输类型，速度，支出，运输方式表
    * </p>
*
* @author Devil
* @since 2019-09-02
*/
    public class Transport_means implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer tm_id;

    private LocalDateTime tm_gmt_create;

    private LocalDateTime tm_gmt_modified;

    private Integer tm_speed;

    private BigDecimal tm_expenditure;

    private String tm_type;

        public Integer getTm_id() {
        return tm_id;
        }

            public void setTm_id(Integer tm_id) {
        this.tm_id = tm_id;
        }
        public LocalDateTime getTm_gmt_create() {
        return tm_gmt_create;
        }

            public void setTm_gmt_create(LocalDateTime tm_gmt_create) {
        this.tm_gmt_create = tm_gmt_create;
        }
        public LocalDateTime getTm_gmt_modified() {
        return tm_gmt_modified;
        }

            public void setTm_gmt_modified(LocalDateTime tm_gmt_modified) {
        this.tm_gmt_modified = tm_gmt_modified;
        }
        public Integer getTm_speed() {
        return tm_speed;
        }

            public void setTm_speed(Integer tm_speed) {
        this.tm_speed = tm_speed;
        }
        public BigDecimal getTm_expenditure() {
        return tm_expenditure;
        }

            public void setTm_expenditure(BigDecimal tm_expenditure) {
        this.tm_expenditure = tm_expenditure;
        }
        public String getTm_type() {
        return tm_type;
        }

            public void setTm_type(String tm_type) {
        this.tm_type = tm_type;
        }

    @Override
    public String toString() {
    return "Transport_means{" +
            "tm_id=" + tm_id +
            ", tm_gmt_create=" + tm_gmt_create +
            ", tm_gmt_modified=" + tm_gmt_modified +
            ", tm_speed=" + tm_speed +
            ", tm_expenditure=" + tm_expenditure +
            ", tm_type=" + tm_type +
    "}";
    }
}
