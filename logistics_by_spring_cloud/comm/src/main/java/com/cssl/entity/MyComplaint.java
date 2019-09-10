package com.cssl.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
* <p>
    * 记录个人对物流不满的投诉，投诉信息表
    * </p>
*
* @author Devil
* @since 2019-09-03
*/
    public class MyComplaint implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer mcId;

    private LocalDateTime mcGmtCreate;

    private LocalDateTime mcGmtModified;

    private String loId;

    private LocalDateTime mcComplaintTime;

    private Integer tocId;

    private Integer psId;

    private Integer ciId;

    private Integer ciAilingId;

    private String mcImgLocation;

    private String mcContext;

        public Integer getMcId() {
        return mcId;
        }

            public void setMcId(Integer mcId) {
        this.mcId = mcId;
        }
        public LocalDateTime getMcGmtCreate() {
        return mcGmtCreate;
        }

            public void setMcGmtCreate(LocalDateTime mcGmtCreate) {
        this.mcGmtCreate = mcGmtCreate;
        }
        public LocalDateTime getMcGmtModified() {
        return mcGmtModified;
        }

            public void setMcGmtModified(LocalDateTime mcGmtModified) {
        this.mcGmtModified = mcGmtModified;
        }
        public String getLoId() {
        return loId;
        }

            public void setLoId(String loId) {
        this.loId = loId;
        }
        public LocalDateTime getMcComplaintTime() {
        return mcComplaintTime;
        }

            public void setMcComplaintTime(LocalDateTime mcComplaintTime) {
        this.mcComplaintTime = mcComplaintTime;
        }
        public Integer getTocId() {
        return tocId;
        }

            public void setTocId(Integer tocId) {
        this.tocId = tocId;
        }
        public Integer getPsId() {
        return psId;
        }

            public void setPsId(Integer psId) {
        this.psId = psId;
        }
        public Integer getCiId() {
        return ciId;
        }

            public void setCiId(Integer ciId) {
        this.ciId = ciId;
        }
        public Integer getCiAilingId() {
        return ciAilingId;
        }

            public void setCiAilingId(Integer ciAilingId) {
        this.ciAilingId = ciAilingId;
        }
        public String getMcImgLocation() {
        return mcImgLocation;
        }

            public void setMcImgLocation(String mcImgLocation) {
        this.mcImgLocation = mcImgLocation;
        }
        public String getMcContext() {
        return mcContext;
        }

            public void setMcContext(String mcContext) {
        this.mcContext = mcContext;
        }

    @Override
    public String toString() {
    return "MyComplaint{" +
            "mcId=" + mcId +
            ", mcGmtCreate=" + mcGmtCreate +
            ", mcGmtModified=" + mcGmtModified +
            ", loId=" + loId +
            ", mcComplaintTime=" + mcComplaintTime +
            ", tocId=" + tocId +
            ", psId=" + psId +
            ", ciId=" + ciId +
            ", ciAilingId=" + ciAilingId +
            ", mcImgLocation=" + mcImgLocation +
            ", mcContext=" + mcContext +
    "}";
    }
}
