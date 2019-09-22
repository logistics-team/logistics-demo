package com.cssl.util;

import sun.plugin.com.Utils;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class AddressResolutionUtil {


    /**
     * 
     * @param addressInfo
     * @return 一个
     */
   public Map<String,String> findPhoneInfo(String addressInfo){
       //解析需要的字段
       String provinceInfo ="", cityInfo = "", countyInfo = "",areaInfo="", phoneInfo ="", nameInfo = "";
       //记录字段的下标
       int provinceIndex=-1,cityIndex=-1,areaIndex=-1,phoneIndex=-1,nameIndex=-1;
       /*识别电话号码*/
       Pattern pattern = Pattern.compile("^((1[0-9]))\\d{9}$");//(^((1[0-9]))\d{9}$)|(^0\d{2,4}-\d{7,8})
       Matcher matcher = pattern.matcher(addressInfo);
       StringBuffer bf = new StringBuffer(64);
       while (matcher.find()) {
           bf.append(matcher.group()).append(",");
       }
       if (!NonEmptyUtils.isEmpty(phoneInfo)) {
           phoneIndex=addressInfo.indexOf(phoneInfo);
           addressInfo = addressInfo.replace(phoneInfo, "");//去掉已经识别的电话，防止加入详细地址
       }
       Map<String,String> map = new HashMap<>();
       map.put("phoneInfo",phoneInfo);
       map.put("addressInfo",addressInfo);
       return map;
   }

    /**
     * 解析地址
     * @author lin
     * @param address
     * @return
     */
    public static List<Map<String,String>> addressResolution(String address){

        String regex="(?<province>[^省]+自治区|.*?省|.*?行政区|.*?市)(?<city>[^市]+自治州|.*?地区|.*?行政单位|.+盟|市辖区|.*?市|.*?县)(?<areas>[^县]+县|.+区|.+市|.+旗|.+海域|.+岛)(?<town>[^区]+区+自治乡|.+镇)?(?<village>.*)(?<name>.*[王|李|张|刘|陈|杨|黄|赵|吴|周|徐|孙|马|朱|胡|郭|何|高|林|罗|郑|梁|谢|宋|唐|许|韩|冯|邓|曹|彭|曾|肖|田|董|袁|潘|于|蒋|蔡|余|杜|叶|程|苏|魏|吕|丁|任|沈|姚|卢|姜|崔|钟|谭|陆|汪|范|金|石|廖|贾|夏|韦|傅|方|白|邹|孟|熊|秦|邱|江|尹|薛|闫|段|雷|侯|龙|史|黎|贺|顾|毛|郝|龚|邵|万|钱|覃|武|戴|孔|汤|庞|樊|兰|殷|施|陶|洪|翟|安|颜|倪|严|牛|温|芦|季|俞|章|鲁|葛|伍|申|尤|毕|聂|柴|焦|向|柳|邢|岳|齐|沿|梅|莫|庄|辛|管|祝|左|涂|谷|祁|时|舒|耿|牟|卜|路|詹|关|苗|凌|费|纪|靳|盛|童|欧|甄|项|曲|成|游|阳|裴|席|卫|查|屈|鲍|位|覃|霍|翁|隋|植|甘|景|薄|单|包|司|柏|宁|柯|阮|桂|闵|欧阳|解|强|丛|华|车|冉|房|边|辜|吉|饶|刁|瞿|戚|丘|古|米|池|滕|晋|苑|邬|臧|畅|宫|来|嵺|苟|全|褚|廉|简|娄|盖|符|奚|木|穆|党|燕|郎|邸|冀|谈|姬|屠|连|郜|晏|栾|郁|商|蒙|计|喻|揭|窦|迟|宇|敖|糜|鄢|冷|卓|花|艾|蓝|都|巩|稽|井|练|仲|乐|虞|卞|封|竺|冼|原|官|衣|楚|佟|栗|匡|宗|应|台|巫|鞠|僧|桑|荆|谌|银|扬|明|沙|薄|伏|岑|习|胥|保|和|蔺|水|云|昌|凤|酆|常|皮|康|元|平|萧|湛|禹|无|贝|茅|麻|危|骆|支|咎|经|裘|缪|干|宣|贲|杭|诸|钮|嵇|滑|荣|荀|羊|於|惠|家|芮|羿|储|汲|邴|松|富|乌|巴|弓|牧|隗|山|宓|蓬|郗|班|仰|秋|伊|仇|暴|钭|厉|戎|祖|束|幸|韶|蓟|印|宿|怀|蒲|鄂|索|咸|籍|赖|乔|阴|能|苍|双|闻|莘|贡|逢|扶|堵|宰|郦|雍|却|璩|濮|寿|通|扈|郏|浦|尚|农|别|阎|充|慕|茹|宦|鱼|容|易|慎|戈|庚|终|暨|居|衡|步|满|弘|国|文|寇|广|禄|阙|东|殴|殳|沃|利|蔚|越|夔|隆|师|厍|晃|勾|融|訾|阚|那|空|毋|乜|养|须|丰|巢|蒯|相|后|红|权逯|盖益|桓|公|万俟|司马|上官|夏侯|诸葛|闻人|东方|赫连|皇甫|尉迟|公羊|澹台|公冶|宗政|濮阳|淳于|单于|太叔|申屠|公孙|仲孙|轩辕|令狐|钟离|宇文|长孙|慕容|鲜于|闾丘|司徒|司空|亓官|司寇|仉|督|子车|颛孙|端木|巫马|公西|漆雕|乐正|壤驷|公良|拓跋|夹谷|宰父|谷粱|法|汝|钦|段干|百里|东郭|南门|呼延|归海|羊舌|微生|帅|缑|亢|况|郈|琴|梁丘|左丘|东门|西门|佘|佴|伯|赏|南宫|墨|哈|谯|笪|年|爱|仝|代].*[\\u4e00-\\u9fa5])";
        String regexPhone = "^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[013678])|(18[0,5-9]))\\d{8}$";
        Matcher m2=Pattern.compile(regexPhone).matcher(address);

        Matcher m=Pattern.compile(regex).matcher(address);
        String province=null,city=null,county=null,town=null,village=null,name=null,phoneNum=null;
        List<Map<String,String>> table=new ArrayList<Map<String,String>>();
        Map<String,String> row=null;
        while(m.find()){
            row=new LinkedHashMap<String,String>();
            province=m.group("province");
            row.put("province", province==null?"":province.trim().replaceAll("\\p{P}",""));
            city=m.group("city");
            row.put("city", city==null?"":city.trim().replaceAll("\\p{P}",""));
            county=m.group("areas");
            row.put("county", county==null?"":county.trim().replaceAll("\\p{P}",""));
            town=m.group("town");
            row.put("town", town==null?"":town.trim().replaceAll("\\p{P}",""));
            village=m.group("village");
            row.put("address", village==null?"":village.trim().replaceAll("\\p{P}",""));
            name=m.group("name");
            row.put("rname", name==null?"":name.trim().replaceAll("\\p{P}",""));
//            phoneNum=m.group("phoneNum");
            String telnum = getTelnum(address);
            row.put("telenum", telnum==null?"":telnum.trim().replaceAll("\\p{P}",""));
            table.add(row);
        }
        return table;
    }

    public static void main(String[] args) {
        System.out.println(addressResolution("湖南省永州市江永县源口瑶族自治乡清溪村5组，佟丽娅，17700244411"));
//        Map<String, String> phoneInfo = new AddressResolutionUtil().findPhoneInfo("湖南省永州市江永县源口瑶族自治乡清溪村5组,古力娜扎,17700244411");
//        System.out.println("phoneInfo = " + phoneInfo);
    }


    public static String getTelnum(String sParam){
        if(sParam.length()<=0)
            return "";
        Pattern pattern = Pattern.compile("(1|861)(3|5|8|7|9|4|6)\\d{9}$*");
        Matcher matcher = pattern.matcher(sParam);
        StringBuffer bf = new StringBuffer();
        while (matcher.find()) {
            bf.append(matcher.group()).append(",");
        }
        int len = bf.length();
        if (len > 0) {
            bf.deleteCharAt(len - 1);
        }
        return bf.toString();
    }

}