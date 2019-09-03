package com.cssl.entity;

import java.io.Serializable;

/**
 * <p>
 * 记录物流状态信息，物流状态表
 * </p>
 *
 * @author Devil
 * @since 2019-09-02
 */
public class Logistics_status implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer ls_id;

    private String ls_context;

    public Integer getLs_id() {
        return ls_id;
    }

    public void setLs_id(Integer ls_id) {
        this.ls_id = ls_id;
    }

    public String getLs_context() {
        return ls_context;
    }

    public void setLs_context(String ls_context) {
        this.ls_context = ls_context;
    }

    public Logistics_status() {
    }

    public Logistics_status(Integer ls_id, String ls_context) {
        this.ls_id = ls_id;
        this.ls_context = ls_context;
    }

    @Override
    public String toString() {
        return "Logistics_status{" +
                "ls_id=" + ls_id +
                ", ls_context=" + ls_context +
                "}";
    }
}
