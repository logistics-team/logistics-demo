package com.cssl.authentication.service.impl;

import com.cssl.entity.MyAddressBook;
import com.cssl.authentication.mapper.MyAddressBookMapper;
import com.cssl.authentication.service.IMyAddressBookService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 记录收件地址和寄件地址，地址薄信息表 服务实现类
 * </p>
 *
 * @author Devil
 * @since 2019-09-07
 */
@Service
public class MyAddressBookServiceImpl extends ServiceImpl<MyAddressBookMapper, MyAddressBook> implements IMyAddressBookService {

}
