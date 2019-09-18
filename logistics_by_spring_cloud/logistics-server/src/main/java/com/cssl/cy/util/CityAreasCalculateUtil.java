package com.cssl.cy.util;

import com.cssl.entity.ExpressProvincesCityAreas;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/** 
 *
 * @author Kagura Linne
 *
 */
public final class CityAreasCalculateUtil {

	//地球半径
	private static double EARTH_RADIUS = 6378.137;

	//私有化构造器
	private CityAreasCalculateUtil() {
		throw new RuntimeException();
	}
	
	
	
	
	/**
	 * 根据单号或者手机号查询 , 查询出来的结果为运单状态 , 运单运输进度查询结果
	 * @param num   
	 * @param phone
	 * @return   kay 为 num , data
	 * num 为 运单状态 String 类型
	 * data 为 运单进度 , 数组, 包含多项, 全量,倒序 , 每项都是对象,包含多个字段
	 */
	public static Map<String, Object> query(int num , int phone ){
		
		return null;
	}
	
	/**
	 * 	 * 提供寄收双方的  省 - 市 - 县区  的id           
	 *                         
	 * @param pro   
	 * @param city
	 * @param county
	 * @param pro2
	 * @param city2
	 * @param county2
	 * 
	 * @return  map 中的 key 为 size ,   from   ,  to  ,   price  ,...              
	 * size  对应的value值为 省与省之间的距离      
	 * from  是 一个 maap对象, 指代寄件地区的省会
	 * to      是一个maap对象 , 指代收件地区的省会
	 * price   指价格
	 */
	public static Map<String, Object> service(int pro ,int city, int county,  int pro2 , int city2 ,int county2){
		Map<String, Object> resultMap  = new HashMap<String, Object>();
		//同省
		if (pro == pro2) {
			selPC(county);
			/*
			 * //同市 if(city == city2) {
			 * 
			 * //同县区 if(county == county2) {
			 * 
			 * }else { //同省同市不同区 }
			 * 
			 * }else { //同省不同市 }
			 */
		}else {
			//不同省
			
		}
		return resultMap;
	}
	
	/**
	 * 寻找省会
	 * @param id  当前地区id 
	 * @return   省会对象
	 */
	public static ExpressProvincesCityAreas selPC(int id) {
		//先查看此地区的级别 , 如果为2级就拿到上级id  , 查询数据库, 根据 parent_id = 父类id && epca_center = true  来找到省会.
		//如果此地区为 3级 , 则需要拿到上级的父id
		return null;
	}



	/**
	 *计算不同省运费
	 * @param distance  距离
	 * @param transportation   运输方式
	 * @return
	 */
	public static Map<String,Object> freightCharge(int distance ,   boolean transportation){
		double freighgRate  =1;
		if (transportation){
			freighgRate = 1.8;
		}
		Map<String,Object> map = new HashMap<>();
		if (distance < 500*1000) {
			map.put("first",(int)Math.ceil(10*freighgRate));

		}else if (distance < 1000*1000) {
			map.put("first",(int)Math.ceil(12*freighgRate));
		}else if (distance < 2000 * 1000) {
			map.put("first",(int)Math.ceil(14*freighgRate));
		}else {
			map.put("first",(int)Math.ceil(16*freighgRate));
		}
		map.put("continued",2);
		return map;
	}

	/**
	 * 计算运费 ,同省陆运
	 * @return
	 */
	public static Map<String,Object> freightCharge(){
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("first",6);
		map.put("continued",1);
		return  map;
	}
	
	/**
	 *     弧度计算
	 * @param d
	 * @return
	 */
	private static double rad(double d) {
		return d * Math.PI / 180.0;
		
	}

	/**
	 *   根据经纬度算距离 
	 * @param lat1     经度
	 * @param lng1		纬度
	 * @param lat2
	 * @param lng2
	 * @return     	距离 单位m
	 */
	public static int distance(double lat1, double lng1, double lat2,double lng2) {
		double radLat1 = rad(lat1);
		double radLat2 = rad(lat2);
		double a = radLat1 - radLat2;
		double b = rad(lng1) - rad(lng2);
		double s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2)
				+ Math.cos(radLat1) * Math.cos(radLat2)
				* Math.pow(Math.sin(b / 2), 2)));
		s = s * EARTH_RADIUS;
		s = Math.round(s * 10000d) / 10000d;
		s = s * 1000;
		return (int)s;
	}
	
}
