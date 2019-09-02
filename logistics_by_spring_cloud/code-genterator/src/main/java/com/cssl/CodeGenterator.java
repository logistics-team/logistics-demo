package com.cssl;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.core.exceptions.MybatisPlusException;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.config.DataSourceConfig;
import com.baomidou.mybatisplus.generator.config.GlobalConfig;
import com.baomidou.mybatisplus.generator.config.PackageConfig;
import com.baomidou.mybatisplus.generator.config.StrategyConfig;
import com.baomidou.mybatisplus.generator.engine.FreemarkerTemplateEngine;

import java.util.Scanner;

/**
 * 代码生成工具类
 */
public class CodeGenterator {
    /**
     * <p>
     * 读取控制台内容
     * </p>
     */
    public static String scanner(String tip) {
        Scanner scanner = new Scanner(System.in);
        StringBuilder help = new StringBuilder();
        help.append("请输入" + tip + "：");
        System.out.println(help.toString());
        if (scanner.hasNext()) {
            String ipt = scanner.next();
            if (StringUtils.isNotEmpty(ipt)) {
                return ipt;
            }
        }
        throw new MybatisPlusException("请输入正确的" + tip + "！");
    }




    public static void main(String[] args) {
        // 代码生成器
        AutoGenerator mpg = new AutoGenerator();

        // 全局配置
        GlobalConfig gc = new GlobalConfig();
        String projectPath = scanner("项目地址");
        gc.setOutputDir(projectPath + "/src/main/java");
        gc.setAuthor("Devil");
        gc.setOpen(false);
        gc.setFileOverride(true);
        // gc.setSwagger2(true); 实体属性 Swagger2 注解
        mpg.setGlobalConfig(gc);

        // 数据源配置
        DataSourceConfig dsc = new DataSourceConfig();
        //                                      logistics
        final String data = scanner("数据库");
        final String local = scanner("IP地址");
        dsc.setUrl("jdbc:mysql://"+local+":3306/"+data+"?serverTimezone=UTC&useUnicode=true&useSSL=false&characterEncoding=utf8");
        // dsc.setSchemaName("public");
        dsc.setDriverName("com.mysql.cj.jdbc.Driver");
        dsc.setUsername(scanner("用户名"));
        dsc.setPassword(scanner("密码"));
        dsc.setDbType(DbType.MYSQL);
        mpg.setDataSource(dsc);
        // 包配置
        PackageConfig pc = new PackageConfig();
        pc.setModuleName(scanner("项目名(com.cssl+)"));
        pc.setParent("com.cssl");
        mpg.setPackageInfo(pc);

        //数据表配置
        StrategyConfig strategyConfig = new StrategyConfig();
        //strategy.setTablePrefix(new String[] { "buy_" });// // 此处可以修改为您的表前缀׺
        //strategy.setNaming(NamingStrategy.no_change);// 表名生成策略 默认是全部表mpg.execute();
        String tab = scanner("表名(多个用英文逗号隔开)");
        String[] split = tab.split(",");
        for (int i = 0; i < split.length; i++) {
            System.out.println("表 "+i+"：" + split[i]);
        }
        strategyConfig.setInclude(split); // 表名生成策略 指定表
        mpg.setTemplateEngine(new FreemarkerTemplateEngine());
        mpg.setStrategy(strategyConfig);
        mpg.execute();
    }
}
