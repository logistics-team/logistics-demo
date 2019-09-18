package com.cssl.service.impl;

import com.cssl.service.FileUploadService;
import com.cssl.util.FileUploadUtil;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
@Service
public class FileUploadServiceImpl implements FileUploadService {
    @Autowired
    FileUploadUtil fileUploadUtil;

    @Override
    public String FileUpload(MultipartFile file) {
        return fileUploadUtil.upload(file);
    }
}
