package com.cssl.service;

import org.springframework.web.multipart.MultipartFile;

public interface FileUploadService {
    String FileUpload(MultipartFile file);
}
