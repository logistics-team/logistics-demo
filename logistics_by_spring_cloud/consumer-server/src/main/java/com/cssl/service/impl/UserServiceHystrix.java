package com.cssl.service.impl;

import com.cssl.service.UserService;
import org.springframework.stereotype.Component;

@Component
public class UserServiceHystrix implements UserService {

    @Override
    public String show(int id,int age,int limit,String name,int select01,int select02,int select03) {
        return "找不到资源";
    }

    @Override
    public String l_statue(int id) {
        return "找不到资源";
    }

    @Override
    public String ls_update(int ls_id, String ts_id) { return "0"; }

    @Override
    public String e_user(String id, int page, int limit) {
        return "未找到资源";
    }

    @Override
    public String user(String name, int page, int limit) {
        return "未找到资源";
    }

    @Override
    public int user_update(int id, int block) { return 0; }

    @Override
    public String user_black() { return "错误"; }

    @Override
    public String select01() { return "0,请选择"; }

    @Override
    public String select02(int id) { return "0,请选择"; }

    @Override
    public String userLogin(String phone, String password, String messageCode) {
        return "staticFiles/pages/login.html?message='网络延时，请检查网络是否连接！'";
    }

    @Override
    public String userRegister(String userPhoneTel, String password, String messageCode) {
        return "服务器连接失败！";
    }

    @Override
    public String sendMessages(String phoneNum) {
        return null;//返回空
    }

    @Override
    public String isExistence(String phone) {
        return null;//是否存在
    }

    @Override
    public String notLogin() {
        return null;
    }

    @Override
    public String getPasswordByPhone(String phone) {
        return null;
    }

    @Override
    public String getRoleByPhone(String phone) {
        return null;
    }

    @Override
    public String findUserByPhone(String phone) {
        return "未找到任何信息";
    }

    @Override
    public String select_untreated(int page, int limit) {
        return null;
    }

    @Override
    public String select_inHand(int page, int limit) {
        return null;
    }

    @Override
    public String select_processed(int page, int limit) {
        return null;
    }

    @Override
    public int update_psid(int id, int psid) {
        return 0;
    }

    /**
     * 前台--显示投诉信息 根据用户id
     *
     * @param id
     * @param page
     */
    @Override
    public String select_user_id(int id, int page) {
        return null;
    }

    /**
     * 前台--显示投诉详情信息 根据订单id
     *
     * @param id
     */
    @Override
    public String select_mc_id(String id) {
        return null;
    }

    /**
     * 前台--个根据id删除投诉
     *
     * @param id
     */
    @Override
    public int remove_mc_id(String id) {
        return 0;
    }
}
