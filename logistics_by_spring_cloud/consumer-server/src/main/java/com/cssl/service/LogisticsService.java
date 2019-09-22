package com.cssl.service;

import com.cssl.config.ServiceFeignConfiguration;
import com.cssl.service.impl.LogisticsServiceHystrix;
import org.apache.shiro.crypto.hash.Hash;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;
import com.cssl.entity.*;

import java.util.HashMap;
import java.util.Map;


@FeignClient(value = "logistics-server",fallback = LogisticsServiceHystrix.class,configuration = ServiceFeignConfiguration.class)//
public interface LogisticsService {
    //调用

    /**
     * 显示管理后台订单 1
     * @param id
     * @param page
     * @param limit
     * @return
     */
    @RequestMapping(value = "orders/show", method = RequestMethod.POST, consumes = "application/json")
    String show(@RequestParam(value = "id") int id,@RequestParam(value = "page") int page,@RequestParam(value = "limit") int limit);

    /**
     * 表单提交 2
     * @param map
     * @return
     */
    @RequestMapping(value = "mailing/submitOrders", method = RequestMethod.POST, consumes = "application/json")
    String confirmOrder(Map<String, Object> map);

    /**
     *  智能填写  加载省市县 2
     * @param addr_p
     * @param addr_c
     * @return
     */
    @RequestMapping(value = "mailing/findAddr", method = RequestMethod.POST, consumes = "application/json")
    String findAddrByProvincesCity(@RequestParam(value = "addr_p")String addr_p,@RequestParam(value = "addr_c")String addr_c);

    /**
     * 修改 用户信息 4
     * @param logisticsUser
     * @return
     */
    @RequestMapping(value = "userController/upateUser", method = RequestMethod.POST, consumes = "application/json")
    String updateUser(@RequestBody LogisticsUser logisticsUser);

    /**
     *  后台用户显示全部信息  4
     * @param search
     * @param pageIndex
     * @param pageSize
     * @return
     */
    @RequestMapping(value = "mailing/getAllOrders", method = RequestMethod.POST, consumes = "application/json")
    String showAllOrders(@RequestParam(value = "search")String search,@RequestParam(value = "pageIndex")Integer pageIndex,@RequestParam(value = "pageSize")Integer pageSize);

    /**
     *  获取市县信息 2
     * @param parentCode        父级ID
     * @return
     */
    @RequestMapping(value = "address/getAddressDataInfo", method = RequestMethod.POST, consumes = "application/json")
    String getAddressDataInfo(@RequestParam(value = "parentCode")String parentCode);

    /**
     * 查询全部地区 3
     * @return json
     *
     */
    @RequestMapping(value="CityAreas/findAll",method = RequestMethod.POST,consumes = "application/json")
    String cityAreasFindAll();

    /**
     * 按照城市等级查询 3
     * @return json
     */
    @RequestMapping(value="CityAreas/findByLevel",method = RequestMethod.POST,consumes = "application/json")
    String cityAreasFindByLevel(int level);

    /**
     * 按照id查询城市 3
     * @param id id
     * @return json
     */
    @RequestMapping(value="CityAreas/findByID",method = RequestMethod.POST,consumes = "application/json")
    String cityAreasFindByID(int id);

    /**
     * 运费预估 2
     * @return 返回JSON
     */
    @RequestMapping(value="address/getFreightEstimate",method = RequestMethod.POST,consumes = "application/json")
    String freightEstimate(@RequestBody Map<String, Object> map);

    /**
     * 投诉订单提交 2
     * @param complaintInfoMap
     * @return
     */
    @RequestMapping(value="complaint/workOrderCustomerSubmit",method = RequestMethod.POST,consumes = "application/json")
    String workOrderCustomerSubmit(@RequestBody Map<String, Object> complaintInfoMap);


    /**
     * 按照id 和 关键字 查询子节点   3
     * @param condition  关键字
     * @param province 省id
     * @param city   市id
     * @param district  区县id
     * @return 子节点的json
     */
    @RequestMapping(value = "CityAreas/findChild",method = RequestMethod.POST,consumes = "application/json")
    String cityAreasFindChild(@RequestParam("condition") String condition,@RequestParam("province") int province,@RequestParam("city") int city,@RequestParam("district") int district);

    /**
     * 新增地址 4
     * @param map
     * @return
     */
    @RequestMapping(value="address/addAddress",method = RequestMethod.POST,consumes = "application/json")
    String addAddress(@RequestParam Map<String, Object> map);

    /**
     * 查询用户下的所有地址 4
     * @param pageIndex
     * @param pageSize
     * @param uid
     * @return
     */
    @RequestMapping(value="address/showAddressById",method = RequestMethod.POST,consumes = "application/json")
    String showAddressUserById(@RequestParam Integer pageIndex,@RequestParam Integer pageSize,@RequestParam Integer uid);

    /**
     * 编辑地址回显 4
     * @param aId
     * @return
     */
    @RequestMapping(value="address/echoData",method = RequestMethod.POST,consumes = "application/json")
    String echoData(@RequestParam Integer aId);

    /**
     *     地址删除 4
     */
    @RequestMapping(value="address/deleteAddress",method = RequestMethod.POST,consumes = "application/json")
    String deleteAddress(@RequestParam Integer aId);

    /**
     * 修改地址 4
     * @param map
     * @return
     */
    @RequestMapping(value="address/updateAddress",method = RequestMethod.POST,consumes = "application/json")
    String updateAddress(@RequestParam Map<String, Object> map);

    /**
     * 订单查询 2
     * @param orderTextInput
     * @return
     */
    @RequestMapping(value="ordersFind/findOrdersByTexts",method = RequestMethod.POST,consumes = "application/json")
    String findOrdersByTexts(@RequestBody String orderTextInput);
}

