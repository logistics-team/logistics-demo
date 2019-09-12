package com.cssl.service;

public interface SecurityService {
    String userLogin(String j_username, String j_password, String encodinginput);

    String userRegister(String userPhoneTel, String password, String messageCode);

    String isExistence(String phone);

    String sendMessages(String phoneNum);

    String notLogin();

    String logout();
}
