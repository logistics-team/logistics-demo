package com.cssl.controller;

import com.alibaba.fastjson.JSON;
import com.cssl.service.LogisticsService;
import com.cssl.util.FTPFileUtil;
import com.cssl.util.IdSequenceUtils;
import org.apache.http.entity.ContentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("user")
public class SelfHelpController {

    private LogisticsService logisticsService;
    @Autowired
    public LogisticsService logisticsService(LogisticsService logisticsService){
        this.logisticsService = logisticsService;
        return this.logisticsService;
    }

    /**
     * 多图片上传 2
     * @param file
     * @return
     */
    @ResponseBody
    @RequestMapping("uploadPic")
    public String uploadPic(MultipartFile file){
        //将文件上传之热文件中，暂存
        Map<String,String> map = new HashMap<>();
        if(file!=null){
            String filename = file.getOriginalFilename();//真实类型
            int index = filename.lastIndexOf(".");
            String fileType = filename.substring(index);
            String UUID = new IdSequenceUtils().nextId();
            String contextPath = System.getProperty("user.dir")+"/consumer-server/target/classes/static";
            String newFile = "/images/"+ UUID + fileType;
            String filePath = contextPath + newFile;
            File fPath = new File(filePath);
            try {
                file.transferTo(fPath);
                map.put("success","true");
                map.put("msg",newFile);//图片地址
            } catch (IOException e) {
                map.put("success","false");
                e.printStackTrace();
            }

        }else {

        }
        return JSON.toJSONString(map);
    }

    /**
     * 投诉提交  2
     * @param mailNo
     * @param bizType
     * @param memo
     * @param urls
     * @param creatorRole
     * @param creator
     * @param creatorMobilePhone
     * @param receiver
     * @param receiverMobilePhone
     * @param receiverAddress
     * @param sender
     * @param senderMobilePhone
     * @param senderAddress
     * @return
     */
    @ResponseBody
    @RequestMapping("workOrderCustomerSubmit")
    public String workOrderCustomerSubmit(String userId, String mailNo, String bizType, String memo, String urls, String creatorRole, String creator, String creatorMobilePhone, String receiver, String receiverMobilePhone, String receiverAddress, String sender, String senderMobilePhone, String senderAddress) throws IOException {

        //提交时将暂存的
//        System.out.println("运单号 = " + mailNo);
//        System.out.println("投诉类型 = " + bizType);
//        System.out.println("问题描述 = " + memo);
//        System.out.println("图片路径 = " + urls);
        String filesUrl = null;
        //图片用 ftp+nginx 上传到服务器
        if (urls!=null){
            String contextPath = System.getProperty("user.dir")+"/consumer-server/target/classes/static";//获取图片暂存地址
            String[] files = urls.split(",");
            for (int i = 0; i < files.length; i++) {
                File pdfFile = new File(contextPath, files[i]);
                int index = files[i].lastIndexOf("/");
                files[i] = files[i].substring(index+1);
                FileInputStream stream = new FileInputStream(pdfFile.getAbsoluteFile());
                boolean flag = FTPFileUtil.uploadFile(files[i], stream);
                if (null==filesUrl){
                    filesUrl = "http://47.102.85.126:88/images/" + files[i];
                }else {
                    filesUrl = filesUrl + "," + "http://47.102.85.126:88/images/" + files[i];
                }
                if (!flag){
                    Map<String,Object> map = new HashMap<>();
                    map.put("msg","格式有误！"); //信息
                    return JSON.toJSONString(map);
                }
            }
        }
//        System.out.println("数据库因有文件 = " + filesUrl);
//        System.out.println("投诉人身份 = " + creatorRole);
//        System.out.println("投诉人名 = " + creator);
//        System.out.println("投诉人号码 = " + creatorMobilePhone);
//
//        System.out.println("收寄人 = " + receiver);
//        System.out.println("收寄号码 = " + receiverMobilePhone);
//        System.out.println("收寄地址 = " + receiverAddress);
//
//        System.out.println("寄件人 = " + sender);
//        System.out.println("寄件号码 = " + senderMobilePhone);
//        System.out.println("寄件地址 = " + senderAddress);

        Map<String,Object> complaintInfoMap = new HashMap<>();
        complaintInfoMap.put("userId",userId);
        complaintInfoMap.put("mailNo",mailNo);
        complaintInfoMap.put("bizType",bizType);
        complaintInfoMap.put("memo",memo);
        complaintInfoMap.put("filesUrl",filesUrl);
        complaintInfoMap.put("creatorRole",creatorRole);
        complaintInfoMap.put("creator",creator);
        complaintInfoMap.put("creatorMobilePhone",creatorMobilePhone);
        complaintInfoMap.put("receiver",receiver);
        complaintInfoMap.put("receiverMobilePhone",receiverMobilePhone);
        complaintInfoMap.put("receiverAddress",receiverAddress);
        complaintInfoMap.put("sender",sender);
        complaintInfoMap.put("senderMobilePhone",senderMobilePhone);
        complaintInfoMap.put("senderAddress",senderAddress);
       
//        map.put("code",1000);           //成功状态码
//        map.put("msg","格式有误！"); //信息
//        JSON.toJSONString(map);
        return logisticsService.workOrderCustomerSubmit(complaintInfoMap);
    }

}
