package com.cssl.service;

import com.cssl.config.ServiceFeignConfiguration;
import com.cssl.service.impl.UserServiceHystrix;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(value = "user-server", fallback = UserServiceHystrix.class, configuration = ServiceFeignConfiguration.class)
public interface UserService {

    //订单操作
    /**
     * 李
     * @param id
     * @param page
     * @param limit
     * @return
     */
    //订单操作
    @RequestMapping(value = "orders/show", method = RequestMethod.POST, consumes = "application/json")
    String show(@RequestParam(value = "id") int id, @RequestParam(value = "page") int page, @RequestParam(value = "limit") int limit,@RequestParam(value = "name") String name,@RequestParam(value = "select01") int select01,@RequestParam(value = "select02") int select02,@RequestParam(value = "select03") int select03);

    @RequestMapping(value = "orders/l_statue", method = RequestMethod.POST, consumes = "application/json")
    public String l_statue(@RequestParam(value = "id") int id);

    @RequestMapping(value = "orders/ts_update", method = RequestMethod.POST, consumes = "application/json")
    public String ls_update(@RequestParam(value = "ls_id") int ls_id,@RequestParam(value = "ts_id") String ts_id);
    //收寄件人操作
    @RequestMapping(value = "orders/user_select", method = RequestMethod.POST, consumes = "application/json")
    String e_user(@RequestParam(value = "id") String id, @RequestParam(value = "page") int page, @RequestParam(value = "limit") int limit);

    //用户操作
    @RequestMapping(value = "orders/user_s", method = RequestMethod.POST, consumes = "application/json")
    String user(@RequestParam(value = "name") String name, @RequestParam(value = "page") int page, @RequestParam(value = "limit") int limit);

    @RequestMapping(value = "orders/user_update", method=RequestMethod.POST,consumes = "applkication/json")
    int user_update(@RequestParam(value = "id") int id,@RequestParam(value = "block") int block);

    //获取黑名单者编号
    @RequestMapping(value = "orders/user_black", method=RequestMethod.POST,consumes = "applkication/json")
    public String user_black();

    //获取所有省
    @RequestMapping(value = "orders/select01", method=RequestMethod.POST,consumes = "applkication/json")
    public String select01();

    //获取所有市区,县
    @RequestMapping(value = "orders/select02", method=RequestMethod.POST,consumes = "applkication/json")
    public String select02(@RequestParam(value = "id")int id);

    /**
     * 以上李代码
     */

    @RequestMapping(value = "guest/userLogin", method = RequestMethod.POST, consumes = "application/json")
    String userLogin(@RequestParam(value = "phone") String phone, @RequestParam(value = "password") String password, @RequestParam(value = "messageCode") String messageCode);

    @RequestMapping(value = "guest/userRegister", method = RequestMethod.POST, consumes = "application/json")
    String userRegister(@RequestParam(value = "phone") String userPhoneTel, @RequestParam(value = "password") String password, @RequestParam(value = "messageCode") String messageCode);

    @RequestMapping(value = "guest/sendMessages", method = RequestMethod.POST, consumes = "application/json")
    String sendMessages(@RequestParam(value = "phoneNum")String phoneNum);

    @RequestMapping(value = "guest/isExistence", method = RequestMethod.POST, consumes = "application/json")
    String isExistence(@RequestParam(value = "phone")String phone);

    @RequestMapping(value = "guest/notLogin", method = RequestMethod.POST, consumes = "application/json")
    String notLogin();

    @RequestMapping(value = "guest/getPasswordByPhone", method = RequestMethod.POST, consumes = "application/json")
    String getPasswordByPhone(@RequestParam(value = "phone")String phone);

    @RequestMapping(value = "guest/getRoleByPhone", method = RequestMethod.POST, consumes = "application/json")
    String getRoleByPhone(@RequestParam(value = "phone")String phone);

    @RequestMapping(value = "user/findUserByPhone", method = RequestMethod.POST, consumes = "application/json")
    String findUserByPhone(@RequestParam(value = "phone")String phone);
    
    /*
    *李嘉兴
     */
//未处理的投诉查询
    @RequestMapping(value = "orders/select_untreated", method=RequestMethod.POST,consumes = "applkication/json")
    public String select_untreated(@RequestParam(value = "page")int page,@RequestParam(value = "limit")int limit);

    //处理中的投诉信息查询
    @RequestMapping(value = "orders/select_inHand", method=RequestMethod.POST,consumes = "applkication/json")
    public String select_inHand(@RequestParam(value = "page")int page,@RequestParam(value = "limit")int limit);

    //已处理的投诉信息查询
    @RequestMapping(value = "orders/select_processed", method=RequestMethod.POST,consumes = "applkication/json")
    public String select_processed(@RequestParam(value = "page")int page,@RequestParam(value = "limit")int limit);

    //修改处理状态
    @RequestMapping(value = "orders/update_psid", method=RequestMethod.POST,consumes = "applkication/json")
    public int update_psid(@RequestParam(value = "id")int id,@RequestParam(value = "psid")int psid);

    /**
     * 前台--显示投诉信息 根据用户id
     */
    @RequestMapping(value = "orders/select_user_id", method=RequestMethod.POST,consumes = "applkication/json")
    public String select_user_id(@RequestParam(value = "id")int id,@RequestParam(value = "page") int page);

    /**
     * 前台--显示投诉详情信息 根据订单id
     */
    @RequestMapping(value = "orders/select_mc_id", method=RequestMethod.POST,consumes = "applkication/json")
    public String select_mc_id(@RequestParam(value = "id")String id);

    /**
     * 前台--个根据id删除投诉
     */
    @RequestMapping(value = "orders/removae_mc_id", method=RequestMethod.POST,consumes = "applkication/json")
    public int remove_mc_id(@RequestParam(value = "id")String id);

    /**
     * 以上李代码
     */
}
