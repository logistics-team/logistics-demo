package com.cssl.controller;

import com.cssl.entity.LogisticsUser;
import com.cssl.service.FileUploadService;
import com.cssl.service.LogisticsService;
import com.cssl.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Controller
@RequestMapping("fileUploadController")
public class FileUploadController {
    @Autowired
    private FileUploadService fileUploadService;
    @Autowired
    private LogisticsService logisticsService;

    Map<String,Object> map = new HashMap<>();
    @RequestMapping("fileUpload")
    @ResponseBody
    public Map fileUpload(MultipartFile files){
        if(files == null){
            map.put("success",true);
            map.put("message","图片为空,重新选择图片");
            map.put("msg",null);
            return map;
        }
        String fileId = fileUploadService.FileUpload(files);
        if(fileId == null){
            map.put("success",false);
            map.put("message","上传失败,点击提交图片按钮继续上传");
            return map;
        }
        map.put("success",true);
        map.put("msg",fileId);
        map.put("message","提交成功");
        System.out.println(map);
        return map;
    }
    @RequestMapping("updateUser")
    @ResponseBody
    public String updateUser(@RequestParam(value = "customer.userName") String userName,@RequestParam(value = "sex") String sex,@RequestParam(value = "customer.userBrithday") String birthday){
        System.out.println("userName"+userName);
        System.out.println("sex"+sex);
        System.out.println("birthday"+birthday);
        //时间格式转换
        LocalDate dateTime =null;
        LogisticsUser logisticsUser=new LogisticsUser();
        if(!birthday.isEmpty()){
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            dateTime=LocalDate.parse(birthday, formatter);
        }
        System.out.println("时间"+dateTime);
        //封装到实体类
        logisticsUser.setLuId(3);
        logisticsUser.setLuUsername(userName);
        logisticsUser.setLuSex(sex);
        logisticsUser.setLuBirthday(dateTime);
        logisticsUser.setLuImgLocation(String.valueOf(map.get("msg")));
        String updateUser = logisticsService.updateUser(logisticsUser);
        System.out.println("integer"+updateUser);
        Integer index = Integer.parseInt(updateUser);
        map.put("user",index);
        return updateUser;
    }
}
