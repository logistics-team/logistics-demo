package com.cssl.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
* <p>
    * 记录订单详细信息，物流订单表
    * </p>
*
* @author Devil
* @since 2019-09-02
*/
    public class Logistics_orders implements Serializable {

    private static final long serialVersionUID = 1L;

    private String lo_id;

    private LocalDateTime lo_gmt_create;

    private LocalDateTime lo_gmt_modified;

    private Integer eg_id;

    private Integer eu_id;

    private String ts_id;

    private BigDecimal lo_charge;

        public String getLo_id() {
        return lo_id;
        }

            public void setLo_id(String lo_id) {
        this.lo_id = lo_id;
        }
        public LocalDateTime getLo_gmt_create() {
        return lo_gmt_create;
        }

            public void setLo_gmt_create(LocalDateTime lo_gmt_create) {
        this.lo_gmt_create = lo_gmt_create;
        }
        public LocalDateTime getLo_gmt_modified() {
        return lo_gmt_modified;
        }

            public void setLo_gmt_modified(LocalDateTime lo_gmt_modified) {
        this.lo_gmt_modified = lo_gmt_modified;
        }
        public Integer getEg_id() {
        return eg_id;
        }

            public void setEg_id(Integer eg_id) {
        this.eg_id = eg_id;
        }
        public Integer getEu_id() {
        return eu_id;
        }

            public void setEu_id(Integer eu_id) {
        this.eu_id = eu_id;
        }
        public String getTs_id() {
        return ts_id;
        }

            public void setTs_id(String ts_id) {
        this.ts_id = ts_id;
        }
        public BigDecimal getLo_charge() {
        return lo_charge;
        }

            public void setLo_charge(BigDecimal lo_charge) {
        this.lo_charge = lo_charge;
        }

    @Override
    public String toString() {
    return "Logistics_orders{" +
            "lo_id=" + lo_id +
            ", lo_gmt_create=" + lo_gmt_create +
            ", lo_gmt_modified=" + lo_gmt_modified +
            ", eg_id=" + eg_id +
            ", eu_id=" + eu_id +
            ", ts_id=" + ts_id +
            ", lo_charge=" + lo_charge +
    "}";
    }
}
