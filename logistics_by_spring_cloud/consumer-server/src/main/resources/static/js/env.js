function getEnv() {
    var protocol = location.protocol;
    var host = location.host;
    var env = protocol + "//" + host;
    if(env.indexOf("ttkdex.com") != -1 || env.search("ttkdex.com") != -1 ){
        return "prd";
    }
    else if(env.indexOf("ttkdexsit.cnsuning.com") != -1 || env.search("ttkdexsit.cnsuning.com") != -1 ){
        return "sit";
    }
    else if(env.indexOf("ttkdexpre.cnsuning.com") != -1 || env.search("ttkdexpre.cnsuning.com") != -1 ){
        return "xgpre";
    }
    else{
        return "prd";
    }
}