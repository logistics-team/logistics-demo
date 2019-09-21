package com.cssl.cy.service;

import com.cssl.entity.ExpressProvincesCityAreas;

import java.util.List;

/**
 * @author Kagura Linne
 * @version 0.01
 * @since 2019/9/16---19:53
 */
public interface ExpressProvincesCityAreasService {
    /**
     * 查询全部
     * @return list
     */
    List<ExpressProvincesCityAreas> findAll();

    /**
     * 按照城市等级查询
     * @param level 城市等级
     * @return  list
     */
    List<ExpressProvincesCityAreas> findByLevel(int level);

    /**
     * 按照id查询
     * @param id 列id
     * @return list
     */
    ExpressProvincesCityAreas findByID(int id);

    /**
     * 查询子地区
     * @param condition  关键字
     * @param id   id
     * @return  json
     */
    List<ExpressProvincesCityAreas> findChild(String condition, int id);
}
