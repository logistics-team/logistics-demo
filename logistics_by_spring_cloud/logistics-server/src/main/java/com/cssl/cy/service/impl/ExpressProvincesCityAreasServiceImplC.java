package com.cssl.cy.service.impl;

import com.cssl.cy.mapper.ExpressProvincesCityAreasDaoC;
import com.cssl.cy.service.ExpressProvincesCityAreasService;
import com.cssl.entity.ExpressProvincesCityAreas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Kagura Linne
 * @version 0.01
 * @since 2019/9/16---19:53
 */
@Service
public class ExpressProvincesCityAreasServiceImplC implements ExpressProvincesCityAreasService {

    @Autowired
    private ExpressProvincesCityAreasDaoC cityAreasDao;
    /**
     * 查询全部
     *
     * @return list
     */
    @Override
    public List<ExpressProvincesCityAreas> findAll() {
        return   cityAreasDao.findAll();
    }

    /**
     * 按照城市等级查询
     *
     * @param level 城市等级
     * @return list
     */
    @Override
    public List<ExpressProvincesCityAreas> findByLevel(int level) {
        return cityAreasDao.findByLevel(level);
    }

    /**
     * 按照id查询
     *
     * @param id 列id
     * @return list
     */
    @Override
    public ExpressProvincesCityAreas findByID(int id) {
        return cityAreasDao.findByID(id);
    }
}
