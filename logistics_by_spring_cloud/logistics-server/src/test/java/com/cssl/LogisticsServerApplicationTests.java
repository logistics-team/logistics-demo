package com.cssl;


import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.cssl.entity.ExpressProvincesCityAreas;
import com.cssl.mailing.mapper.ExpressProvincesCityAreasMapper;
import com.cssl.mailing.mapper.Express_userDao;
import com.cssl.mailing.service.IExpressProvincesCityAreasService;
import com.cssl.mailing.service.ILogisticsOrdersService;
import org.apache.http.util.TextUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


@RunWith(SpringRunner.class)
@SpringBootTest(classes = LogisticsServerApplication.class)
public class LogisticsServerApplicationTests {

    @Autowired
    ExpressProvincesCityAreasMapper mapper;
    @Autowired
    IExpressProvincesCityAreasService cityAreas;
    @Test
    public void contextLoads() {
        System.out.println("**************************************************************************");

        List<ExpressProvincesCityAreas> provinceList =mapper.getProvinceList();
        System.out.println("provinceList = " + provinceList);
        for (ExpressProvincesCityAreas prov:provinceList
             ) {
            List<ExpressProvincesCityAreas> cityList = mapper.getCityListByProvinceId(prov.getEpcaId());
            System.out.println("cityList = " + cityList);
        }

//        List<ExpressProvincesCityAreas> addrByParentId = mapper.findAddrByParentName("湖南省");
//        System.out.println("addrByParentId = " + addrByParentId);
//        System.out.println("provinceList = " + cityAreas.getJson());  格式获取
        System.out.println("**************************************************************************");
//        List<ExpressUser> list = mapper.findUserByWhere();
//        list.forEach(express_user -> System.out.println("express_user = " + express_user));
//        List<ItemType> it = mapper.findIt();
//        it.forEach(itemType -> System.out.println("itemType = " + itemType));
//        IdSequenceUtils idSequenceUtils = new IdSequenceUtils();
//        String l = idSequenceUtils.nextId();
//        System.out.println("订单号 = " + l);
//        System.out.println("s.length() = " + l.length());
    }

    @Autowired
    ILogisticsOrdersService ordersService;
    @Test
    public void  test(){

//        DiscernAddressInfo("古力娜扎,湖南省永州市江永县源口瑶族乡清溪村5组,17700244411");
//        List<ExpressProvincesCityAreas> areasList = mapper.getAreasListByCityId(431100);
//        System.out.println("areasList = " + areasList);
//
//
//        System.out.println("cityAreas.getAreasIdByName(\"江永\") = " + cityAreas.getAreasIdByName("江永"));
//        System.out.println("cityAreas.getCityIdByName(\"永州市\") = " + cityAreas.getCityIdByName("永州市"));
//        System.out.println("cityAreas.getProvinceIdByName(\"湖南\") = " + cityAreas.getProvinceIdByName("湖南"));
//        System.out.println("时区："+LocalDateTime.now());
//        ExpressGoods goods = new ExpressGoods();
//        BigDecimal bigDecimal = BigDecimal.valueOf(15.5);
//        goods.setWeight(bigDecimal);
//        goods.setEgAppraisedPrice(bigDecimal);
//        goods.setItId(1);
//        goods.setEgGmtCreate(LocalDateTime.now());
//        goods.setEgSpecialContext("这是一个马踏飞燕");
//        ExpressUser user = new ExpressUser(1, LocalDateTime.now(), LocalDateTime.now(), "佟丽娅",
//                430000, 430900, 430903, "17700244411",
//                "Cheney", 620000, 620800, 620822,
//                "15116114097");
//        goods.setExpressUser(user);
//
//        LogisticsOrders logisticsOrders = ordersService.generateOrders(goods);
//        System.out.println("logisticsOrders = " + logisticsOrders);
    }


