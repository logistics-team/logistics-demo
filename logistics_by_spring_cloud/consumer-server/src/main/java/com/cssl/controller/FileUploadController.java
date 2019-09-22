package com.cssl.controller;

import com.cssl.entity.LogisticsUser;
import com.cssl.service.LogisticsService;
import com.cssl.util.FTPFileUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Controller
@RequestMapping("fileUploadController")
public class FileUploadController {

    @Autowired
    private LogisticsService logisticsService;

    Map<String,Object> map = new HashMap<>();
    @RequestMapping("fileUpload")
    @ResponseBody
    public Map fileUpload(MultipartFile files) throws IOException {
        if(files == null){
            map.put("success",true);
            map.put("message","图片为空,重新选择图片");
            map.put("msg",null);
            return map;
        }
        List<String> fileTyps = Arrays.asList("image/jpeg", "image/png", "image/gif");
        String uuid = UUID.randomUUID().toString();
        //获取文件后缀名
        String contentType = files.getContentType();
        //截取.jpg
        Integer index= files.getOriginalFilename().lastIndexOf(".");
        String fileName=files.getOriginalFilename().substring(index);
        //图片名
        fileName=uuid+fileName;
        String filesUrl=null;
        //判断上传是否是图片类型
        if (fileTyps.contains(contentType)) {
            System.out.println("filesName"+fileName);
            // 写入指定盘符
            boolean flag = FTPFileUtil.uploadFile(fileName, files.getInputStream());
            filesUrl = fileName;
            map.put("success",true);
            map.put("msg",filesUrl);
            map.put("message","提交成功");
        }
        else{
            map.put("success",false);
            map.put("message","上传失败,点击提交图片按钮继续上传");
            return map;
        }
        return map;
    }
    //用户修改
    @RequestMapping("updateUser")
    @ResponseBody
    public String updateUser(@RequestParam(value = "customer.userName") String userName,@RequestParam(value = "sex") String sex,@RequestParam(value = "customer.userBrithday") String birthday){
        System.out.println("userName"+userName);
        System.out.println("sex"+sex);
        System.out.println("birthday"+birthday);
        System.out.println("msg"+String.valueOf(map.get("msg")));
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
