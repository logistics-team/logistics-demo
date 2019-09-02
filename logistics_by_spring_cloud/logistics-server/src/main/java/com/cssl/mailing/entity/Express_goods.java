package com.cssl.mailing.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * <p>
 * 记录每个物件的状态信息，物件信息表
 * </p>
 *
 * @author Devil
 * @since 2019-09-02
 */
public class Express_goods implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer eg_id;

    private LocalDateTime eg_gmt_create;

    private Integer it_id;

    private BigDecimal weight;

    private BigDecimal eg_appraised_price;

    private String eg_special_context;

    public Integer getEg_id() {
        return eg_id;
    }

    public void setEg_id(Integer eg_id) {
        this.eg_id = eg_id;
    }

    public LocalDateTime getEg_gmt_create() {
        return eg_gmt_create;
    }

    public void setEg_gmt_create(LocalDateTime eg_gmt_create) {
        this.eg_gmt_create = eg_gmt_create;
    }

    public Integer getIt_id() {
        return it_id;
    }

    public void setIt_id(Integer it_id) {
        this.it_id = it_id;
    }

    public BigDecimal getWeight() {
        return weight;
    }

    public void setWeight(BigDecimal weight) {
        this.weight = weight;
    }

    public BigDecimal getEg_appraised_price() {
        return eg_appraised_price;
    }

    public void setEg_appraised_price(BigDecimal eg_appraised_price) {
        this.eg_appraised_price = eg_appraised_price;
    }

    public String getEg_special_context() {
        return eg_special_context;
    }

    public void setEg_special_context(String eg_special_context) {
        this.eg_special_context = eg_special_context;
    }

    @Override
    public String toString() {
        return "Express_goods{" +
                "eg_id=" + eg_id +
                ", eg_gmt_create=" + eg_gmt_create +
                ", it_id=" + it_id +
                ", weight=" + weight +
                ", eg_appraised_price=" + eg_appraised_price +
                ", eg_special_context=" + eg_special_context +
                "}";
    }
}