    private String porvince;
    private String city;
    private String area;
    private String countyCode;
    private String cityCode;
    private void DiscernAddressInfo(String addressInfo) {
        //解析需要的字段
        String provinceInfo ="", cityInfo = "", countyInfo = "",areaInfo="", phoneInfo ="", nameInfo = "";
        //记录字段的下标
        int provinceIndex=-1,cityIndex=-1,areaIndex=-1,phoneIndex=-1,nameIndex=-1;
        /*识别电话号码*/
        Pattern pattern = Pattern.compile("([1][3-9][\\d]{9})|(0\\d{2,4}-\\d{7,8})");
        Matcher matcher = pattern.matcher(addressInfo);
        StringBuffer bf = new StringBuffer(64);
        while (matcher.find()) {
            bf.append(matcher.group()).append(",");
        }
        if (!StringUtils.isEmpty(phoneInfo)) {
            phoneIndex=addressInfo.indexOf(phoneInfo);
            addressInfo = addressInfo.replace(phoneInfo, "");//去掉已经识别的电话，防止加入详细地址
        }

        /*识别地址信息*/

        List<ExpressProvincesCityAreas> provinceList = mapper.getProvinceList();//省份列表
        for (ExpressProvincesCityAreas pro : provinceList) {
            String tem;
            if (pro.getEpcaName().contains("自治区")) {
                tem = pro.getEpcaName().replace("自治区","");
            } else if (pro.getEpcaName().contains("省")) {
                tem = pro.getEpcaName().replace("省","");
            } else {
                tem = pro.getEpcaName();
            }
            if (addressInfo.contains(tem)) {
                provinceInfo = pro.getEpcaName();
                provinceIndex = addressInfo.indexOf(tem);
                //更新选择地址信息
                this.porvince=pro.getEpcaName();

                break;
            }
        }
        if (!StringUtils.isEmpty(provinceInfo)) { //当输入框中有省份的时候
            //根据省名称获取该省份编码
//            String provinceCode = mapper.getProvinceCode(provinceInfo);

            //更新选择地址信息
//            this.provinceCode=provinceCode;  //全局变量 自己再定义
            //根据省编码获取市列表
            List<ExpressProvincesCityAreas> cityList = mapper.findAddrByParentName(provinceInfo);
            for (ExpressProvincesCityAreas city : cityList) {
                String temCity = null;
                if (city.getEpcaName().contains("自治州")) {
                    temCity = city.getEpcaName().replace("自治州","");
                } else {
                    temCity = city.getEpcaName().replace("市","");
                }
                if (addressInfo.contains(temCity)) {
                    cityInfo = city.getEpcaName();
//更新选择地址信息
                    this.city=city.getEpcaName();
                    break;
                }
            }
        }

        if (!StringUtils.isEmpty(cityInfo)) {//如果输入框包含市
            //根据市名称、省份编码获取该市编码
//            String cityCode = file.getCityCode(cityInfo, file.getProvinceCode(provinceInfo));
//            //更新选择地址信息
//            this.cityCode=cityCode;

            List<ExpressProvincesCityAreas> areaList = mapper.findAddrByParentName(cityInfo);
            for (ExpressProvincesCityAreas area : areaList) {
                String countyTem = null;
                if (area.getEpcaName().contains("自治")) {
                    countyTem = area.getEpcaName().replace("自治","");
                }
                countyTem = area.getEpcaName().substring(0, area.getEpcaName().length() - 1);
                if (addressInfo.contains(countyTem)) {
                    countyInfo = area.getEpcaName();
                    /*截取详细地址发字符*/
                    areaIndex = addressInfo.indexOf(countyTem)+countyTem.length();
                    if(areaIndex<=addressInfo.length())
                    {
                        areaInfo=addressInfo.substring(areaIndex,addressInfo.length());
                    }
                    //更新选择地址信息
                    this.area=area.getEpcaName();
                    this.countyCode=area.getEpcaId().toString();
                    break;
                }
            }
        }else{
            if(addressInfo.indexOf("市")>0){
                String cityTem=addressInfo.substring(addressInfo.indexOf("市")-2,addressInfo.indexOf("市")+1);
                if(!TextUtils.isEmpty(mapper.getCountyCode(cityTem))){
//                    this.countyCode=file.getCountyCode(cityTem);
                    if(!TextUtils.isEmpty(mapper.getCountyName(countyCode))){
                        this.area=mapper.getCountyName(countyCode);
                        this.cityCode=countyCode.substring(0,countyCode.length()-4);
                        this.city=mapper.getCityName(cityCode);
                        cityInfo=this.city;
                        countyInfo=this.area;
                    }
                }
            }

        }
        String areaTem = provinceInfo + cityInfo + countyInfo; //省市区

        if (!StringUtils.isEmpty(countyInfo)&&addressInfo.contains(countyInfo)) {
            areaIndex = addressInfo.indexOf(countyInfo)+countyInfo.length();
            if(areaIndex<=addressInfo.length())
            {
                areaInfo=addressInfo.substring(areaIndex,addressInfo.length());
            }
        }

        int cutNote = addressInfo.indexOf("备注");


        /*识别姓名 姓名必须要在输入框首位才能识别。。*/
        if (!StringUtils.isEmpty(provinceInfo)&&addressInfo.contains(provinceInfo)) {
            provinceIndex = addressInfo.indexOf(provinceInfo);
        }
        if (provinceIndex > 0 && phoneIndex > 0) {
            nameIndex = provinceIndex < phoneIndex ? provinceIndex : phoneIndex;
        } else {
            nameIndex = provinceIndex > phoneIndex ? provinceIndex : phoneIndex;
        }
        if (nameIndex > 0) {
            String nameTem = addressInfo.substring(0, nameIndex);
            if (nameTem.contains("姓名")) {
                String[] nameTem1 = nameTem.split("姓名");
                nameInfo = nameTem1[nameTem1.length - 1];
            }
            if (nameTem.contains("name")) {
                String[] nameTem1 = nameTem.split("name");
                nameInfo = nameTem1[nameTem1.length - 1];
            }
            if (StringUtils.isEmpty(nameInfo)) {
                nameInfo = nameTem;
            }
        }
        System.out.println("provinceInfo = " + provinceInfo);
        System.out.println("cityInfo = " + cityInfo);
        System.out.println("countyInfo = " + countyInfo);
        System.out.println("areaInfo = " + areaInfo);
        System.out.println("phoneInfo = " + phoneInfo);
        System.out.println("nameInfo = " + nameInfo);
    }

}
