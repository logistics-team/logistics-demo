package com.cssl.util;

import com.baomidou.mybatisplus.core.toolkit.StringUtils;

/**
 * 非空判断工具类
 */
public class NonEmptyUtils {
    /**
     *  非空判断
     * @param o 对象
     * @return  true：是空的
     */
    public static boolean isEmpty(Object o){
        if (null==o)
            return true;
        if ("".equals(o))
            return true;
        if (o.toString().trim().length()<=0)
            return true;
        if(StringUtils.isEmpty(o.toString()))
            return true;
        return false;
    }
}
