package com.cssl.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * <p>
 * 记录每个物件的状态信息，物件信息表
 * </p>
 *
 * @author Devil
 * @since 2019-09-03
 */
public class ExpressGoods implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "eg_id", type = IdType.AUTO)
    private Integer egId;

    private LocalDateTime egGmtCreate;

    private Integer itId;

    private BigDecimal weight;

    private BigDecimal egAppraisedPrice;

    private String egSpecialContext;

<<<<<<< HEAD
//    private ExpressUser expressUser;

=======
    private ExpressUser expressUser;

    public ExpressUser getExpressUser() {
        return expressUser;
    }

    public void setExpressUser(ExpressUser expressUser) {
        this.expressUser = expressUser;
    }
>>>>>>> remotes/origin/ljx

    public Integer getEgId() {
        return egId;
    }

    public void setEgId(Integer egId) {
        this.egId = egId;
    }

    public LocalDateTime getEgGmtCreate() {
        return egGmtCreate;
    }

    public void setEgGmtCreate(LocalDateTime egGmtCreate) {
        this.egGmtCreate = egGmtCreate;
    }

    public Integer getItId() {
        return itId;
    }

    public void setItId(Integer itId) {
        this.itId = itId;
    }

    public BigDecimal getWeight() {
        return weight;
    }

    public void setWeight(BigDecimal weight) {
        this.weight = weight;
    }

    public BigDecimal getEgAppraisedPrice() {
        return egAppraisedPrice;
    }

    public void setEgAppraisedPrice(BigDecimal egAppraisedPrice) {
        this.egAppraisedPrice = egAppraisedPrice;
    }

    public String getEgSpecialContext() {
        return egSpecialContext;
    }

    public void setEgSpecialContext(String egSpecialContext) {
        this.egSpecialContext = egSpecialContext;
    }

<<<<<<< HEAD


    public ExpressGoods() {
    }

    public ExpressGoods(Integer egId, LocalDateTime egGmtCreate, Integer itId, BigDecimal weight, BigDecimal egAppraisedPrice, String egSpecialContext) {
=======
    public ExpressGoods(Integer egId, LocalDateTime egGmtCreate, Integer itId, BigDecimal weight, BigDecimal egAppraisedPrice, String egSpecialContext, ExpressUser expressUser) {
>>>>>>> remotes/origin/ljx
        this.egId = egId;
        this.egGmtCreate = egGmtCreate;
        this.itId = itId;
        this.weight = weight;
        this.egAppraisedPrice = egAppraisedPrice;
        this.egSpecialContext = egSpecialContext;
<<<<<<< HEAD
=======
        this.expressUser = expressUser;
    }

    public ExpressGoods() {
>>>>>>> remotes/origin/ljx
    }

    @Override
    public String toString() {
        return "ExpressGoods{" +
                "egId=" + egId +
                ", egGmtCreate=" + egGmtCreate +
                ", itId=" + itId +
                ", weight=" + weight +
                ", egAppraisedPrice=" + egAppraisedPrice +
                ", egSpecialContext='" + egSpecialContext + '\'' +
<<<<<<< HEAD
=======
                ", expressUser=" + expressUser +
>>>>>>> remotes/origin/ljx
                '}';
    }
}
