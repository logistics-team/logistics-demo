package com.cssl.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
* <p>
    * 记录个人对物流不满的投诉，投诉信息表
    * </p>
*
* @author Devil
* @since 2019-09-02
*/
    public class My_complaint implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer mc_id;

    private LocalDateTime mc_gmt_create;

    private LocalDateTime mc_gmt_modified;

    private String lo_id;

    private LocalDateTime mc_complaint_time;

    private Integer toc_id;

    private Integer ps_id;

    private Integer ci_id;

    private Integer ci_ailing_id;

    private String mc_img_location;

    private String mc_context;

        public Integer getMc_id() {
        return mc_id;
        }

            public void setMc_id(Integer mc_id) {
        this.mc_id = mc_id;
        }
        public LocalDateTime getMc_gmt_create() {
        return mc_gmt_create;
        }

            public void setMc_gmt_create(LocalDateTime mc_gmt_create) {
        this.mc_gmt_create = mc_gmt_create;
        }
        public LocalDateTime getMc_gmt_modified() {
        return mc_gmt_modified;
        }

            public void setMc_gmt_modified(LocalDateTime mc_gmt_modified) {
        this.mc_gmt_modified = mc_gmt_modified;
        }
        public String getLo_id() {
        return lo_id;
        }

            public void setLo_id(String lo_id) {
        this.lo_id = lo_id;
        }
        public LocalDateTime getMc_complaint_time() {
        return mc_complaint_time;
        }

            public void setMc_complaint_time(LocalDateTime mc_complaint_time) {
        this.mc_complaint_time = mc_complaint_time;
        }
        public Integer getToc_id() {
        return toc_id;
        }

            public void setToc_id(Integer toc_id) {
        this.toc_id = toc_id;
        }
        public Integer getPs_id() {
        return ps_id;
        }

            public void setPs_id(Integer ps_id) {
        this.ps_id = ps_id;
        }
        public Integer getCi_id() {
        return ci_id;
        }

            public void setCi_id(Integer ci_id) {
        this.ci_id = ci_id;
        }
        public Integer getCi_ailing_id() {
        return ci_ailing_id;
        }

            public void setCi_ailing_id(Integer ci_ailing_id) {
        this.ci_ailing_id = ci_ailing_id;
        }
        public String getMc_img_location() {
        return mc_img_location;
        }

            public void setMc_img_location(String mc_img_location) {
        this.mc_img_location = mc_img_location;
        }
        public String getMc_context() {
        return mc_context;
        }

            public void setMc_context(String mc_context) {
        this.mc_context = mc_context;
        }

    @Override
    public String toString() {
    return "My_complaint{" +
            "mc_id=" + mc_id +
            ", mc_gmt_create=" + mc_gmt_create +
            ", mc_gmt_modified=" + mc_gmt_modified +
            ", lo_id=" + lo_id +
            ", mc_complaint_time=" + mc_complaint_time +
            ", toc_id=" + toc_id +
            ", ps_id=" + ps_id +
            ", ci_id=" + ci_id +
            ", ci_ailing_id=" + ci_ailing_id +
            ", mc_img_location=" + mc_img_location +
            ", mc_context=" + mc_context +
    "}";
    }
}
