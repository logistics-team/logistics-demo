/*
 * Suning Site Analyse Code.
 *
 * @author zhanhe sangqiang
 * @email h91zhan@outlook.com 14101110@cnsuning.com  20190604
 */
//#########################################################################################
var sa = sa || {};
/**
 * 全局 公用工具类 88388897 2018-03-15 开始
 * @private
 */
//#########################################################################################
(function (window, document) {
    var _win = window,
        _doc = document,
        _loc = 'location',
        _dom = 'domain',
        _str_sub = 'substring',
        _str_split = 'split',
        _str_indexOf = 'indexOf',
        _str_match = 'match',
        _ps = 'push',
        _empty = '-',
        _split = '|';

    var __conf = {
        isSaPrd: (function () {
            // js执行环境判断 自动获取
            function getJsUrl(jsName) {
                var jsObjs = document.scripts;
                var jsPath = "";
                for (var i = 0; i < jsObjs.length; i++) {
                    jsPath = jsObjs[i] ? jsObjs[i].src : "";
                    if (jsPath.indexOf(jsName) > -1) {
                        return jsPath;
                    }
                }
                return "";
            }

            var _url = getJsUrl('sa-analytics.js');
            if (!_url) {
                // 本地测试时使用
                return false;
            }
            if (_url && (_url.indexOf('//sitres.suning') > -1 ||
                _url.indexOf('//preres.suning') > -1 ||
                _url.indexOf('//sitsslres.suning') > -1 ||
                _url.indexOf('//presslres.suning') > -1 ||
                _url.indexOf('//resprexg.suning') > -1 ||
                _url.indexOf('loc/static')) > -1) {
                return false;
            }
            return true;
        })()
    };
    var __ut = {
        _getFromUrl: function () {
            var fromUrl = document.referrer;
            var toUrl = document.location.href; // 不能使用全局变量，因为此处可能需要根据锚点的值获取来自页面
            var _protocol = location.protocol;
            var httpsUrl = this._getCookie("_snml");
            if ((_protocol == "https:" && fromUrl != "" && httpsUrl && httpsUrl.substring(0, 6) == "https:" && httpsUrl != fromUrl) || // https
                (_protocol == "http:" && fromUrl == "" && httpsUrl && httpsUrl.substring(0, 6) == "https:") ||
                (_protocol == "https:" && fromUrl == "" && httpsUrl && httpsUrl.substring(0, 6) == "https:") ||
                (fromUrl != "" && httpsUrl && httpsUrl != fromUrl) // 页面使用iframe
            ) {
                fromUrl = httpsUrl;
            }
            if (httpsUrl) {
                this._delCookie("_snml");
            }
            if (toUrl != "" && (toUrl.indexOf("sourceUrl4Sa") != -1)) {
                var sourceUrl4Sa = this.SaPick(toUrl, "sourceUrl4Sa", "&");
                fromUrl = decodeURIComponent(sourceUrl4Sa);
            } else if ((!fromUrl || fromUrl == null || fromUrl == "") && toUrl != "" && (toUrl.indexOf("returnUrl") != -1)) {
                var parms = toUrl.substring(toUrl.indexOf("?") + 1, toUrl.length);
                var parmsArr = parms.split("&");
                for (var i = 0; i < parmsArr.length; i++) {
                    var parmArr = parmsArr[i].split("=");
                    if (parmArr[0] == "returnUrl") {
                        fromUrl = parmArr[1];
                    }
                }
            }
            return fromUrl;
        },
        // 获取cookie
        _getCookie: function (name) {
            try {
                var arrStr = document.cookie.split("; ");
                for (var i = 0; i < arrStr.length; i++) {
                    var temp = arrStr[i].split("=");
                    if (temp[0] == name) return decodeURIComponent(temp[1] ? temp[1] : "-");
                }
            } catch (e) {
                return '';
            }
        },
        // 删除cookie
        _delCookie: function (name) {
            this._addCookie(name, "", '/', -10000, "");
        },
        // 添加cookie，name=value，expire为过期毫秒数
        _addCookie: function (name, value, path, expires, domain) {
            var str = name + "=" + escape(value);
            if (expires != "") {
                var date = new Date();
                date.setTime(date.getTime() + expires);
                str += ";expires=" + date.toGMTString();
            }
            if (path != "") {
                str += ";path=" + path; // 指定可访问cookie的目录
            }
            var dm = this.getTopDomain();
            str += ";domain=" + dm;
            document.cookie = str;
        },
        //截取一级域名
        getTopDomain: function (webUrl) {
            var d = webUrl || location.hostname;
            var c = d.split('.');
            if (d.indexOf('localhost') > -1) {
                return 'localhost';
            }
            if (c instanceof Array) {
                var b = c.length,
                    num = 2, // 根域名
                    s = '',
                    e = c.splice(b - num, b); // 处理 三级四级域名
                if (d.indexOf('.com.cn') != -1) { // 处理 .com.cn的域名
                    e = d.split('.').splice(b - num - 1, b);
                }
                for (var i = 0; i < e.length; i++) {
                    s += '.' + e[i];
                }
                return s;
            }
        },
        _encode: function (s) {
            return null != s ? encodeURIComponent(s) : "";
        },
        SaPick: function (map, key, separator) {
            var result = "-",
                idx;
            if (!this.IsEmpty(map) && !this.IsEmpty(key) && !this.IsEmpty(separator)) {
                idx = map.indexOf(key);
                if (idx > -1) {
                    var endIdx = map.indexOf(separator, idx);
                    if (endIdx < 0) {
                        endIdx = map.length;
                    }
                    result = map.substring(idx + key.length + 1, endIdx);
                }
            }
            return result;
        },
        IsEmpty: function (o) {
            return (undefined == o || '' == o || '-' == o);
        },
        getJsUrl: function (jsName) {
            var jsObjs = document.scripts;
            var jsPath = "";
            for (var i = 0; i < jsObjs.length; i++) {
                jsPath = jsObjs[i] ? jsObjs[i].src : "";
                if (jsPath.indexOf(jsName) > -1) {
                    return jsPath;
                }
            }
            return "";
        },
        // 获取meta值，解决ie下多个meta的问题
        getMetaVal: function (key) {
            return document.getElementsByTagName("meta") && document.getElementsByTagName("meta")[key] &&
                (document.getElementsByTagName("meta")[key]["content"] ||
                    (document.getElementsByTagName("meta")[key][0] &&
                        document.getElementsByTagName("meta")[key][0]["content"]));
        }
    };
    var _Set = function () {

        // null can also be an element of the set, but needs
        // a separate indication to differentiate it from
        // the string "null" as well
        this.isNullAdded = false;

        // private member variable hence no 'this'
        var map = {};

        //  Scope for optimization
        //  could be cached instead of generating each time
        //  this.uniqueList = [];

        //  returns true if the element is in this set, false otherwise
        this.contains = function (key) {

            if (key === null)
                return this.isNullAdded;
            else if (key === undefined)
                return false;
            else
                return map[key] ? true : false;
        };

        //  adds the element to the set
        this.add = function (val) {

            if (val === null)
                this.isNullAdded = true;
            else if (val !== undefined)
                map[val] = true;
            return this;
        };

        //  adds all the elements of the array to the set
        this.addAll = function (val) {

            if (val !== null && val !== undefined && val instanceof Array) {
                for (var idx = 0; idx < val.length; idx++) {
                    this.add(val[idx]);
                }
            }
            return this;
        };

        //  removes the specified element from the set
        this.remove = function (val) {
            if (val === null)
                this.isNullAdded = false;
            else if (val !== undefined)
                delete map[val];
            return this;
        };

        //  removes all the element in the array from the set
        this.removeAll = function (val) {

            if (val !== null && val !== undefined && val instanceof Array) {
                for (var idx = 0; idx < val.length; idx++) {
                    this.remove(val[idx]);
                }
            }
            return this;
        };

        //  empties the set of all values
        this.clear = function () {

            this.isNullAdded = false;
            map = {};
            return this;
        };

        //  returns the number of elements in the set
        this.size = function () {

            return this.list().length;
        };

        //  returns true if the set is empty, false otherwise
        this.isEmpty = function () {

            return this.list().length > 0 ? false : true;
        };

        //  returns the elements of the set as a list
        this.list = function () {
            var arr = [];

            if (this.isNullAdded)
                arr.push(null);
            // map {}
            for (o in map) {
                // protect from inherited properties such as
                //  Object.prototype.test = 'inherited property';
                if (map.hasOwnProperty(o))
                    arr.push(o);
            }
            return arr;
        };
    };

    var HashMap = function () {
        var size = 0;

        var entry = new Object();

        this.getThis = function () {
            return entry;
        }

        //add
        this.put = function (key, value) {
            if (!this.containsKey(key)) {
                size++;
            }
            entry[key] = value;
        }

        //get
        this.get = function (key) {
            if (this.containsKey(key)) {
                return entry[key];
            } else {
                return null;
            }
        }

        //delete
        this.remove = function (key) {
            if (delete entry[key]) {
                size--;
            }
        }

        //containsKey
        this.containsKey = function (key) {
            return (key in entry);
        }

        //containsValue
        this.containsValue = function (value) {
            // entry {}
            for (var prop in entry) {
                if (entry[prop] == value) {
                    return true;
                }
            }
            return false;
        }

        //get all values
        this.values = function () {
            var values = new Array(size);
            for (var prop in entry) {
                values.push(entry[prop]);
            }
            return values;
        }

        //get all keys
        this.keys = function () {
            var keys = new Array(size);
            for (var prop in entry) {
                keys.push(prop);
            }
            return keys;
        }

        //size
        this.size = function () {
            return size;
        }
    }

    //标签的默认配置
    var TagDefaultConfig = function () {
        var oThis = this;

        //标签的默认配置
        var tagDefaultConfig = initDefaultConfig();

        oThis.getDefaultConfig = function () {
            return tagDefaultConfig;
        }

        //取得某个标签的默认配置
        oThis.getDefaultConfigById = function (id) {
            if (id == undefined || id == null || id == "") {
                return null;
            }

            var element = _getElement(id);
            if (element == undefined || element == null) {
                return null;
            }

            var tagName = element.tagName.toLowerCase();
            if (tagName == "input") {
                tagName = element.type.toLowerCase();
            }

            return tagDefaultConfig.get(tagName);
        }

        //取得某个标签的默认事件名
        oThis.getDefaultEvent = function (id) {
            if (id == undefined || id == null || id == "") {
                return null;
            }

            var element = _getElement(id);
            if (element == undefined || element == null) {
                return null;
            }

            var tagName = element.tagName.toLowerCase();
            if (tagName == "input") {
                tagName = element.type.toLowerCase();
            }
            var defaultConfig = tagDefaultConfig.get(tagName);
            if (defaultConfig == null) {
                return null;
            }

            return defaultConfig.event;
        }

        //取得某个标签的默认采集属性名
        oThis.getDefaultAttr = function (id) {
            if (id == undefined || id == null || id == "") {
                return null;
            }

            var element = _getElement(id);
            if (element == undefined || element == null) {
                return null;
            }

            var tagName = element.tagName.toLowerCase();
            if (tagName == "input") {
                tagName = element.type.toLowerCase();
            }
            var defaultConfig = tagDefaultConfig.get(tagName);
            if (defaultConfig == null) {
                return null;
            }

            return defaultConfig.attr;
        }

        oThis.initDefaultConfig = function () {
            var isEventConfigDefined = true;
            var isFunctionConfigDefined = true;

            if (sa.events == undefined || sa.events == null || sa.events.length == 0) {
                sa.events = [];
                isEventConfigDefined = false;
            }

            if (sa.customs == undefined || sa.customs == null || sa.customs.length == 0) {
                sa.customs = [];
                isFunctionConfigDefined = false;
            }

            //如果用户自定义了sa的配置，则系统不会进行默认配置
            if (isEventConfigDefined && isFunctionConfigDefined) {
                return false;
            }

            //绑定所有的<input>标签
            setTagConfig("input", isEventConfigDefined, isFunctionConfigDefined);

            //绑定所有的<select>标签
            setTagConfig("select", isEventConfigDefined, isFunctionConfigDefined);

            //绑定所有的<textarea>标签
            setTagConfig("textarea", isEventConfigDefined, isFunctionConfigDefined);

            //绑定所有的<button>标签
            setTagConfig("button", isEventConfigDefined, isFunctionConfigDefined);

            //绑定所有的<div>标签
            setTagConfig("div", true, isFunctionConfigDefined);

            //绑定所有的<span>标签
            setTagConfig("span", isEventConfigDefined, isFunctionConfigDefined);

            //绑定所有的<img>标签
            setTagConfig("img", isEventConfigDefined, isFunctionConfigDefined);

            //绑定所有的<a>标签
            setTagConfig("a", isEventConfigDefined, isFunctionConfigDefined);
        }

        function initDefaultConfig() {
            var tagDefaultConfig = new HashMap();
            tagDefaultConfig.put("text", {
                event: "blur",
                attr: "value"
            });
            tagDefaultConfig.put("password", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("select", {
                event: "change",
                attr: "value"
            });
            tagDefaultConfig.put("radio", {
                event: "click,change",
                attr: "value"
            });
            tagDefaultConfig.put("button", {
                event: "click,keypress",
                attr: "value"
            });
            tagDefaultConfig.put("checkbox", {
                event: "click,change",
                attr: "value"
            });
            tagDefaultConfig.put("color", {
                event: "change",
                attr: "value"
            });
            tagDefaultConfig.put("date", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("datetime", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("datetime-local", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("file", {
                event: "change",
                attr: "value"
            });
            tagDefaultConfig.put("image", {
                event: "click,change",
                attr: "value"
            });
            tagDefaultConfig.put("month", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("number", {
                event: "blur",
                attr: "value"
            });
            tagDefaultConfig.put("range", {
                event: "change",
                attr: "value"
            });
            tagDefaultConfig.put("reset", {
                event: "click,keypress",
                attr: "value"
            });
            tagDefaultConfig.put("search", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("submit", {
                event: "click,keypress",
                attr: "value"
            });
            tagDefaultConfig.put("tel", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("time", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("url", {
                event: "blur",
                attr: "value"
            });
            tagDefaultConfig.put("week", {
                event: "blur,change",
                attr: "value"
            });
            tagDefaultConfig.put("div", {
                event: "click",
                attr: "innerHTML"
            });
            tagDefaultConfig.put("span", {
                event: "click",
                attr: "innerHTML"
            });
            tagDefaultConfig.put("a", {
                event: "mousedown",
                attr: "innerHTML"
            });
            tagDefaultConfig.put("img", {
                event: "click",
                attr: "src"
            });
            tagDefaultConfig.put("select", {
                event: "change",
                attr: "value"
            });
            tagDefaultConfig.put("textarea", {
                event: "blur,change",
                attr: "value"
            });
            //TODO 其他标签的设置.......

            return tagDefaultConfig;
        }

        function setTagConfig(tagName, isEventConfigDefined, isFunctionConfigDefined) {

            //sa.bid.default=${bid};  //所有的采集数据都使用同一个bid
            //sa.bid.event=${bid};    //所有基于HTML标签事件采集的数据都使用同一个bid
            //sa.bid.event.${eventName}=${bid}; //指定基于具体某个HTML标签事件采集的数据都使用同一个bid
            //sa.bid.fun=${bid};  //所有基于JQuery方法采集的数据都使用同一个bid
            //sa.bid.fun.${functionName}=${bid}; //指定基于具体某个JQuery方法采集的数据都使用同一个bid
            var eventBid = sa && sa.bid && sa.bid.event ? sa.bid.event : sa.bid;
            var functionBid = sa && sa.bid && sa.bid.fun ? sa.bid.fun : sa.bid;

            var isEventBidDefined = true;
            var isFunctionBidDefined = true;
            if (eventBid == undefined || eventBid == null || eventBid == "") {
                isEventBidDefined = false;
            }
            if (functionBid == undefined || functionBid == null || functionBid == "") {
                isFunctionBidDefined = false;
            }

            //必须指定bid
            if (!isEventBidDefined && !isFunctionBidDefined) {
                return false;
            }


            var tags = document.getElementsByTagName(tagName);
            var tag;
            var tagConfig;
            for (var i = 0; i < tags.length; i++) {
                tag = tags[i];

                //目前的采集方案只适用于HTML标签设置id属性的情况
                //如果被采集的HTML标签对象没有设置ID属性，该HTML标签的信息将不被采集。
                if (tag.id == undefined || tag.id == null || tag.id == "") {
                    continue;
                }

                if (tagName == "input") {
                    tagConfig = tagDefaultConfig.get(tag.type);
                } else {
                    tagConfig = tagDefaultConfig.get(tagName);
                }

                if (tagConfig == undefined || tagConfig == null) {
                    continue;
                }

                if (!isEventConfigDefined && isEventBidDefined) {
                    var eventNames = tagConfig.event.split(",");
                    // eventNames is Array ,改成for循环,
                    // author 唐少波 88391756 2018-1-12
                    for (var j = 0; j < eventNames.length; j++) {
                        var eventName = eventNames[j];
                        if (eventName == undefined || eventName == null || eventName == "") {
                            continue;
                        }
                        sa.events.push({
                            id: tag.id,
                            event: eventName,
                            attr: tagConfig.attr,
                            bid: eventBid
                        });
                    }
                    // for (x in eventNames) {
                    //     var eventName = eventNames[x];
                    //     if (eventName == undefined || eventName == null || eventName == "") {
                    //         continue;
                    //     }
                    //     sa.events.push({
                    //         id: tag.id,
                    //         event: eventName,
                    //         attr: tagConfig.attr,
                    //         bid: eventBid
                    //     });
                    // }
                }

                if (!isFunctionConfigDefined && isFunctionBidDefined) {
                    sa.customs.push({
                        id: tag.id,
                        attr: tagConfig.attr,
                        bid: functionBid
                    });
                }
            }
        }
    }

    //事件绑定、解除、触发操作
    //【注意事项】这里约定自定义事件带有 'custom' 的前缀（例如：customTest，customAlert）
    var EventManager = function () {
        var oThis = this;

        /**
         * 添加事件监听
         *
         * @param {String} type 事件监听的类型，只在 mouseenter 和 mouseleave 两个事件时需要填写
         *     方法内部需要对此作出处理以实现这两个虚拟事件的判断
         * @param {Function} callback 回调函数
         */
        oThis.addEvent = function (element, type, callback) {
            var _that = this;
            if (element.addEventListener) {
                //supported For Modern Browers and IE9+
                element.addEventListener(type, callback, false);
            } else if (element.attachEvent) {
                //supported For IE5+
                //自定义事件处理
                if (type.indexOf('custom') != -1) {
                    if (isNaN(element[type])) {
                        element[type] = 0;
                    }

                    var fnEv = function (event) {
                        event = event ? event : window.event
                        if (event.propertyName == type) {
                            callback.call(element);
                        }
                    };

                    element.attachEvent('onpropertychange', fnEv);
                    //在元素上存储绑定的 propertychange 的回调，方便移除事件绑定
                    if (!element['callback' + callback]) {
                        element['callback' + callback] = fnEv;
                    }
                } else {
                    //标准事件处理
                    element.attachEvent('on' + type, callback);
                }
            } else {
                //supported For Others
                element['on' + type] = callback;
            }
            return _that;
        }

        /**
         * 移除事件监听
         *
         * @param {String} type 事件监听的类型，只在 mouseenter 和 mouseleave 两个事件时需要填写
         *     方法内部需要对此作出处理以实现这两个虚拟事件的判断
         * @param {Function} callback 回调函数
         */
        oThis.removeEvent = function (element, type, callback) {
            var _that = this;
            if (element.removeEventListener) {
                //supported For Modern Browers and IE9+
                element.removeEventListener(type, callback, false);
            } else if (element.detachEvent) {
                //supported For IE5+
                //自定义事件处理
                if (type.indexOf('custom') != -1) {
                    //移除对相应的自定义属性的监听
                    element.detachEvent('onpropertychange', element['callback' + callback]);

                    //删除储存在 DOM 上的自定义事件的回调
                    element['callback' + callback] = null;
                } else {
                    //标准事件的处理
                    element.detachEvent('on' + type, callback);
                }
            } else {
                //supported For Others
                element['on' + type] = null;
            }

            return _that;
        }

        /**
         * 模拟触发事件
         * @param {String} type 模拟触发事件的事件类型
         * @return {Object} 返回当前的 Kjs 对象
         */
        oThis.triggerEvent = function (element, type) {
            var _that = this;
            try {
                if (element.dispatchEvent) {
                    var evt = document.createEvent('Event');
                    evt.initEvent(type, true, true);
                    element.dispatchEvent(evt);

                } else if (element.fireEvent) {
                    if (type.indexOf('custom') != -1) {
                        element[type]++;
                    } else {
                        element.fireEvent('on' + type);
                    }
                }
            } catch (e) {

            }
            ;

            return _that;
        }
    }

    var Config = function (sa) {
        var oThis = this;

        var utils = new Utils();
        var tagDefaultConfig = new TagDefaultConfig();
        tagDefaultConfig.initDefaultConfig();

        oThis.version = 'SA-1.0.1';
        oThis.PID = (new Date()).getTime();
        oThis.server = sa && sa.server ? sa.server : 'auto';
        oThis.domainName = sa && sa.domainName ? sa.domainName : 'auto';
        oThis.events = sa && sa.events ? sa.events : []; // Synchronous defined events.
        oThis.customs = sa && sa.customs ? sa.customs : [];
        oThis.eventWiths = null;
        oThis.customWiths = null;
        oThis.maxLength = sa && sa.maxLength ? sa.maxLength : 80; //send message's maxLength
        oThis.securityTags = sa && sa.securityTags ? sa.securityTags : ["password"];
        oThis.securityTagIds = sa && sa.securityTagIds ? sa.securityTagIds : [];
        oThis.ignoreTags = sa && sa.ignoreTags ? sa.ignoreTags : [];
        oThis.ignoreTagIds = sa && sa.ignoreTagIds ? sa.ignoreTagIds : [];
        oThis.regEvents = sa && sa.regEvents ? sa.regEvents : [];

        oThis.sync = sa && sa.sync ? true : false;
        oThis.cusVar = sa && sa.cusVar ? sa.cusVar : []; // Synchronous defined var.
        oThis.openAPI = sa && sa.openAPI ? true : false;

        initEventConfig();
        initCustomConfig();

        oThis.isSecurityTag = function (id) {
            if (utils.isEmpty(id)) {
                return false;
            }

            if (utils.isArrayEmpty(oThis.securityTagIds) && utils.isArrayEmpty(oThis.securityTags)) {
                return false;
            }

            //先根据Id进行判断
            if (!utils.isArrayEmpty(oThis.securityTagIds)) {
                var securityTagId;
                //oThis.securityTagIds 是数组不推荐用for in遍历，改成for
                //author:唐少波 88391756 2018-1-12
                for (var i = 0; i < oThis.securityTagIds.length; i++) {
                    securityTagId = oThis.securityTagIds[i];
                    if (utils.isEmpty(securityTagId)) {
                        continue;
                    }

                    if (securityTagId == id) {
                        return true;
                    }
                }


                // for (var x in oThis.securityTagIds) {
                //     securityTagId = oThis.securityTagIds[x];
                //     if (utils.isEmpty(securityTagId)) {
                //         continue;
                //     }

                //     if (securityTagId == id) {
                //         return true;
                //     }
                // }
            }

            //再根据tagName进行判断
            if (utils.isArrayEmpty(oThis.securityTags)) {
                return false;
            }

            var element = _getElement(id);
            if (element == undefined || element == null) {
                return false;
            }

            var tagName = element.tagName.toLowerCase();
            if (tagName == "input") {
                tagName = element.type.toLowerCase();
            }

            var securityTagName;
            //oThis.securityTags 是数组不推荐用for in遍历，改成for
            //author:唐少波 88391756 2018-1-12
            for (var i = 0; i < oThis.securityTags.length; i++) {
                securityTagName = oThis.securityTags[i];
                if (utils.isEmpty(securityTagName)) {
                    continue;
                }

                if (tagName == securityTagName) {
                    return true;
                }
            }
            // for (var x in oThis.securityTags) {
            //     securityTagName = oThis.securityTags[x];
            //     if (utils.isEmpty(securityTagName)) {
            //         continue;
            //     }

            //     if (tagName == securityTagName) {
            //         return true;
            //     }
            // }

            return false;
        }

        oThis.isIgnoreTag = function (id) {
            if (utils.isEmpty(id)) {
                return false;
            }

            if (utils.isArrayEmpty(oThis.ignoreTagIds) && utils.isArrayEmpty(oThis.ignoreTags)) {
                return false;
            }

            //先根据Id进行判断
            //oThis.ignoreTagIds 是数组不推荐用for in遍历，改成for
            //author:唐少波 88391756 2018-1-12
            if (!utils.isArrayEmpty(oThis.ignoreTagIds)) {
                var ignoreTagId;
                for (var i = 0; i < oThis.ignoreTagIds.length; i++) {
                    ignoreTagId = oThis.ignoreTagIds[i];
                    if (utils.isEmpty(ignoreTagId)) {
                        continue;
                    }

                    if (ignoreTagId == id) {
                        return true;
                    }
                }

            }
            // if (!utils.isArrayEmpty(oThis.ignoreTagIds)) {
            //     var ignoreTagId;
            //     for (var x in oThis.ignoreTagIds) {
            //         ignoreTagId = oThis.ignoreTagIds[x];
            //         if (utils.isEmpty(ignoreTagId)) {
            //             continue;
            //         }

            //         if (ignoreTagId == id) {
            //             return true;
            //         }
            //     }
            // }

            //再根据tagName进行判断
            if (utils.isArrayEmpty(oThis.ignoreTags)) {
                return false;
            }

            var element = _getElement(id);
            if (element == undefined || element == null) {
                return false;
            }

            var tagName = element.tagName.toLowerCase();
            if (tagName == "input") {
                tagName = element.type.toLowerCase();
            }

            var ignoreTagName;

            //oThis.ignoreTags 是数组不推荐用for in遍历，改成for
            //author:唐少波 88391756 2018-1-12
            for (var j = 0; j < oThis.ignoreTags.length; j++) {
                ignoreTagName = oThis.ignoreTags[j];
                if (utils.isEmpty(ignoreTagName)) {
                    continue;
                }

                if (tagName == ignoreTagName) {
                    return true;
                }
            }
            // for (var x in oThis.ignoreTags) {
            //     ignoreTagName = oThis.ignoreTags[x];
            //     if (utils.isEmpty(ignoreTagName)) {
            //         continue;
            //     }

            //     if (tagName == ignoreTagName) {
            //         return true;
            //     }
            // }

            return false;
        }

        //标准事件的配置
        function initEventConfig() {
            var eventHashMap = new HashMap();
            var eventWithHashMap = new HashMap();
            if (!utils.isArrayEmpty(oThis.events)) {
                var eventConfig;
                //将for in遍历，改成for
                //author:唐少波 88391756 2018-1-12
                for (var x = 0; x < oThis.events.length; x++) {
                    eventConfig = oThis.events[x];
                    if (eventConfig.id == undefined || eventConfig.id == null || eventConfig.id == "") {
                        continue;
                    }

                    var ids = eventConfig.id.split(",");
                    var eventNames = eventConfig.event;
                    var attrName = eventConfig.attr;
                    var bid = eventConfig.bid ? eventConfig.bid : (sa && sa.bid && sa.bid.event ? sa.bid.event : sa.bid);
                    var withElements = eventConfig.withs;

                    var id;
                    //将for in遍历，改成for
                    //author:唐少波 88391756 2018-1-12
                    for (var i = 0; i < ids.length; i++) {
                        id = ids[i];
                        if (utils.isEmpty(id)) {
                            continue;
                        }

                        if (eventHashMap.containsKey(id)) {
                            if (utils.isEmpty(eventNames)) {
                                eventNames = tagDefaultConfig.getDefaultEvent(id);
                            }

                            if (utils.isEmpty(eventNames)) {
                                continue;
                            }

                            var _eventNameList = new _Set();
                            var _events = null;
                            var eventNamesArr = eventNames.split(",");
                            //将for in遍历，改成for
                            //author:唐少波 88391756 2018-1-12
                            for (var y = 0; y < eventNamesArr.length; y++) {
                                if (utils.isEmpty(eventNamesArr[y])) {
                                    continue;
                                }
                                if (!_eventNameList.contains(eventNamesArr[y])) {
                                    _eventNameList.add(eventNamesArr[y]);
                                    if (_events == null) {
                                        _events = eventNamesArr[y];
                                    } else {
                                        _events = _events + "," + eventNamesArr[y];
                                    }
                                }
                            }

                            if (_eventNameList.size() > 0) {
                                var _eventConfig = eventHashMap.get(id);
                                var _eventNames = _eventConfig.event;
                                var _eventNamesArr = _eventNames.split(",");
                                for (var z = 0; z < _eventNamesArr.length; z++) {
                                    if (utils.isEmpty(_eventNamesArr[z])) {
                                        continue;
                                    }
                                    if (!_eventNameList.contains(_eventNamesArr[z])) {
                                        _eventNameList.add(_eventNamesArr[z]);
                                        if (_events == null) {
                                            _events = _eventNamesArr[z];
                                        } else {
                                            _events = _events + "," + _eventNamesArr[z];
                                        }
                                    }
                                }

                                if (_events != null) {
                                    if (utils.isEmpty(attrName)) {
                                        attrName = tagDefaultConfig.getDefaultAttr(id);
                                    }
                                    eventHashMap.put(id, {
                                        id: id,
                                        event: _events,
                                        attr: attrName,
                                        bid: bid
                                    });
                                }
                            }
                        } else {
                            if (utils.isEmpty(eventNames)) {
                                eventNames = tagDefaultConfig.getDefaultEvent(id);
                            }

                            if (utils.isEmpty(eventNames)) {
                                continue;
                            }

                            if (utils.isEmpty(attrName)) {
                                attrName = tagDefaultConfig.getDefaultAttr(id);
                            }

                            eventHashMap.put(id, {
                                id: id,
                                event: eventNames,
                                attr: attrName,
                                bid: bid
                            });
                        }

                        //附带采集信息
                        if (!utils.isEmpty(withElements) && !utils.isEmpty(eventNames)) {
                            var eventNamesArr = eventNames.split(",");
                            var eventName, key;
                            //将for in遍历，改成for
                            //author:唐少波 88391756 2018-1-12
                            for (var l = 0; l < eventNamesArr.length; l++) {
                                eventName = eventNamesArr[l];
                                if (utils.isEmpty(eventName)) {
                                    continue;
                                }
                                key = id + "&" + eventName;
                                getWithElementsConfig(eventWithHashMap, key, withElements);
                            }
                        }

                    }
                }
            }
            oThis.events = eventHashMap;
            oThis.eventWiths = eventWithHashMap;
            sa.events = null;
        }

        //自定义（JQuery）方法配置
        function initCustomConfig() {
            var customHashMap = new HashMap();
            var customWithHashMap = new HashMap();
            if (!utils.isArrayEmpty(oThis.customs)) {
                var customConfig;
                //将for in遍历，改成for
                //author:唐少波 88391756 2018-1-12
                for (var x = 0; x < oThis.customs.length; x++) {
                    customConfig = oThis.customs[x];
                    if (utils.isEmpty(customConfig.id)) {
                        continue;
                    }

                    var ids = customConfig.id.split(",");
                    var attrName = customConfig.attr;
                    var bid = customConfig.bid ? customConfig.bid : (sa && sa.bid && sa.bid.fun ? sa.bid.fun : sa.bid);
                    var withElements = customConfig.withs;
                    var id;
                    //将for in遍历，改成for
                    //author:唐少波 88391756 2018-1-12
                    for (var y = 0; y < ids.length; y++) {
                        id = ids[y];
                        if (utils.isEmpty(id)) {
                            continue;
                        }

                        if (utils.isEmpty(attrName)) {
                            attrName = tagDefaultConfig.getDefaultAttr(id);
                        }

                        if (utils.isEmpty(attrName)) {
                            continue;
                        }

                        customHashMap.put(id, {
                            id: id,
                            attr: attrName,
                            bid: bid
                        });

                        //附带采集信息
                        if (!utils.isEmpty(withElements)) {
                            getWithElementsConfig(customWithHashMap, id, withElements);
                        }
                    }
                }
            }
            oThis.customs = customHashMap;
            oThis.customWiths = customWithHashMap;
            sa.customs = null;
        }

        //取得附带采集的配置信息
        function getWithElementsConfig(withHashMap, key, withElements) {
            if (withHashMap.containsKey(key)) {
                var withElementIdList = new _Set();
                var withConfig = _getWithElementsConfig(withElements, withElementIdList);

                if (withConfig != null) {
                    var withConfigArr = new Array();
                    if (utils.isObject(withConfig.config)) {
                        withConfigArr.push(withConfig.config);
                    } else {
                        withConfigArr = withConfig.config;
                    }
                    var _withElements = withHashMap.get(key);
                    var _withConfig = _getWithElementsConfig(_withElements, withConfig.idList);
                    if (_withConfig != null) {
                        if (utils.isObject(_withConfig.config)) {
                            withConfigArr.push(_withConfig.config);
                        } else {
                            for (j in _withConfig.config) {
                                withConfigArr.push(_withConfig.config[j]);
                            }
                        }
                    }

                    withHashMap.put(key, withConfigArr);
                }
            } else {
                var withElementIdList = new _Set();
                var withElementIds = null;
                var withConfig = _getWithElementsConfig(withElements, withElementIdList);

                if (withConfig != null) {
                    var withConfigArr = new Array();
                    if (utils.isObject(withConfig.config)) {
                        withConfigArr.push(withConfig.config);
                    } else {
                        withConfigArr = withConfig.config;
                    }
                    withHashMap.put(key, withConfigArr);
                }
            }
        }

        function _getWithElementsConfig(withElements, withElementIdList) {
            if (withElements == undefined || withElements == null) {
                return null;
            }

            var withElementsConfig = new Array();
            if (withElementIdList == undefined || withElementIdList == null) {
                withElementIdList = new _Set();
            }

            var withElementArr = new Array();
            if (utils.isObject(withElements)) {
                withElementArr.push(withElements);
            } else if (utils.isArray(withElements)) {
                withElementArr = withElements;
            } else {
                return null;
            }
            var withElement, withElementIdsArr, withElementIds = null,
                withElementId, withElementAttr;
            //将for in遍历，改成for
            //author:唐少波 88391756 2018-1-12
            for (var j = 0; j < withElementArr.length; j++) {
                withElementIds = null;
                withElement = withElementArr[j];
                if (utils.isEmpty(withElement)) {
                    continue;
                }

                if (utils.isEmpty(withElement.id)) {
                    continue;
                }

                withElementAttr = withElement.attr;
                withElementIdsArr = withElement.id.split(",");
                //将for in遍历，改成for
                //author:唐少波 88391756 2018-1-12
                for (var k = 0; k < withElementIdsArr.length; k++) {
                    withElementId = withElementIdsArr[k];
                    if (utils.isEmpty(withElementId)) {
                        continue;
                    }

                    if (!withElementIdList.contains(withElementId)) {
                        withElementIdList.add(withElementId);
                        if (withElementIds == null) {
                            withElementIds = withElementId;
                        } else {
                            withElementIds = withElementIds + "," + withElementId;
                        }
                        if (utils.isEmpty(withElementAttr)) {
                            withElementAttr = tagDefaultConfig.getDefaultAttr(withElementId);
                        }
                    }
                }

                if (withElementIds != null) {
                    withElementsConfig.push({
                        id: withElementIds,
                        attr: withElementAttr
                    });
                }
            }

            if (utils.isArrayEmpty(withElementIdList)) {
                return null;
            }

            return {config: withElementsConfig, idList: withElementIdList, ids: withElementIds};
        }
    };

    var Utils = function () {
        var oThis = this;
        oThis.isNull = function (obj) {
            return (undefined == obj || '' == obj || _empty == obj);
        }

        oThis.isEmpty = function (obj) {
            return (obj == undefined || obj == null || obj == "");
        }

        oThis.isArrayEmpty = function (obj) {
            return (obj == undefined || obj == null || obj.length == 0);
        }

        oThis.isObject = function (obj) {
            return (typeof (obj)).toLowerCase() == 'object' && !oThis.isArray(obj);
        }

        oThis.isArray = function (obj) {
            return Object.prototype.toString.call(obj).toLowerCase() == '[object array]';
        }
        oThis.isFunction = function (obj) {
            return (typeof (fun)).toLowerCase() == 'function';
        }
        oThis.isContain = function (obj, str) {
            return (obj[_str_indexOf](str) > -1);
        }
        oThis.encode = function (uri, isAll) {
            return isAll ? encodeURIComponent(uri) : encodeURIComponent(uri);
        }
        oThis.decode = function (uri, isAll) {
            return isAll ? decodeURIComponent(uri) : decodeURI(uri);
        }
        oThis.pick = function (map, key, separator) {
            var result = "-",
                idx;
            if (!oThis.isNull(map) && !oThis.isNull(key) && !oThis.isNull(separator)) {
                idx = map.indexOf(key);
                if (idx > -1) {
                    var endIdx = map[_str_indexOf](separator, idx);
                    if (endIdx < 0) {
                        endIdx = map.length;
                    }
                    result = map[_str_sub](idx + key[_str_indexOf]('=') + 1, endIdx);
                }
            }
            return result;
        }
        oThis.random = function () {
            return Math.round(Math.random() * 2147483647);
        }
        oThis.sendByImg = function (url) {
            var n = oThis.random(),
                img = new Image(1, 1);
            _win['__n'] = img;
            img.onload = img.onerror = function () {
                _win['__n'] = null;
                img = null;
            }
            img.src = url + '&i=' + n;
        }
        oThis.getCookie = function (name) {
            var arrStr = document.cookie.split("; ");
            for (var i = 0; i < arrStr.length; i++) {
                var temp = arrStr[i].split("=");
                if (temp[0] == name) return unescape(temp[1] ? temp[1] : _empty);
            }

            return _empty;
        }

        //过滤HTML标签以及&nbsp;
        oThis.removeHTMLTag = function (str) {
            if (oThis.isEmpty(str)) {
                return str;
            }
            str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
            str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
            str = str.replace(/\n[\s| | ]*\r/g, '\n'); //去除多余空行
            str = str.replace(/&nbsp;/ig, ''); //去掉&nbsp;
            return str;
        }

        //去掉回车换行
        oThis.removeEnterWrap = function (str) {
            if (oThis.isEmpty(str)) {
                return str;
            }
            str = str.replace(/[\r\n]/g, ""); //去掉回车换行
            str = str.replace(/[\r]/g, ""); //去掉回车
            str = str.replace(/[\n]/g, ""); //去掉换行
            return str;
        }

        oThis.getMaskCode = function (str) {
            var MASK_CODE = "*"; //常量通配符掩码【*】
            if (oThis.isEmpty(str)) {
                return str;
            }

            var code = "";
            for (var i = 0; i < str.length; i++) {
                code = code + "*";
            }
            return code;
        }

        //取得字符串输入的字符类型
        oThis.getStrTypes = function (str) {
            var NUMBER = "9"; //常量通配符【数字】
            var LETTER = "a"; //常量通配符【字母】
            var SPACE = "s"; //常量通配符【空格】
            var CHINESE_CHAR = "c"; //常量通配符【汉字】
            var SPECIAL_CHAR = "$"; //常量通配符【特殊字符】
            var UNKNOW_CHAR = "?"; //常量通配符【未知字符】

            var strTypes = "";
            if (oThis.isEmpty(str)) {
                return strTypes;
            }

            for (var i = 0; i < str.length; i++) {
                var val = str.substr(i, 1);
                if (oThis.isNumber(val)) {
                    strTypes = strTypes + NUMBER;
                } else if (oThis.isLetter(val)) {
                    strTypes = strTypes + LETTER;
                } else if (oThis.isSpace(val)) {
                    strTypes = strTypes + SPACE;
                } else if (oThis.isSpecialCharacter(val)) {
                    strTypes = strTypes + SPECIAL_CHAR;
                } else if (oThis.isChineseCharacter(val)) {
                    strTypes = strTypes + CHINESE_CHAR;
                } else {
                    strTypes = strTypes + UNKNOW_CHAR;
                }
            }
            return strTypes;
        }

        //数字校验
        oThis.isNumber = function (val) {
            var reg = /^[0-9]$/;
            return reg.test(val);
        }

        //字母校验
        oThis.isLetter = function (val) {
            var reg = /^[A-Za-z]+$/;
            return reg.test(val);
        }

        //空格校验
        oThis.isSpace = function (val) {
            var reg = /\s/;
            return reg.test(val);
        }

        //汉字校验
        oThis.isChineseCharacter = function (val) {
            var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
            return reg.test(val);
        }

        //特殊字符校验
        oThis.isSpecialCharacter = function (val) {
            var reg = /[`~!@#$%^&*()-+_=|{}':;',"\[\]\\.<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]/;
            return reg.test(val);
        }
    };

    Utils.Base64 = function () {
        var oThis = this;
        // code table
        var _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

        oThis.encode = function (input) {
            var output = '';
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;
            input = _utf8_encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output +
                    _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                    _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
            }
            return output;
        };

        oThis.decode = function (input) {
            var output = '';
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
            while (i < input.length) {
                enc1 = _keyStr.indexOf(input.charAt(i++));
                enc2 = _keyStr.indexOf(input.charAt(i++));
                enc3 = _keyStr.indexOf(input.charAt(i++));
                enc4 = _keyStr.indexOf(input.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
            }
            output = _utf8_decode(output);
            return output;
        };

        var _utf8_encode = function (string) {
            string = string.replace(/\r\n/g, '\n');
            var utftext = '';
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }

            }
            return utftext;
        };

        var _utf8_decode = function (utftext) {
            var string = '';
            var i = 0;
            var c = c1 = c2 = 0;
            while (i < utftext.length) {
                c = utftext.charCodeAt(i);
                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                } else if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                } else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            }
            return string;
        };
    }

    /** SynchronousTracker Tracker End **/
    var AsynchronousTracker = function (config, utils) {
        var oThis = this;
        var Config = function () {
            var oThis = this;
            // oThis.BID = (sa && sa.BID ? sa.BID : 'SA-BID');
        }

        var Utils = function (config) {
            var oThis = this;

            oThis.addEvent = function (element, eventName, callback, useCapture) {
                if (_win.addEventListener) {
                    element.addEventListener(eventName, callback, !!useCapture);
                } else {
                    _win.attachEvent('on' + eventName, callback);
                }
            }

            ////生成页面访问唯一标识pvId
            oThis.createPageViewId = function () {
                if (!sa.pvId) {
                    sa.pvId = _getOnlyId();
                }

                return sa.pvId;
            }

            oThis.getVisitorId = function () {
                var visitorID = _empty;
                var snaCookInfo = oThis.getCookie('_snma');
                if (snaCookInfo && snaCookInfo != _empty) {
                    var snaCookInfoArr = snaCookInfo.split(_split);
                    if (snaCookInfoArr.length >= 2) {
                        visitorID = snaCookInfoArr.slice(1, 2);
                    }
                }
                return visitorID;
            }

            oThis.getSessionId = function () {
                var sessionID = _empty;
                var snmbCookieInfo = oThis.getCookie('_snmb');
                if (snmbCookieInfo && snmbCookieInfo != _empty) {
                    sessionID = snmbCookieInfo.split(_split).slice(0, 1);
                }
                return sessionID;
            }

            oThis.getCustNo = function () {
                return oThis.getCookie("custno") || _empty;
            }

            oThis.getLoginUserName = function () {
                return oThis.getCookie('idsLoginUserIdLastTime') || _empty;
            }

            oThis.getCommonID = function () {
                //CookieName,Cookie里的值用"|"分隔
                var sna = '_snma',
                    snb = '_snmb',
                    snz = "_snmz",
                    _snmp = "_snmp";

                //访问者唯一标识
                var visitorID = _empty;
                var snaCookInfo = oThis.getCookie(sna);
                if (snaCookInfo != _empty) {
                    var snaCookInfoArr = snaCookInfo.split(_split);
                    if (snaCookInfoArr.length >= 2) {
                        visitorID = snaCookInfoArr.slice(1, 2);
                    }
                }

                //会员唯一标识
                var memberID = oThis.getCookie("custno");

                //会话唯一标识
                var sessionID = oThis.getCookie(snb).split(_split).slice(0, 1);

                //pvId
                var pvId = oThis.createPageViewId();

                //问者唯一标识|会员唯一标识|会话唯一标识|PV
                return visitorID + _split + memberID + _split + sessionID + _split + pvId;
            }

            oThis.getServer = function () {
                var url = __ut.getJsUrl("sa-analytics.js");
                if (__conf.isSaPrd) {
                    return "sa.suning.cn";
                } else {
                    if (url && url.indexOf("pre") > -1) {
                        return "saprexg.cnsuning.com";
                    } else {
                        return "sasit.suning.cn";
                    }
                }
            };

            oThis.getProtocol = function () {
                return 'https:' == _doc[_loc].protocol ? 'https://' : 'http://';
            }

            oThis.sendMessage = function () {
                if (utils.isArrayEmpty(config.events)) {
                    return false;
                }

                var theEvent = window.event || arguments.callee.caller.arguments[0];
                var element = theEvent.srcElement ? theEvent.srcElement : theEvent.target;

                var id = element.id;
                if (!config.events.containsKey(id)) {
                    return false;
                }

                var eventConfig = config.events.get(id);
                if (eventConfig == undefined || eventConfig == null) {
                    return false;
                }

                var value = element[eventConfig.attr];
                if (eventConfig.attr == "innerHTML") {
                    value = utils.removeHTMLTag(value);
                }
                value = utils.removeEnterWrap(value);

                if (config.isSecurityTag(id)) {
                    value = utils.getMaskCode(value);
                }

                if (!utils.isEmpty(value)) {
                    if (value.toString().length > config.maxLength) {
                        value = value.toString().substr(0, config.maxLength);
                    }
                    value = utils.encode(value);
                }

                var params = id + "=" + value;

                if (!utils.isArrayEmpty(config.eventWiths)) {
                    var key = id + "&" + theEvent.type;
                    var withConfigsArr = new Array();
                    var withConfigs = config.eventWiths.get(key);
                    if (utils.isObject(withConfigs)) {
                        withConfigsArr.push(withConfigs);
                    } else {
                        withConfigsArr = withConfigs;
                    }
                    if (!utils.isArrayEmpty(withConfigsArr)) {
                        var withConfig, withInfo = "";
                        //将for in遍历，改成for
                        //author:唐少波 88391756 2018-1-12
                        for (var x = 0; x < withConfigsArr.length; x++) {
                            withConfig = withConfigsArr[x];
                            if (withConfig == null) {
                                continue;
                            }

                            withInfo = oThis.getWithInfo(withConfig);
                            if (withInfo != "") {
                                params = params + "&" + withInfo;
                            }
                        }
                    }
                }

                if (!utils.isEmpty(params)) {
                    params = params + "&type=standard";
                    oThis.sendByImg(params, eventConfig.bid);
                }
            }

            oThis.getWithInfo = function (withConfig) {
                var info = "";
                if (withConfig == undefined || withConfig == null) {
                    return info;
                }

                var ids = withConfig.id;
                if (oThis.isEmpty(ids)) {
                    return info;
                }

                ids = ids.split(",");
                var id, withElement, value = "",
                    getWhenHide = false;
                var idList = new _Set();
                //将for in遍历，改成for
                //author:唐少波 88391756 2018-1-12
                for (var x = 0; x < ids.length; x++) {
                    id = ids[x];
                    if (oThis.isEmpty(id)) {
                        continue;
                    }

                    //禁止同一标签被重复采集
                    if (idList.contains(id)) {
                        continue;
                    }
                    idList.add(id);

                    withElement = _getElement(id);
                    if (withElement == undefined || withElement == null) {
                        continue;
                    }

                    value = "";
                    getWhenHide = false;
                    if (!oThis.isEmpty(withConfig.gethide)) {
                        getWhenHide = withConfig.gethide;
                    }
                    if (withElement.style.display == "none") {
                        if (getWhenHide) {
                            value = withElement[withConfig.attr];
                        }
                    } else {
                        value = withElement[withConfig.attr];
                    }

                    if (withConfig.attr == "innerHTML") {
                        value = utils.removeHTMLTag(value);
                    }
                    value = utils.removeEnterWrap(value);

                    if (config.isSecurityTag(id)) {
                        value = utils.getMaskCode(value);
                    }

                    if (!utils.isEmpty(value)) {
                        if (value.toString().length > config.maxLength) {
                            value = value.toString().substr(0, config.maxLength);
                        }
                        value = utils.encode(value);
                    }

                    if (value != "") {
                        if (info == "") {
                            info = id + "=" + value;
                        } else {
                            info = info + "&" + id + "=" + value;
                        }
                    }
                }

                return info;
            }

            oThis.sendByImg = function (params, bid) {
                try {
                    var _commonID = oThis.getCommonID(),
                        _BID = (bid ? bid : '-'),
                        _PID = (new Date()).getTime(), //数据采集时间戳
                        _server = oThis.getServer(),
                        _protocol = oThis.getProtocol(),
                        _loginUserName = Utils.prototype.getCookie('idsLoginUserIdLastTime'), // Write the login username to the default field.
                        _loginUserName = _loginUserName ? _loginUserName : _empty,
                        _version = config.version;
                    //【数据格式】：访问者唯一标识|会员唯一标识|会话唯一标识|PV|idsLoginUserIdLastTime|数据采集时间|业务唯一标识|业务信息KEY=业务信息Value&其他信息
                    //params = 'common=' + _commonID + _split + _loginUserName + _split + _PID + _split + _BID + '&' + params + '&v=' + _version;
                    params = _commonID + _split + _loginUserName + _split + _PID + _split + _BID + _split + params + '&v=' + _version;

                    // _server && utils.sendByImg(_protocol + _server + '/logc.gif?' + params);
                    _server && Utils.prototype.sendByImg.call(oThis, _protocol + _server + '/logc.gif?' + params);
                } catch (e) {
                }
            }

            oThis.sendByImgV2 = function (params, bid) {
                try {
                    var visitorID = oThis.getVisitorId(), // 访问者唯一标识
                        custno = oThis.getCustNo(), // 会员唯一标识
                        sessionID = oThis.getSessionId(), // 会话唯一标识
                        pvId = oThis.createPageViewId(); // pvId
                    // 20181015 新增字段
                    var siteid = document.getElementsByTagName("meta")["siteid"] ? document.getElementsByTagName("meta")["siteid"]["content"] : "";
                    _BID = bid || '-', // 产品线标识
                        _PID = (new Date()).getTime(), //数据采集时间戳
                        _server = oThis.getServer(), // server uri
                        _protocol = oThis.getProtocol(), // protocol
                        _loginUserName = oThis.getLoginUserName(), // idsLoginUserIdLastTime
                        _version = config.version;
                    params = 'vid=' + visitorID +
                        '&sid=' + sessionID +
                        '&pvid=' + pvId +
                        '&ct=' + _PID +
                        '&bizid=' + _BID +
                        params +
                        '&v=' + _version +
                        '&siteid=' + siteid;
                    _server && Utils.prototype.sendByImg.call(oThis, _protocol + _server + '/excp.gif?' + params);
                } catch (e) {
                }
            }

            function _getOnlyId() {
                var now = new Date();
                var m = Math.round(100000 * Math.random());
                var onlyId = now.getTime().toString().concat(m);
                return onlyId;
            }
        }

        Config.prototype = config;
        Utils.prototype = utils;

        // Reslove The standard event.
        var StandardEvent = function (config, utils, eventManager) {
            var oThis = this;

            oThis.bindEvent = function () {
                if (config.events == undefined || config.events == null) {
                    return false;
                }

                if (config.events.keys() == null || config.events.keys().length == 0) {
                    return false;
                }
                var standardEvent, element, eventName;
                var eventNameArr;
                for (var key in config.events.getThis()) {
                    standardEvent = config.events.get(key);
                    if (standardEvent == undefined || standardEvent == null) {
                        continue;
                    }

                    if (utils.isEmpty(standardEvent.id)) {
                        continue;
                    }

                    element = _getElement(standardEvent.id);
                    if (element == undefined || element == null) {
                        continue;
                    }

                    if (utils.isEmpty(standardEvent.event)) {
                        continue;
                    }

                    eventNameArr = standardEvent.event.split(",");
                    //将for in遍历，改成for
                    //author:唐少波 88391756 2018-1-12
                    for (var x = 0; x < eventNameArr.length; x++) {
                        eventName = eventNameArr[x];
                        if (utils.isEmpty(eventName)) {
                            continue;
                        }

                        eventManager.addEvent(element, eventName, function () {
                            utils.sendMessage();
                        });
                    }
                }
            }
        }

        var CustomEvent = function (config, utils) {
            var oThis = this;

            this.sendEvent = function (id) {

                if (utils.isArrayEmpty(config.customs)) {
                    return false;
                }

                if (!config.customs.containsKey(id)) {
                    return false;
                }

                var custom = config.customs.get(id);
                if (custom == undefined || custom == null) {
                    return false;
                }

                //如果主对象不存在，连带采集对象的信息也不采集
                var element = _getElement(id);
                if (element == undefined || element == null) {
                    return false;
                }

                var params = "";
                var value = element[custom.attr];
                if (!utils.isEmpty(value)) {
                    if (custom.attr == "innerHTML") {
                        value = utils.removeHTMLTag(value);
                    }
                    value = utils.removeEnterWrap(value);

                    if (config.isSecurityTag(id)) {
                        value = utils.getMaskCode(value);
                    }
                    if (!utils.isEmpty(value)) {
                        if (value.toString().length > config.maxLength) {
                            value = value.toString().substr(0, config.maxLength);
                        }
                        value = utils.encode(value);
                    }
                    params = id + "=" + value;
                }

                if (!utils.isArrayEmpty(config.customWiths)) {
                    var withConfigs = config.customWiths.get(id);
                    if (!utils.isArrayEmpty(withConfigs)) {
                        var withConfig, withInfo = "";
                        for (x in withConfigs) {
                            withConfig = withConfigs[x];
                            if (withConfig == null) {
                                continue;
                            }
                            withInfo = utils.getWithInfo(withConfig);
                            if (withInfo != "") {
                                if (params == "") {
                                    params = params + withInfo;
                                } else {
                                    params = params + "&" + withInfo;
                                }
                            }
                        }
                    }
                }

                if (!utils.isEmpty(params)) {
                    params = params + "&type=custom";
                    utils.sendByImg(params, custom.bid);
                }
            }
        }

        var OpenAPI = function (config, utils) {
            var oThis = this;
            //主动发送信息API
            //inputId：输入框或者其他导致提示/错误信息显示的HTML标签ID
            //message：提示/错误信息
            //inputAttr：输入框或者其他导致提示/错误信息显示的HTML标签的属性
            //messageId：提示/错误信息的标签ID
            //bid: 业务ID
            oThis.sendMessage = function (inputId, message, inputAttr, messageId, bid) {

                if (inputId == undefined || inputId == null || inputId == "") {
                    return false;
                }

                if (message == undefined || message == null) {
                    return false;
                }

                if (bid == undefined || bid == null || bid == "") {
                    bid = sa.bid;
                }

                if (inputAttr == undefined || inputAttr == null || inputAttr == "") {
                    var tagDefaultConfig = new TagDefaultConfig();
                    var defConfig = tagDefaultConfig.getDefaultConfigById(inputId);
                    if (defConfig) {
                        inputAttr = defConfig.attr;
                    } else {
                        inputAttr = "value";
                    }
                }

                if (messageId == undefined || messageId == null || messageId == "") {
                    messageId = "_saMsgId";
                }

                var params = '';
                var element = _getElement(inputId),
                    value = "";
                if (element) {
                    value = element[inputAttr];
                }
                if (!value) {
                    value = "";
                }

                if (inputAttr == "innerHTML") {
                    value = utils.removeHTMLTag(value);
                }
                value = utils.removeEnterWrap(value);

                if (config.isSecurityTag(inputId)) {
                    value = utils.getMaskCode(value);
                }

                if (!utils.isEmpty(value)) {
                    if (value.toString().length > config.maxLength) {
                        value = value.toString().substr(0, config.maxLength);
                    }
                    value = utils.encode(value);
                }

                var params = inputId + "=" + value;
                message = utils.encode(message);
                params = params + '&' + messageId + '=' + message;

                if (params != '') {
                    params = params + "&type=standard";
                    utils.sendByImg(params, bid);
                }
            }
            // 新版本发送message的接口
            oThis.sendMsgV2 = function (data) {
                var bid = data.bid || sa.bid;

                var type_name = data.type_name || _empty;
                var error_type = data.error_type || _empty;
                var error_code = data.error_code;
                var error_detail = data.error_detail;
                var member_id = data.member_id;
                var member_level = data.member_level;
                var region = data.region;
                var url = document.location.href; // current page url
                var ua = navigator.userAgent;
                var params = '';
                //20180528 新增字段
                var issuper = data.issuper;

                //platform_type--(type)
                var platform_type = "web";
                var platformType = document.getElementById("resourceType");
                if (platformType != undefined && platformType != null) {
                    try {
                        platform_type = platformType.value ? platformType.value : "web";
                    } catch (e) {
                    }
                }
                //from_url--(furl)
                var from_url = __ut._getFromUrl();
                from_url = __ut._encode(from_url);

                //pageName -- (pagename)
                var pgnm = document.getElementById('pagename');
                var pageName = pgnm ? pgnm.value : '';
                //埋点 pagename 拼接 inpltid
                //如果 pagename 中已拼接 inpltid 则跳过
                // if (pageName.indexOf('inpltid') === -1) {
                //     var inpltid = __ut.getMetaVal('inpltid');
                //     //inpltid 埋点有值
                //     if (inpltid) {
                //         //如果 pagename 没有值则直接拼接 inpltid
                //         pageName = pageName ? ('inpltid=' + inpltid + ';' + pageName) : ('inpltid=' + inpltid);
                //     }
                // }

                //******************************************************************************************
                params = params + '&typname=' + type_name +
                    '&errtype=' + error_type +
                    '&errcode=' + error_code +
                    '&errdetail=' + encodeURIComponent(error_detail) +
                    '&mbrid=' + member_id +
                    '&mbrlevel=' + member_level +
                    '&region=' + region +
                    '&url=' + encodeURIComponent(url) +
                    "&ua=" + encodeURIComponent(ua) +
                    "&issuper=" + issuper +
                    "&type=" + platform_type +
                    "&furl=" + from_url +
                    '&pagename=' + pageName;

                //inpltid -- (inpltid)
                var inpltid = __ut.getMetaVal('inpltid');
                //inpltid 埋点有值
                if (inpltid) {
                    params = params + "&inpltid=" + inpltid;
                }

                utils.sendByImgV2(params, bid);
            }

            //发送Json数据，支持多条数据的发送
            oThis.sendJson = function (obj, bid) {
                var params = '';
                if (bid == undefined || bid == null || bid == "") {
                    bid = sa.bid;
                }

                // Support the json object.
                if ((typeof (obj)).toLowerCase() == 'object' && !utils.isArray(obj)) {
                    for (x in obj) {
                        params = params + utils.encode(x, true) + '=' + utils.encode(obj[x], true) + '&';
                    }
                    params = params[_str_sub](0, params.length - 1);

                }

                if (params != '') {
                    params = params + "&type=custom";
                    utils.sendByImg(params, bid);
                }
            }
        }

        oThis.startTracker = function () {
            var _config = new Config(config);
            var _utils = new Utils(_config);
            var eventManager = new EventManager();
            var _standardEvent = new StandardEvent(_config, _utils, eventManager);
            sa.trriger = new CustomEvent(_config, _utils);
            var _openAPI = new OpenAPI(_config, _utils);

            _config.events && _config.events.size() > 0 && _standardEvent.bindEvent();
            config.openAPI ? (sa.openAPI = {}, sa.openAPI.sendMessage = _openAPI.sendMessage) : false;
            config.openAPI ? (sa.openAPI = sa.openAPI || {}, sa.openAPI.sendMsgV2 = _openAPI.sendMsgV2) : false;
        }
    }

    //--------------------------------------------------------------------
    var config = new Config(sa),
        utils = new Utils();
    //异步采集入口
    var _asynchronousTracker = new AsynchronousTracker(config, utils);
    _asynchronousTracker.startTracker();

    //提供重新初始化的配置接口
    sa.initTrackerConfig = function () {
        config = new Config(sa), utils = new Utils();
        _asynchronousTracker = new AsynchronousTracker(config, utils);
        _asynchronousTracker.startTracker();
    }

    //根据 标签ID或者name或者class name获取元素对象
    //如果是name或者class name只获取元素对象的第一个元素
    function _getElement(id) {
        try {
            var element = document.getElementById(id);
            if (element) {
                return element;
            }

            var elements = document.getElementsByName(id);
            if (elements && elements.length > 0) {
                element = elements[0];
            }

            if (element) {
                return element;
            }

            /************************
             * TODO 目前不支持根据样式表class name获取元素，因为需要遍历所有dom结构，有性能问题
             * 后期可以考虑只遍历局部区域的dom树
             * 如果页面支持HTML5自带的getElementsByClassName方法，使用该方法，否则遍历dom树
             if (getElementsByClassName && (typeof (getElementsByClassName)).toLowerCase() == 'function') {
                elements = document.getElementsByClassName(id);
            } else {
                var children = document.getElementsByTagName('*') || document.all;
                var elements = new Array();
                var child, classNames;
                for (var ii = 0; ii < children.length; ii++) {
                    child = children[ii];
                    classNames = child.className.split(' ');
                    for (var j = 0; j < classNames.length; j++) {
                        if (classNames[j] == className) {
                            elements.push(child);
                            break;
                        }
                    }
                }
            }

             if (elements && elements.length > 0) {
                element = elements[0];
            }

             return element;
             ************************/
        } catch (e) {

        }

        return null;
    }

})(window, document);
var sa=window.sa||{},_saPageViewInit=window._saPageViewInit||null,_analyseExpoTags=window._analyseExpoTags||null,_sendOrderDatas=window._sendOrderDatas||null,_sendOrderInfo=window._sendOrderInfo||null,_sendRegisterDatas=window._sendRegisterDatas||null,_sendStorageDatas=window._sendStorageDatas||null,_dapush=window._dapush||null,_dapushbook=window._dapushbook||null,saCustomDataUtil=window.saCustomDataUtil||null,_searchDataSaPush=window._searchDataSaPush||null,_ssaSendPvData=window._ssaSendPvData||null,_sendExpoDatas=window._sendExpoDatas||null,pageViewUtil=window.pageViewUtil||null,_saManuPageViewInit=window._saManuPageViewInit||null,pageSaleCookieUtil=window.pageSaleCookieUtil||null,SAUP=window.SAUP||{},_JSLOADFLAG=window._JSLOADFLAG||!1;window._sa_utils={loadTimes:1,getSnvd:function(t){sa.check="",sa.snvd="",sa.cAndl=0;var n="",i="";window.localStorage?i=window.localStorage.getItem("_snvd"):sa.cAndl=sa.cAndl+2,i&&(sa.check=i,sa.snvd=i,sa.cAndl=sa.cAndl+2);for(var r=document.cookie.split("; "),a=0;a<r.length;a++){var o=r[a].split("=");"_snvd"==o[0]&&(n=o[1])}n&&(sa.check=n,sa.snvd=n,i&&n!=i||(sa.cAndl=sa.cAndl+1)),t?this.loadSnvdScript():3!=sa.cAndl&&this.loadSnvdScript()},fillCAndL:function(t){sa.cAndl=sa.cAndl||0,sa.check=sa.check||"",sa.snvd=sa.snvd||"";var n=this.getTopDomain();t?0==sa.cAndl&&sa.check.length<=24?(document.cookie="_snvd="+sa.check+";expires=Sun, 23-Jan-28 06:56:38 GMT; path=/ ;domain="+n,window.localStorage&&window.localStorage.setItem("_snvd",sa.check),sa.snvd=sa.check):this.loadSnvdScript(sa.snvd):sa.check.length<=24&&(document.cookie="_snvd="+sa.check+";expires=Sun, 23-Jan-28 06:56:38 GMT; path=/ ;domain="+n,window.localStorage&&window.localStorage.setItem("_snvd",sa.check))},loadSnvdScript:function(t){if(!(10<window._sa_utils.loadTimes)){window._sa_utils.loadTimes++;var n=document.createElement("script");n.async=!0,n.type="text/javascript",n.src="//sa.suning.cn/cc.js",t&&(n.src=n.src+"?check="+t),document.getElementsByTagName("head")[0].appendChild(n)}},getTopDomain:function(t){var n=t||document.domain,i=n.split(".");if(i instanceof Array){var r=i.length,a="",e=i.splice(r-2,r);-1!=n.indexOf(".com.cn")&&(e=n.split(".").splice(r-2-1,r));for(var o=0;o<e.length;o++)a+="."+e[o];return a}}},function(window){if(!_JSLOADFLAG){window._JSLOADFLAG=!0;var __conf={isSaPrd:function(){function t(t){for(var n=document.scripts,i="",r=0;r<n.length;r++)if(-1<(i=n[r]?n[r].src:"").indexOf(t))return i;return""}var n=t("da_opt.js")?t("da_opt.js"):t("sa_simple.js");return!!n&&!(n&&-1<(-1<n.indexOf("//sitres.suning")||-1<n.indexOf("//preres.suning")||-1<n.indexOf("//sitsslres.suning")||-1<n.indexOf("//presslres.suning")||-1<n.indexOf("//resprexg.suning")||n.indexOf("loc/static")))}(),ssaCfg:null},_searchInner=null,__ut={_deleteKey:function(t,n){for(var i=0;i<n.length;i++)delete t[n[i]];return t},_assign:function(t,e){var n=t;if(e&&e instanceof Object)for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);return n},getUrlKv:function(t){if(t&&"object"==typeof t){var n="";for(key in t)n+=key+"="+t[key]+"&";return n?n.substr(0,n.length-1):0}},isObjArgument:function(e){return!!(e&&e instanceof Object)},isEmptyObj:function(e){for(var t in e)return!1;return!0},saBase64:function(){var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";this.encode=function(t){var n,i,r,a,o,s,u,c="",d=0;for(t=_(t);d<t.length;)a=(n=t.charCodeAt(d++))>>2,o=(3&n)<<4|(i=t.charCodeAt(d++))>>4,s=(15&i)<<2|(r=t.charCodeAt(d++))>>6,u=63&r,isNaN(i)?s=u=64:isNaN(r)&&(u=64),c=c+l.charAt(a)+l.charAt(o)+l.charAt(s)+l.charAt(u);return c},this.decode=function(t){var n,i,r,a,o,s,u="",c=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");c<t.length;)n=l.indexOf(t.charAt(c++))<<2|(a=l.indexOf(t.charAt(c++)))>>4,i=(15&a)<<4|(o=l.indexOf(t.charAt(c++)))>>2,r=(3&o)<<6|(s=l.indexOf(t.charAt(c++))),u+=String.fromCharCode(n),64!=o&&(u+=String.fromCharCode(i)),64!=s&&(u+=String.fromCharCode(r));return u=d(u)};var _=function(t){t=t.replace(/\r\n/g,"\n");for(var n="",i=0;i<t.length;i++){var r=t.charCodeAt(i);r<128?n+=String.fromCharCode(r):(127<r&&r<2048?n+=String.fromCharCode(r>>6|192):(n+=String.fromCharCode(r>>12|224),n+=String.fromCharCode(r>>6&63|128)),n+=String.fromCharCode(63&r|128))}return n},d=function(t){for(var n="",i=0,r=c1=c2=0;i<t.length;)(r=t.charCodeAt(i))<128?(n+=String.fromCharCode(r),i++):191<r&&r<224?(c2=t.charCodeAt(i+1),n+=String.fromCharCode((31&r)<<6|63&c2),i+=2):(c2=t.charCodeAt(i+1),c3=t.charCodeAt(i+2),n+=String.fromCharCode((15&r)<<12|(63&c2)<<6|63&c3),i+=3);return n}},getJsResName:function(){function t(t){for(var n=document.scripts,i="",r=0;r<n.length;r++)if(-1<(i=n[r]?n[r].src:"").indexOf(t))return i;return""}return t("da_opt.js")?"da_opt.js":t("sa_simple.js")?"sa_simple.js":void 0}(),getInitUrl:function(t,n){t||(t=this.getJsResName);return"//"+this.getSaServer(t,n)+"/salog.gif?"},getSaServer:function(t,n){t||(t=this.getJsResName);var i=this.getJsUrl(t);return n=!!n,__conf.isSaPrd?n?"sa.suning.cn":"click.suning.cn/sa":i&&-1<i.indexOf("pre")?n?"saprexg.cnsuning.com":i&&-1<i.indexOf("xg")?"clickxgpre.suning.cn/sa":"clickpre.suning.cn/sa":n?"sasit.suning.cn":"clicksit.suning.cn/sa"},getJsUrl:function(t){for(var n=document.scripts,i="",r=0;r<n.length;r++)if(-1<(i=n[r]?n[r].src:"").indexOf(t))return i;return""},addEvent:function(t,n,i,r){t&&(t.addEventListener?r?t.addEventListener(n,i,!0):t.addEventListener(n,i,!1):t.attachEvent?t.attachEvent("on"+n,i):t["on"+n]=i)},removeEvent:function(t,n,i,r){t.removeEventListener?r?t.removeEventListener(n,i,!0):t.removeEventListener(n,i,!1):t.detachEvent?t.detachEvent("on"+n,i):t["on"+n]=null},isArray:function(t){return"[object array]"==Object.prototype.toString.call(t).toLowerCase()},isObject:function(t){return"[object object]"==Object.prototype.toString.call(t).toLowerCase()},arrayToString:function(t,n){for(var i=n||"|",r="",a=0;a<t.length;a++)r=r+t[a]+i;return r.substring(0,r.length-1)},inArray:function(t,n,i){var r;if(n&&"[object array]"===Object.prototype.toString.call(n).toLowerCase()){if(r=n.length,i=i?i<0?Math.max(0,r+i):i:0,Array.indexOf)return Array.prototype.indexOf.call(n,t,i);for(;i<r;i++)if(i in n&&n[i]===t)return i}return-1},readXPath:function(t,n){try{var i=__ut.getSaModid(t);if(i&&2!==n)return'@//*[@sap-modid="'+i+'"]';if(t==document.body)return"/html/"+t.tagName.toLowerCase();for(var r=1,a=t.parentNode.childNodes,o=0,s=a.length;o<s;o++){var u=a[o];if(u==t){var c=t.tagName.toLowerCase()+"["+r+"]";return arguments.callee(t.parentNode,n)+"/"+c}1==u.nodeType&&u.tagName==t.tagName&&r++}}catch(e){}},readInfor:function(t){return{targeturl:t.getAttribute("href")||"",tpath:__ut._encode(__ut.readXPath(t))}},getCurrencyUrl:function(t){var n="";null!=t&&null!=t&&(n=t);var i="";i=1==t||24==t?this._createPageViewId():this._getOnlyId();var r=__ut.getMetaVal("siteid")||"",a="web",o=document.getElementById("resourceType");if(null!=o&&null!=o&&(a=o.value?o.value:"web"),"wap"==a&&navigator.sakey){var s=navigator.userAgent;/(SNEBUY)/i.test(s)&&(a="inapp")}var u=(new Date).getTime(),c="",d=this._getCookie("_snma");null!=d&&null!=d&&0<=d.indexOf("|")&&(c=d.split("|")[1]);var l="",_=this._getCookie("_snmb");null!=_&&null!=_&&0<=_.indexOf("|")&&(l=_.split("|")[0]);var g="",f=this._getCookie("custno");null!=f&&null!=f&&(g=f);var p="",h=this._getCookie("idsEppLastLogin");null!=h&&null!=h&&(p=h);var m="",v=__ut._getCookie("idsLoginUserIdLastTime");if(null!=v&&null!=v)m=v;else{var y=document.getElementById("idsLoginUserIdLastTime");m=y?y.value:""}var w=m?"R":"G",b="",x=this._getCookie("logonStatus");null!=x&&null!=x&&(b=x);var O=this._getToUrl();O=this._encode(O);var S=this._getFromUrl();S=this._encode(S);var I=navigator.userAgent?this._encode(this._encode(navigator.userAgent)):"",k=document.getElementById("pagename"),C=k?k.value:"",E=C;function A(t,n){if(-1===t.indexOf(n+"=")){var i=__ut.getMetaVal(n);if(i)return t?n+"="+i+";"+t:n+"="+i}return t}C=A(A(C,"pageid"),"inpltid"),k=this._encode(C);var T="",P=this._getCookie("_snsr");null!=P&&null!=P&&(T=this._encode(P));var j=["vid","sid","uid","euid","ln","lt","ls"],D=[c,l,g,p,m,w,b],B=this._getCookie("secis_userid");B&&j.push("secis_userid")&&D.push(B);var N=this._getCookie("secis_username");N&&j.push("secis_username")&&D.push(N);var U=this.getConnect(j,D,{type:2});U=this._encode(U);var M=__ut._init_clnt_info();t+""=="1"&&__ut.initSaPageInfo(r,a,E);var L="t="+n+"&id="+i+"&i="+r+"&type="+a+"&v=SA-2.19.08.20.1&ct="+u+"&ids="+U+"&curl="+O+"&furl="+S+"&ua="+I+"&pn="+k+"&utm="+T+"&clnt_info="+M;if(1!==t&&24!==t){var R={};R.adtype=this._getValFromCookie("_snadtp"),R.adid=this._getValFromCookie("_snadid"),R.ad_clickid=this._getValFromCookie("_snadclkid"),L=L+"&ext="+(R=this._encode(this.stringify(R)))}return L},_getOSAndTer:function(){var t,n=navigator.userAgent,i=navigator.platform,r="push",a="match",o="indexOf",s="unknow but like Phone",u="unknow but like Tablet",c="unknown";try{var d=[];if(/AppleWebKit.*Mobile/i.test(n)||/Android|SymbianOS|Windows Phone|Tablet PC|NOKIA|Nokia|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|SonyEricsson|SIE-|Amoi|ZTE/i.test(n))(t=n[a](/(iPhone|iPod touch|iPad).*(OS [\d_]+)/i))?(d[r](t[2]),d[r](t[1])):(t=n[a](/(Windows Phone( | OS )[\d\.]+).*; ([^;]+)\)$/i))?(d[r](t[1]),d[r](t[3])):(t=n[a](/(Windows NT [\d\.]+).*(Tablet PC [\d\.]+)/i))?(d[r](t[1]),d[r](t[2])):-1<n[o]("Windows Phone")?(d[r]("Windows Phone"),d[r](s)):-1<n[o]("Windows NT")?(d[r]("windows NT"),d[r](u)):(t=n[a](/(Android [\d\.]+);.*? ([^;]*?);? Build\//i))?(d[r](t[1]),d[r](t[2])):(t=n[a](/(Android [\d\.]+);[^;]*; ([^\)]*?)\)/i))?(d[r](t[1]),d[r](t[2])):-1<n[o]("Android")&&-1<n[o]("Mobile")?(d[r]("Android"),-1<n[o]("Xiaomi")?d[r]("Xiaomi"):d[r](s)):-1<n[o]("Android")?(d[r]("Android"),d[r](u)):d[r](c)[r](c);else{var l="Win32"==i||"Win64"==i||"Windows"==i,_="Mac68K"==i||"MacPPC"==i||"Macintosh"==i||"MacIntel"==i;if(_&&d[r]("Mac"),"X11"==i&&!l&&!_&&d[r]("Unix"),-1<i[o]("Linux")&&d[r]("Linux"),l)(-1<n[o]("Windows NT 5.0")||-1<n[o]("Windows 2000"))&&d[r]("Win2000"),(-1<n[o]("Windows NT 5.1")||-1<n[o]("Windows XP"))&&d[r]("WinXP"),(-1<n[o]("Windows NT 5.2")||-1<n[o]("Windows 2003"))&&d[r]("Win2003"),(-1<n[o]("Windows NT 6.0")||-1<n[o]("Windows Vista"))&&d[r]("WinVista"),(-1<n[o]("Windows NT 6.1")||-1<n[o]("Windows 7"))&&d[r]("Win7"),-1<n[o]("Windows NT 6.2")&&d[r]("Windows 8"),-1<n[o]("Windows NT 6.3")&&d[r]("Windows 8.1");0==d.length&&d[r](c),d[r]("PC")}return 2<d.length?d=d.slice(0,2):1==d.length?d[r](c):0==d.length&&d[r](c)[r](c),d}catch(e){}return["unknown","unknown"]},_getToUrl:function(){return document.location.href||"-"},_getFromUrl:function(){var t=document.referrer,n=document.location.href,i=location.protocol,r=this._getCookie("_snml");if(("https:"==i&&""!=t&&r&&"https:"==r.substring(0,6)&&r!=t||"http:"==i&&""==t&&r&&"https:"==r.substring(0,6)||"https:"==i&&""==t&&r&&"https:"==r.substring(0,6)||""!=t&&r&&r!=t)&&(t=r),r&&this._delCookie("_snml"),""!=n&&-1!=n.indexOf("sourceUrl4Sa")){var a=this.getUrlParam(n,"sourceUrl4Sa");t=decodeURIComponent(a)}else if((!t||null==t||""==t)&&""!=n&&-1!=n.indexOf("returnUrl"))for(var o=n.substring(n.indexOf("?")+1,n.length).split("&"),s=0;s<o.length;s++){var u=o[s].split("=");"returnUrl"==u[0]&&(t=u[1])}return t},_createPageViewId:function(){return sa.pvId||(sa.pvId=this._getOnlyId()),sa.pvId},_getOnlyId:function(){var t=new Date,n=Math.round(1e5*Math.random());return t.getTime().toString().concat(n)},_getValFromCookie:function(t){return this._getCookie(t)&&"-"!==this._getCookie(t)?this._getCookie(t):""},_getCookie:function(t){try{for(var n=document.cookie.split("; "),i=0;i<n.length;i++){var r=n[i].split("=");if(r[0]==t)return decodeURIComponent(r[1]?r[1]:"-")}}catch(e){return""}},_delCookie:function(t){this._addCookie(t,"","/",-1e4,"")},_addCookie:function(t,n,i,r,a){var o=t+"="+escape(n);if(""!=r){var s=new Date;s.setTime(s.getTime()+r),o+=";expires="+s.toGMTString()}""!=i&&(o+=";path="+i),o+=";domain="+this.getTopDomain(),document.cookie=o},getTopDomain:function(t){var n=t||location.hostname,i=n.split(".");if(-1<n.indexOf("localhost"))return"localhost";if(i instanceof Array){var r=i.length,a="",e=i.splice(r-2,r);-1!=n.indexOf(".com.cn")&&(e=n.split(".").splice(r-2-1,r));for(var o=0;o<e.length;o++)a+="."+e[o];return a}},_encode:function(t){return null!=t?encodeURIComponent(t):""},_decode:function(t){return null!=t?decodeURIComponent(t):""},IsEmpty:function(t){return null==t||""==t||"-"==t},getConnect:function(t,n,i){if(t.length==n.length){var r,a="",o={},s={},u=!0;if(i?(r=i.tag||"&",s=i.ext?i.ext:{},2==i.type&&(u=!1)):r="&","{}"!=this.stringify(s))for(var c in s)t.push(c),n.push(s[c]);if(u){for(c=0;c<t.length;c++)"object"==typeof n[c]&&(n[c]=this._encode(this.stringify(n[c]))),a+=0==c?t[c]+"="+n[c]:r+t[c]+"="+n[c];return a}for(c=0;c<t.length;c++)"object"==typeof n[c]&&(n[c]=this._encode(this.stringify(n[c]))),o[t[c]]=n[c];return this.stringify(o)}},stringify:function(t){if(window.JSON&&JSON.stringify)return JSON.stringify(t);var n,i="";if(null===t)return String(t);switch(typeof t){case"number":case"boolean":return String(t);case"string":return'"'+t+'"';case"undefined":case"function":return}switch(Object.prototype.toString.call(t)){case"[object Array]":i+="[";for(var r=0,a=t.length;r<a;r++)i+=(void 0===(n=this.stringify(t[r]))?null:n)+",";return"["!==i&&(i=i.slice(0,-1)),i+="]";case"[object Date]":return'"'+(t.toJSON?t.toJSON():t.toString())+'"';case"[object RegExp]":return"{}";case"[object Object]":for(r in i+="{",t)t.hasOwnProperty(r)&&void 0!==(n=this.stringify(t[r]))&&(i+='"'+r+'":'+n+",");return"{"!==i&&(i=i.slice(0,-1)),i+="}";case"[object String]":return'"'+t.toString()+'"';case"[object Number]":case"[object Boolean]":return t.toString()}},jsonParse:function(jsonStr){return window.JSON&&JSON.parse?JSON.parse(jsonStr):eval("("+jsonStr+")")},getUrlParam:function(t,n){var i="",r=[];if(!this.IsEmpty(t)&&!this.IsEmpty(n)&&-1<t.indexOf("?")){r=-1<t.indexOf("#")?t.split("?")[1].split("#")[0].split("&"):t.split("?")[1].split("&");for(var a=0;a<r.length;a++){if(r[a].split("=")[0]==n){i=r[a].split("=")[1];break}}}return i},h5Inlay:function(t,n){var i=n.split("?")[1];"2"==t||"11"==t?1==navigator.sakey||1001==navigator.sakey?sareport(i,t):3==navigator.sakey||3001==navigator.sakey?window.webkit.messageHandlers.sareport.postMessage({params:i,logType:t}):2!=navigator.sakey&&2001!=navigator.sakey||window.prompt(i,t):navigator.sakey?1001==navigator.sakey?sareport(i,t):3001==navigator.sakey?window.webkit.messageHandlers.sareport.postMessage({params:i,logType:t}):2001==navigator.sakey&&window.prompt(i,t):setTimeout(function(){1001==navigator.sakey&&sareport(i,t)},300),"miniprogram"===window.__wxjs_environment&&wx.miniProgram.postMessage({data:{_type:"sa",logType:t,url:n}}),/(SNCLIENT-SA|YtAssitantPcEmbedWeb|SuningIM)/i.test(navigator.userAgent)&&saPcClient&&"function"==typeof saPcClient&&saPcClient(i)},_httpGifSend:function(t,n){var i="log_"+(new Date).getTime(),r=window[i]=new Image;r.onerror=function(){window[i]=null},r.onload=function(){"function"==typeof n&&n(t),window[i]=null};var a=t+"&_snvd="+__ut._encode(sa.snvd?sa.snvd:""),o=this.getUrlParam(a,"t");r.src=a;try{this.h5Inlay(o,a)}catch(e){console.log(e)}r=null},_httpGifSendPassH5:function(t){var n="log_"+(new Date).getTime(),i=window[n]=new Image;i.onload=i.onerror=function(){window[n]=null},i.src=t+"&_snvd="+__ut._encode(sa.snvd?sa.snvd:""),i=null},_getString:function(t,n){try{if(3==t.nodeType)n.push(t.nodeValue);else if(1==t.nodeType)for(var i=t.firstChild;null!=i;i=i.nextSibling)this._getString(i,n)}catch(e){}},getClickDetailUrl:function(t,n){var i="";try{var r=t.getAttribute("said")||t.getAttribute("id")||"",a=this._encode(r),o=[],s=(this._getString(t,o),o?this._encode(o.join("").replace(/\s|\|/gi,"").slice(0,50)):""),u=(u=document.getElementById("errorCode"))?u.value:"",c="object"==typeof sn&&sn.cityId?sn.cityId:"",d=document.getElementById("URLPattern")||document.getElementById("CUrlPattern");d=d?d.value:"";var l=document.getElementById("ssa-abtest");l=l?l.value:"";var _=t.href?t.href:"",g=this.getUrlParam(_,"tid"),f=this._createPageViewId(),p=[f,u,c,a,s,l,d,g];i=this.getConnect(["pvid","err","cityId","tid","text","ab_test","urlPattern","ad_id"],p,{type:2,ext:n})}catch(e){}return i},setSadata:function(t,n){try{var i=n;if(i&&t&&0!==t.indexOf("javascript:")){var r=t.split("?")[0];if(r&&-1<r.indexOf("//th.suning.com")){var a=__ut.getUrlParam(t,"tid")||"",o=__ut.getUrlParam(t,"adtype")||"",s=__ut.getUrlParam(t,"clickUrl")||"";return a&&(i.adid=i.adid?i.adid:a),o&&(i.adtype=i.adtype?i.adtype:o),s=s?__ut._decode(s).split("?")[0]:"",!i.eletp&&s&&__ut.sadataSetVal(s,i)||i}return __ut.sadataSetVal(t,i)||n}}catch(e){return n}},sadataSetVal:function(t,n){var i=__ut.getConfig(),r=[];i&&(r=i.getParam?i.getParam:[]);for(var a=0;a<r.length;a++){var o=__ut._decode(r[a].reg),s=(o=new RegExp(o),r[a].sadata);if(o.test(t)){if(n.eletp=s.eletp||"",s.origin&&s.origin.length)for(var u=s.origin,c=0;c<u.length;c++){var d="string"==typeof u[c]?u[c].split("+"):[];if(2==d.length){var l=o.exec(t);n[d[1]]=l[d[0]]||""}}if(s.param&&s.param.length)for(var _=s.param,g=0;g<_.length;g++){var f="string"==typeof _[g]?_[g].split("+"):[];2==f.length&&(n[f[1]]=__ut.getUrlParam(t,f[0])||"")}break}}return n},checkIn:function(t,n){for(var i=t.length;i--;)if(t[i]===n)return!0;return!1},getTrg:function(e){var t;return 3==(t=(e=e||window.event||event).srcElement?e.srcElement:e.target).nodeType&&(t=t.parentNode),t},tags:["a","button","input","area"],tagsHasName:["div","li","span","label"],checkTags:function(t,n){if(__ut.checkIn(t,n.tagName?n.tagName.toLocaleLowerCase():""))return!0},checkHref:function(t){var n=t.getAttribute("href");if(null!=n&&"javascript:void(0)"!==n&&"javascript:void(0);"!==n&&"javascript:;"!==n)return!0},checkTagsHasName:function(t,n){if(__ut.checkIn(t,n.tagName?n.tagName.toLocaleLowerCase():"")&&null!=n.getAttribute("name"))return!0},checkLabelHasAttr:function(t,n){return!(!t||"function"!=typeof t.getAttribute&&"object"!=typeof t.getAttribute||null===t.getAttribute(n))},checkLabel:function(t){return("function"==typeof t.getAttribute||"object"==typeof t.getAttribute)&&(!!(__ut.checkTags(__ut.tags,t)||__ut.checkHref(t)||__ut.checkTagsHasName(__ut.tagsHasName,t)||__ut.checkLabelHasAttr(t,"sa-data"))||void 0)},saSet:function(){this.isNullAdded=!1;var n={};this.contains=function(t){return null===t?this.isNullAdded:void 0!==t&&!!n[t]},this.add=function(t){return null===t?this.isNullAdded=!0:void 0!==t&&(n[t]=!0),this},this.addAll=function(t){if(null!=t&&t instanceof Array)for(var n=0;n<t.length;n++)this.add(t[n]);return this},this.remove=function(t){return null===t?this.isNullAdded=!1:void 0!==t&&delete n[t],this},this.removeAll=function(t){if(null!=t&&t instanceof Array)for(var n=0;n<t.length;n++)this.remove(t[n]);return this},this.clear=function(){return this.isNullAdded=!1,n={},this},this.size=function(){return this.list().length},this.isEmpty=function(){return!(0<this.list().length)},this.list=function(){var t=[];for(o in this.isNullAdded&&t.push(null),n)n.hasOwnProperty(o)&&t.push(o);return t}},saHashMap:function(){this.keys=new Array,this.data=new Object,this.put=function(t,n){null==this.data[t]&&this.keys.push(t),this.data[t]=n},this.get=function(t){return this.data[t]},this.remove=function(t){null!=this.get(t)&&delete this.data[t]}},selectorModid:function(t,n){for(var i=__ut.getSaMods(),r=[],a=0;a<i.length;a++)__ut.getSaModid(i[a])===n&&r.push(i[a]);return r},_ajax:function(t){var a=t.url||"",o=(t.type||"get").toLowerCase(),s=t.data||null,u=t.contentType||"",n=t.dataType||"",c=void 0===t.async||t.async,d=t.error||function(){},l=t.success||function(){},_=t.timeout||null;if("jsonp"===n)throw new TypeError("Jsonp is not supported");s&&("string"==typeof s?s=function(t){for(var n=t.split("&"),i=0,r=n.length;i<r;i++){var a=encodeURIComponent(n[i].split("=")[0]),o=encodeURIComponent(n[i].split("=")[1]);n[i]=a+"="+o}return n}(s):"object"==typeof s&&(s=function a(t,n){function i(t,n,i){var r=[];return t=void 0===i?t:i+"["+t+"]","object"==typeof n&&null!==n?r=r.concat(a(n,t)):(t=encodeURIComponent(t),n=encodeURIComponent(n),r.push(t+"="+n)),r}var r,o=[];if("[object Array]"==Object.prototype.toString.call(t))for(var s=0,u=t.length;s<u;s++)r=t[s],o=o.concat(i("object"==typeof r?s:"",r,n));else if("[object Object]"==Object.prototype.toString.call(t))for(var c in t)r=t[c],o=o.concat(i(c,r,n));return o}(s)),s=s.join("&").replace("/%20/g","+"),"get"===o&&(a+=-1<a.indexOf("?")?-1<a.indexOf("=")?"&"+s:s:"?"+s)),function(){var t=!!window.ActiveXObject,n=document.documentMode,i=t&&(8===n||9===n);if(!window.XMLHttpRequest)return;{if(i){var r=new XDomainRequest;return r.open(o,a),r.ontimeout=function(){r.abort()},r.onload=function(){l(r.responseText)},r.onerror=function(){d()},_&&(r.timeout=_),r.send(s)}var r=new XMLHttpRequest}r.open(o,a,c),"post"!==o||u?u&&r.setRequestHeader("Content-Type",u):r.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");r.onreadystatechange=function(){4===r.readyState&&(200<=r.status&&r.status<300||304==r.status?l(r.responseText):d(r.status,r.statusText))},_&&(r.timeout=_),r.send("get"===o?null:s)}()},_addStorage:function(t,n){window.localStorage&&localStorage.setItem(t,n)},_getStorage:function(t){return window.localStorage?localStorage.getItem(t):""},_delStorage:function(t){window.localStorage&&localStorage.removeItem(t)},getConfig:function(){if(__conf&&__conf.ssaCfg)return __conf.ssaCfg;var t=__ut._getStorage("ssaCfg");return t&&"undefined"!=t?__ut.jsonParse(t):null},getMetaVal:function(t){return document.getElementsByTagName("meta")&&document.getElementsByTagName("meta")[t]&&(document.getElementsByTagName("meta")[t].content||document.getElementsByTagName("meta")[t][0]&&document.getElementsByTagName("meta")[t][0].content)},getSaDataEleid:function(t){var n=t?t.eleid:"";return"number"==typeof n&&(n+=""),n&&-1===n.indexOf(".")?n+"":""},getSafcVal:function(t){var n,i="0",r="0",a="0";return i=t.eletp||i,t.searchvalue&&(r="3",a=t.searchvalue),t.adid&&(r="2",a=t.adid),t.recvalue&&(r="1",a=t.recvalue),"0.0.0"!==(n=i+"."+r+"."+a)&&n},getSaModLabel:function(){function t(t,n){return t.getElementsByTagName(n)}function n(t){return t.querySelectorAll("a,input:not([type=hidden]),button,area,[href],div[name],span[name],li[name],[sa-data]")}function i(t){for(var n=t.querySelectorAll("a,input,button,area,[href],div[name],span[name],li[name],[sa-data]"),i=[],r=0,a=n.length;r<a;r++){var o=n[r],s=o.tagName,u=o.getAttribute("type");"INPUT"===s&&/^hidden$/i.test(u)||i.push(o)}return i}try{var r=!!window.ActiveXObject||"ActiveXObject"in window,a=document.createElement("div");return r?(i(a),i):(n(a),n)}catch(e){return t}}(),getSaMods:function(){var t=__ut.getMetaVal("pagetype")||"",n="";switch(t){case"webshop":n="[sap-modid], [moduleid]";break;case"wapshop":n="[cmid]";break;default:n="[sap-modid]"}var i=function(){return document.querySelectorAll?document.querySelectorAll(n):[]};return(__ut.getSaMods=i)()},getSaModid:function(t){var n=null;switch(__ut.getMetaVal("pagetype")){case"webshop":n=function(t){return t.getAttribute("sap-modid")||t.getAttribute("moduleid")};break;case"wapshop":n=function(t){return t.getAttribute("cmid")};break;default:n=function(t){return t.getAttribute("sap-modid")}}return(__ut.getSaModid=n)(t)},initSaPageInfo:function(t,n,i){sa.pageInfo={siteid:t,resourceType:n,pageName:i}},getTargetUrl:function(t,n,i){var r=t.getAttribute(i),a=t.getAttribute(n),o="javascript:",s="";return r&&-1===r.indexOf(o)?s=r:a&&-1===a.indexOf(o)&&(s=a),s},getExplore:function(){var t=navigator.userAgent,n="match",i="unknown",r={wxmp:"miniProgram",bdmp:"swan",ttmp:"ToutiaoMicroApp",uc:" ubrowser|ucbrowser|ucweb",baidu:"bidubrowser|baiduhd|baidubrowser",weixin:"micromessenger",qqclient:" qq/",qq:"qqbrowser|mqqbrowser",2345:"2345explorer|Mb2345Browser",liebao:"lbbrowser|liebaofast",360:"360se|360ee|QHBrowser|360Browser|QIHOOBROWSER|QIHOO NEWSSDK",firefox:"firefox|FxiOS",maxthon:"maxthon|mxbrowser|MXiOS",theworld:"theworld",sougou:"metasr|sogoumobilebrowser",edge:" edge",kwe:" kwe",sleipnir:"sleipnir",xiaomiBrowser:"miuiBrowser",oppoBrowser:"OPPOBROWSER",vivoBrowser:"VIVOBROWSER",baiduboxapp:"baiduboxapp",opera:"opr|opios",snStorePlus:"StorePlus",snUnion:"SNUNION-APP",snPos:"苏宁\\+POS|;pos;",snMall:"苏宁\\+商城|;mall;|SNCLIENT-WAP\\small",snStore:"SNSTORE",snMaster:"苏宁\\+金掌柜|;master;|SNCLIENT-WAP\\smaster",snSposs:"SNSPOSS-APP",snNearby:"NEARBY-APP",snEbook:"EBOOK-APP",snPPSports:"PPTVSports","snPPTV-client":"PPTV-PC",snPPTV:"PPTV",snYifubao:"SNYifubao","snYunTai-client":"YunTai-PC","snYunXin-client":"YunXin-PC",snhkebuy:"HKSNEBUY","snclient-wap":"SNCLIENT-WAP|SNEBUY"};try{for(var a in r){if(new RegExp("(?:"+r[a]+") ?\\/?(\\d+\\.*\\d*)?","i").test(t)){i=0===a.indexOf("sn")||-1!==a.indexOf("mp")?a:RegExp.$1?a+" "+RegExp.$1:a;break}}var o;if("wxmp"!==i&&"bdmp"!==i&&"ttmp"!==i&&"miniprogram"===window.__wxjs_environment&&(i="wxmp"),"unknown"===i)(o=t[n](/(msie|ie) ([\d.]+)/i))&&(i="msie "+o[2]),t[n](/rv:11.0/)&&(i="msie 11.0"),(o=t[n](/(chrome|CriOS)\/([\d.]+)/i))&&(i="chrome "+o[2]),(o=t[n](/opera.([\d.]+)/i))&&(i="opera "+o[1]),/(Android)/i.test(t)||(o=t[n](/version\/([\d.]+).*safari/i))&&(i="safari "+o[1])}catch(e){i="unknown"}return{browser:i}},_getSense:function(){return window.screen.width+"x"+window.screen.height},_getPrinColor:function(){return window.screen.colorDepth+"bit"},_getFlash:function(){try{var f="",n=navigator;if(n.plugins&&n.plugins.length){for(var i=0;i<n.plugins.length;i++)if(-1!=n.plugins[i].name.indexOf("Shockwave Flash")){f=n.plugins[i].description.split("Shockwave Flash ")[1].split(" ")[0];break}}else if(window.ActiveXObject)for(var j=10;2<=j;j--){var fl=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+j+"');");if(fl){f=j+".0";break}}if(""!=f)return 1}catch(e){}return 0},_getJava:function(){try{if(navigator.javaEnabled())return 1}catch(e){}return 0},_inspectSnxxCookie:function(t,n){try{var i=__ut._getCookie(t);return null!=i&&(!(i&&!n.test(i))||(__ut._delCookie(t),!1))}catch(e){}},_inspectSnma:function(){return this._inspectSnxxCookie("_snma",/^[1][|]\d{14,19}[|]\d{13}[|]\d{13}[|]\d{13}[|]\d+[|]\d+$|^[|]\d{14,19}\|{5}$/)},_inspectSnmb:function(){return this._inspectSnxxCookie("_snmb",/^\d{14,19}[|]\d{13}[|]\d{13}[|]\d+$/)},_initSnma:function(){if(!this._inspectSnma()){var t=(new Date).getTime(),n=["1",__ut._getOnlyId(),t,t,t,0,0],i=this.arrayToString(n,"|");__ut._addCookie("_snma",i,"/",63072e6,"")}},_initSnmb:function(){if(!this._inspectSnmb()){var t=[__ut._getOnlyId(),"",(new Date).getTime(),0],n=this.arrayToString(t,"|");__ut._addCookie("_snmb",n,"/","","")}},each:function(t,n){if(t&&t.length)for(var i=0,r=t.length;i<r;i++)n.call(t[i],i,t[i])},_initObserver:function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}});else{var h=window.document,n=[];t.prototype.THROTTLE_TIMEOUT=100,t.prototype.POLL_INTERVAL=null,t.prototype.USE_MUTATION_OBSERVER=!0,t.prototype.observe=function(n){if(!this._observationTargets.some(function(t){return t.element==n})){if(!n||1!=n.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:n,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},t.prototype.unobserve=function(n){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=n}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},t.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},t.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},t.prototype._initThresholds=function(t){var n=t||[0];return Array.isArray(n)||(n=[n]),n.sort().filter(function(t,n,i){if("number"!=typeof t||isNaN(t)||t<0||1<t)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==i[n-1]})},t.prototype._parseRootMargin=function(t){var n=(t||"0px").split(/\s+/).map(function(t){var n=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!n)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(n[1]),unit:n[2]}});return n[1]=n[1]||n[0],n[2]=n[2]||n[0],n[3]=n[3]||n[1],n},t.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(i(window,"resize",this._checkForIntersections,!0),i(h,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(h,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},t.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,r(window,"resize",this._checkForIntersections,!0),r(h,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},t.prototype._checkForIntersections=function(){var u=this._rootIsInDom(),c=u?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(t){var n=t.element,i=m(n),r=this._rootContainsTarget(n),a=t.entry,o=u&&r&&this._computeTargetAndRootIntersection(n,c),s=t.entry=new d({time:window.performance&&performance.now&&performance.now(),target:n,boundingClientRect:i,rootBounds:c,intersectionRect:o});a?u&&r?this._hasCrossedThreshold(a,s)&&this._queuedEntries.push(s):a&&a.isIntersecting&&this._queuedEntries.push(s):this._queuedEntries.push(s)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},t.prototype._computeTargetAndRootIntersection=function(t,n){if("none"!=window.getComputedStyle(t).display){for(var i,r,a,o,s,u,c,d,l=m(t),_=v(t),g=!1;!g;){var f=null,p=1==_.nodeType?window.getComputedStyle(_):{};if("none"==p.display)return;if(_==this.root||_==h?(g=!0,f=n):_!=h.body&&_!=h.documentElement&&"visible"!=p.overflow&&(f=m(_)),f&&(i=f,r=l,void 0,a=Math.max(i.top,r.top),o=Math.min(i.bottom,r.bottom),s=Math.max(i.left,r.left),u=Math.min(i.right,r.right),d=o-a,!(l=0<=(c=u-s)&&0<=d&&{top:a,bottom:o,left:s,right:u,width:c,height:d})))break;_=v(_)}return l}},t.prototype._getRootRect=function(){var t;if(this.root)t=m(this.root);else{var n=h.documentElement,i=h.body;t={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(t)},t.prototype._expandRectByRootMargin=function(i){var t=this._rootMarginValues.map(function(t,n){return"px"==t.unit?t.value:t.value*(n%2?i.width:i.height)/100}),n={top:i.top-t[0],right:i.right+t[1],bottom:i.bottom+t[2],left:i.left-t[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},t.prototype._hasCrossedThreshold=function(t,n){var i=t&&t.isIntersecting?t.intersectionRatio||0:-1,r=n.isIntersecting?n.intersectionRatio||0:-1;if(i!==r)for(var a=0;a<this.thresholds.length;a++){var o=this.thresholds[a];if(o==i||o==r||o<i!=o<r)return!0}},t.prototype._rootIsInDom=function(){return!this.root||a(h,this.root)},t.prototype._rootContainsTarget=function(t){return a(this.root||h,t)},t.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},t.prototype._unregisterInstance=function(){var t=n.indexOf(this);-1!=t&&n.splice(t,1)},window.IntersectionObserver=t,window.IntersectionObserverEntry=d}function d(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var n=this.boundingClientRect,i=n.width*n.height,r=this.intersectionRect,a=r.width*r.height;this.intersectionRatio=i?Number((a/i).toFixed(4)):this.isIntersecting?1:0}function t(t,n){var i,r,a,o=n||{};if("function"!=typeof t)throw new Error("callback must be a function");if(o.root&&1!=o.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(i=this._checkForIntersections.bind(this),r=this.THROTTLE_TIMEOUT,a=null,function(){a||(a=setTimeout(function(){i(),a=null},r))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(o.rootMargin),this.thresholds=this._initThresholds(o.threshold),this.root=o.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function i(t,n,i,r){"function"==typeof t.addEventListener?t.addEventListener(n,i,r||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+n,i)}function r(t,n,i,r){"function"==typeof t.removeEventListener?t.removeEventListener(n,i,r||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+n,i)}function m(t){var n;try{n=t.getBoundingClientRect()}catch(t){}return n?(n.width&&n.height||(n={top:n.top,right:n.right,bottom:n.bottom,left:n.left,width:n.right-n.left,height:n.bottom-n.top}),n):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function a(t,n){for(var i=n;i;){if(i==t)return!0;i=v(i)}return!1}function v(t){var n=t.parentNode;return n&&11==n.nodeType&&n.host?n.host:n&&n.assignedSlot?n.assignedSlot.parentNode:n}},sendPingGouCatchData:function(){var t="sa_ord_info",n=this._getStorage(t);if(n&&-1!==n.indexOf("&i=lRf&")){var i=this.getUrlParam(n,"ct"),r=new Date(Number(i)||0),a=new Date;r.toLocaleDateString()===a.toLocaleDateString()?this._httpGifSend(n,function(){__ut._delStorage(t)}):this._delStorage(t)}else this._delStorage(t)},_init_clnt_info:function(){var t=__ut,n="",i="",r=t._getOSAndTer();t.isArray(r)&&(n=r[0],i=r[1]);var a=[i,n,__store.exploreInfo.browser,t._getSense(),t._getPrinColor(),t._getFlash(),t._getJava()],o=t.getConnect(["ter","os","br","sr","col","flash","java"],a,{type:2});return o=t._encode(o)}},__store={pageid:__ut.getMetaVal("pageid")||"",siteid:__ut.getMetaVal("siteid")||"",initPageSiteId:function(t){var n=__ut.getMetaVal("pageid")||"",i=__ut.getMetaVal("siteid")||"";__store.pageid=t?n:__store.pageid||n,__store.siteid=t?i:__store.siteid||i},getPageid:function(){return __ut.getMetaVal("pageid")||__store.pageid},getSiteid:function(){return __ut.getMetaVal("siteid")||__store.siteid},exploreInfo:__ut.getExplore(),initSnma:__ut._initSnma(),initSnmb:__ut._initSnmb()},Vj,Wj,Xj,Yj;create_snadclkid(),Vj=window,Wj=Vj.document,Xj=__ut.getJsUrl(__ut.getJsResName),Yj=function(){var i=[],r=!1,a=!1;function o(){if(!r){r=!0;for(var t=0;t<i.length;t++)i[t].fn.call(Vj,i[t].ctx);i=[]}}function s(){"complete"===Wj.readyState&&o()}return function(t,n){if("function"!=typeof t)throw new TypeError("callback for sa.ready(fn) must be a function");r?setTimeout(function(){t(n)},1):(i.push({fn:t,ctx:n}),"complete"===Wj.readyState||!Wj.attachEvent&&"interactive"===Wj.readyState?setTimeout(o,1):a||(Wj.addEventListener?(Wj.addEventListener("DOMContentLoaded",o,!1),Vj.addEventListener("load",o,!1)):(Wj.attachEvent("onreadystatechange",s),Vj.attachEvent("onload",o)),a=!0))}}(),sa.curJsUrl=Xj,sa.ready=Yj;var __expo={io:null,modIo:null,sapModIds:{},data:[],sdkData:[],timer:null,preImageSrc:"",expo:[],newexpo:[],getModInfo:function(t,n){var r=0,a=function(t,n){try{if("body"===t.tagName.toLocaleLowerCase()||10<r)return{id:0,ele:n};var i=__ut.getSaModid(t);return i?{id:i,ele:n}:(r++,a(t.parentNode,n))}catch(e){}};return a(t,n)},getExpoEleid:function(t,n){var i=__ut.getSaModLabel;if(__ut.getSaModid(t))return 0;for(var r=__ut.selectorModid("sap-modid",n),a=0;a<r.length;a++)for(var o=i(r[a],t.tagName.toLowerCase()),s=0;s<o.length;s++)if(o[s]===t&&0===a)return s+1},formatData:function(t){return t=t||"",__ut._encode(__ut.stringify(t))},cacheData:function(t){t=t instanceof Object?t:{},this.data.push(this.formatData(t)),this.sdkData.push(t),this.start()},start:function(){var n=this;if(20<=n.data.length)return n.stop(),setTimeout(function(){n.postLog()},100),!1;!n.timer&&n.data.length&&(n.timer=setTimeout(function t(){n.data.length?(n.postLog(),n.timer=setTimeout(t,300)):n.stop()},300))},postLog:function(){if(this.data.length){var t=__ut._createPageViewId(),n="//"+__ut.getSaServer()+"/salogExpo.gif",i=this.data.splice(0,20),r=this.sdkData.splice(0,20),a={paramStr:__ut.getCurrencyUrl(100)+"&pvid="+t,evdlArr:__ut.stringify(i)};try{__ut._ajax({type:"post",data:a,url:n}),0<r.length&&__ut.h5Inlay(100..toString(),n+"?"+a.paramStr+"&evdlArr="+this.formatData(r))}catch(e){throw new TypeError(e)}}else this.stop()},stop:function(){this.timer&&(clearTimeout(this.timer),this.timer=null)},getSaData:function(t){var n=t.getAttribute("sa-data");n=n?n.replace(/'/g,'"'):"{}";try{n=__ut.jsonParse(n),__ut.isObject(n)||(n={})}catch(e){n={}}return n},getExpoLabel:function(t){var n=__ut.checkLabelHasAttr;if("a"===(t.tagName?t.tagName.toLowerCase():"")||n(t,"sa-data"))return t;var i=t&&t.parentNode;return!!(i&&i.tagName&&"a"===i.tagName.toLowerCase()||n(i,"sa-data"))&&i},isDefaultImg:function(t){return t&&(-1!==t.indexOf("blank.gif")||-1!==t.indexOf("data:image/gif"))},startExposure:function(t,n){var i="sap-expo";if(this.isDefaultImg(t.src)||t.getAttribute("has-expo")||this.preImageSrc===t.src)return!1;this.preImageSrc=t.src;var r=this.getExpoLabel(t.parentNode);r&&null===r.getAttribute(i)&&(expoManual(r),r.setAttribute(i,"true"))},startExposureEvent:function(e){var t=__ut.getTrg(e);__expo.startExposure(t,!1)},_arrayChunk:function(i,r,a,o){setTimeout(function t(){var n=i.shift();r.call(a,n),0<i.length&&setTimeout(t,o)},o)},isOpenExpo:function(t,n){var i=t||[],r=n||[],a="*"===i[0],o="*"===r[0],s=__ut.getMetaVal("pageid");return a=-1===__ut.inArray(s,i)?a:!a,(o=-1===__ut.inArray(s,r)?o:!o)?2:a?1:0},initExpo:function(){var t=__store.getSiteid(),n=__store.getPageid();if(t&&n&&document.querySelectorAll){var a=this,i=this.isOpenExpo(this.expo,this.newexpo),r={imgExpo:function(){for(var t=__ut.getSaMods(),n=t.length,i=__ut.removeEvent,r=0;r<n;r++)i(t[r],"load",a.startExposureEvent,!0)},observer:function(){a.io&&a.io.disconnect(),a.modIo&&a.modIo.disconnect()},all:function(){this.imgExpo(),this.observer()}};try{2===i?(r.imgExpo(),__ut._initObserver(),a.initModObserve()):1===i?(r.observer(),a.initImgExpo()):(r.all(),console.log("没有打开曝光开关"))}catch(e){}}},initImgExpo:function(){var t=__ut.getSaMods();if(t&&0!==t.length)for(var n=0;n<t.length;n++){var i=t[n];__ut.removeEvent(i,"load",this.startExposureEvent,!0),__ut.addEvent(i,"load",this.startExposureEvent,!0)}},initModObserve:function(){var t=__ut.getSaMods(),n=__ut.getSaModid,i=t.length;!this.io&&this.initObserve();for(var r=0;r<i;r++){var a=t[r];n(a)&&this.modIo.observe(a)}},initPitObserve:function(t,n){var i=__ut.checkLabelHasAttr,r=[];try{r=t.querySelectorAll("[sa-data]:not([sap-expo]),a:not([sap-expo])>img,a:not([sap-expo])>*>img")}catch(e){}for(var a=r.length,o=0;o<a;o++){var s=r[o];if(i(s,"sa-data")&&n.observe(s),"img"===s.tagName.toLocaleLowerCase()){var u=this.getExpoLabel(s.parentNode);u&&!i(u,"sa-data")&&n.observe(u)}}},initObserve:function(){var a=this,n=__ut.each,i=__ut.checkLabelHasAttr;this.io||(this.io=new IntersectionObserver(function(t){a._arrayChunk(t.concat(),function(t){var n=t.target;if(0<t.intersectionRatio&&!i(n,"sap-expo"))try{a.io.unobserve(n),expoManual(n),n.setAttribute("sap-expo","true")}catch(e){}},a,20)},{root:null,threshold:[.5]})),this.modIo||(this.modIo=new IntersectionObserver(function(t){n(t,function(t,n){var i,r=n.target;0<n.intersectionRatio&&(i=r,setTimeout(function(){try{a.initPitObserve.call(a,i,a.io)}catch(e){}},500))})},{root:null,rootMargin:"-100px",threshold:[0,.5]}))}};getssaCfg();var cookie_snvd=__ut._getCookie("_snvd");if(cookie_snvd&&24<cookie_snvd.length&&(__ut._delCookie("_snvd"),window.localStorage&&localStorage.removeItem("_snvd")),window.localStorage){var storage_snvd=localStorage.getItem("_snvd");storage_snvd&&24<storage_snvd.length&&(localStorage.removeItem("_snvd"),__ut._delCookie("_snvd"))}window._sa_utils.getSnvd();var _samap=window._samap||new __ut.saHashMap,__extMap=window.__extMap||new __ut.saHashMap,Mz;window.isArray=__ut.isArray,window._saSet=__ut.saSet,SAUP.sendLogData=function(t,n){if("store"===t&&void 0===n&&(n={}),t&&(n||"expoInit"===t))switch(t){case"click":sa.click.sendDatasIndex(n);break;case"store":_dapush(n);break;case"siteExpos":break;case"recExpos":_analyseExpoTags(n);break;case"order":_sendOrderInfo(n);break;case"custom":if("object"!=typeof n)return;saCustomDataUtil.sendData(n);break;case"search":_searchInner(n);break;case"expoManual":expoManual(n);break;case"expoInit":__expo.initExpo()}},function(){var t=document.location.hostname,n=document.location.href,q=new __ut.saBase64,i=(i=document.getElementById("wcsa_userId")||document.getElementById("userId"))?i.value:"",r=(r=document.getElementById("wcsa_userType")||document.getElementById("userType"))?r.value:"",a=(a=document.getElementById("orderId")||document.getElementById("wcsa_orderId"))?a.value:"",o=(o=document.getElementById("gaga"))?o.value:"",s=(s=document.getElementById("gagaId"))?document.getElementById("gagaId").value:"",u=document.getElementById("resourceType"),j=u?u.value:"web",c=document.getElementById("errorCode"),D=c?c.value:"",B=(B=document.getElementById("URLPattern")||document.getElementById("CUrlPattern"))?B.value:"",d=(d=document.getElementById("orderInfo"))?d.value:"",z=!0;-1==t.indexOf("cart.suning.com")&&-1==t.indexOf("shopping.suning.com")&&-1==t.indexOf("reg.suning.com")&&-1==t.indexOf("passport.suning.com")&&-1==t.indexOf("member.suning.com")&&-1==t.indexOf("my.suning.com")&&-1==t.indexOf("favorite.suning.com")&&-1==t.indexOf("review.suning.com")&&-1==t.indexOf("vip.suning.com")&&-1==t.indexOf("assss.suning.com")&&-1==t.indexOf("payment.suning.com")&&-1==t.indexOf("wpay.suning.com")&&-1==t.indexOf("stpay.suning.com")&&-1==t.indexOf("cartsit.cnsuning.com")&&-1==t.indexOf("shoppingsit.cnsuning.com")&&-1==t.indexOf("regsit.cnsuning.com")&&-1==t.indexOf("passportsit.cnsuning.com")&&-1==t.indexOf("membersit.cnsuning.com")&&-1==t.indexOf("mysit.cnsuning.com")&&-1==t.indexOf("favoritesit.cnsuning.com")&&-1==t.indexOf("reviewsit.cnsuning.com")&&-1==t.indexOf("vipsit.cnsuning.com")&&-1==t.indexOf("asssssit.cnsuning.com")&&-1==t.indexOf("paymentsit.cnsuning.com")&&-1==t.indexOf("wpaysit.cnsuning.com")&&-1==t.indexOf("stpaysit.cnsuning.com")&&-1==t.indexOf("cartpre.cnsuning.com")&&-1==t.indexOf("shoppingpre.cnsuning.com")&&-1==t.indexOf("regpre.cnsuning.com")&&-1==t.indexOf("passportpre.cnsuning.com")&&-1==t.indexOf("memberpre.cnsuning.com")&&-1==t.indexOf("mypre.cnsuning.com")&&-1==t.indexOf("favoritepre.cnsuning.com")&&-1==t.indexOf("reviewpre.cnsuning.com")&&-1==t.indexOf("vippre.cnsuning.com")&&-1==t.indexOf("asssspre.cnsuning.com")&&-1==t.indexOf("paymentpre.cnsuning.com")&&-1==t.indexOf("wpaypre.cnsuning.com")&&-1==t.indexOf("stpaypre.cnsuning.com")&&-1==t.indexOf("order.suning.com")&&-1==t.indexOf("orderpre.cnsuning.com")&&-1==t.indexOf("ordersit.cnsuning.com")||(z=!1);var l=l||new __ut.saHashMap,_=_||new __ut.saHashMap;_dapush=function(e){e&&__extMap.put("storeExtData",e),l.put("_sapush",""),_.put("_gapush","")},_dapushbook=function(){l.put("_sapushbook",""),_.put("_gapushbook","")},l.put=function(t,n){null==l.data[t]&&l.keys.push(t),l.data[t]=n,h()},h();_samap.put("_saPvDatas",[]);document.referrer;if(-1!=n.indexOf("/SNCart2ManageCmd?")||-1!=n.indexOf("/SNPayBeforeComfirmView?")||-1!=n.indexOf("/payGateWay/show.htm?")||-1!=n.indexOf("/payment.suning.com/epps-ppps")||-1!=n.indexOf("/payment.suning.com/epps-pppm")||-1!=n.indexOf("/payment.suning.com/epps-ppms")||-1!=n.indexOf("/paytestpre.suning.com/epps-ppps")||-1!=n.indexOf("/paytestpre.suning.com/epps-pppm")||-1!=n.indexOf("/paytestpre.suning.com/epps-ppms")||-1!=n.indexOf("/paymentsit.cnsuning.com/epps-ppps")||-1!=n.indexOf("/paymentsit.cnsuning.com/epps-pppm")||-1!=n.indexOf("/paymentsit.cnsuning.com/epps-ppms")||-1!=n.indexOf("/cart2/private/cart2Show.do")||-1!=n.indexOf("/cart2/private/cartSplitOrdersView.do")||-1!=n.indexOf("/SNOrderPaySuccessView")||-1!=n.indexOf("/SNMWPaySubmitView")||-1!=n.indexOf("/cartFourOrdersView")||-1!=n.indexOf("/project/cart/cart2")||-1!=n.indexOf("/project/cart/cartSplitOrders")||-1!=n.indexOf("/project/cart/cartFourOrdersView")||-1!=n.indexOf("/project/cart/weixinPaySuccess")||-1!=n.indexOf("//wpay.suning.com/epps-pwg/showDefault.htm")||-1!=n.indexOf("//wpaypre.cnsuning.com/epps-pwg/showDefault.htm")||-1!=n.indexOf("//wpaysit.cnsuning.com/epps-pwg/showDefault.htm")){var g=o||"",f=[a];if(_samap.put("_saOrderDatas",f),-1!=g.indexOf("true")){var p=[s];_samap.put("_saRegisterDatas",p)}}else if(-1!=n.indexOf("/SNUserRegisterComfirmView")||-1!=n.indexOf("/SNMobileRegisterConfirmView")||-1!=n.indexOf("/SNMWUserRegisterSuccessView")||-1!=n.indexOf("/reg.suning.com/b2cregsucc")||-1!=n.indexOf("/reg.suning.com/compregsucc")||-1!=n.indexOf("/reg.suning.com/b2bcardregsucc")||-1!=n.indexOf("/reg.suning.com/wap/succjump")||-1!=n.indexOf("/wap/register/getRegisterSuccess")||-1!=n.indexOf("/regpre.cnsuning.com/b2cregsucc")||-1!=n.indexOf("/regpre.cnsuning.com/compregsucc")||-1!=n.indexOf("/regpre.cnsuning.com/b2bcardregsucc")||-1!=n.indexOf("/regpre.cnsuning.com/wap/succjump")){p=[i];_samap.put("_saRegisterDatas",p)}function h(){null!=l.get("_sapush")&&(!function(){var t;try{var n=document.getElementById("ga_itemDataBean_itemID");n&&(t=n.value);var i="",r=document.getElementById("mdmCityId");r&&(i=r.value);var a="",o=document.getElementById("shipOffset");o&&(a=o.value);var s=[t,i,a];_samap.put("_saStorageDatas",s)}catch(t){}}(),l.remove("_sapush")),null!=l.get("_sapushbook")&&(!function(){var t;try{var n=document.getElementById("ga_itemDataBean_itemID");n&&(t=n.value);var i="",r=document.getElementById("mdmCityId");r&&(i=r.value);var a="",o=document.getElementById("shipOffset");o&&(a=o.value);var s=[t,i,a];_samap.put("_saStorageDatas",s)}catch(t){}}(),l.remove("_sapushbook")),null!=l.get("_searchPush")&&(!function(t){for(var n=document.location.href,i=n.substring(n.indexOf("?")+1,n.length).split("&"),r=new __ut.saHashMap,a=0;a<i.length;a++)for(var o=i[a].split("="),s=0;s<o.length;s++)r.put(o[s],o[++s]);var u=r.get("searchKeywords"),c=u&&null!=u&&"undefined"!=u?u:"",d=t,l=r.get("groupName"),_=l&&null!=l&&"undefined"!=l?l:"",g=r.get("groupNameValue"),f=g&&null!=g&&"undefined"!=g?g:"",p=r.get("catalogId"),h=[c,d,"0",_,f,p&&null!=p&&"undefined"!=p?p:""];_samap.put("_saSearchDatas",h)}(l.get("_searchPush")),l.remove("_searchPush"))}var N=__ut._createPageViewId();null!=sa.pvHasSend&&null!=sa.pvHasSend||(sa.pvHasSend=!1),sa.hotClickObj={count:0,pointSet:""};var b="_snma",m=["constant","visitorid","firstViewTime","lastViewTime","thisViewTime","totalPvs","totalVisits"],x="_snmb",U=["visitid","inTime","outTime","views"],O="_snmc",S="_snmp",I="_snsr",k=["source","medium","content","campaign","theme"],C="_snmz",M=["pvid","clickDots"],E="_snck",v="_snml",J="|",A="",y="*:*",w=63072e6,T=18e5,P=864e5,L="//",R=__ut.getSaServer(),V=document.title,G=__ut._getToUrl(),W=__ut._getFromUrl(),X=A,H=[".sm.cn",".google.com",".baidu.com",".soso.com",".bing.com",".yahoo.com",".sogou.com",".360.cn",".so.com",".youdao.com",".haosou.com"],F=["direct","referral","organic"],K=A,Y=0,Q=0,Z=__ut._getCookie("custno")?__ut._getCookie("custno"):"-",tt="",et=__ut._getCookie("idsLoginUserIdLastTime");if(null!=et&&null!=et)tt=et;else{var nt=document.getElementById("idsLoginUserIdLastTime");tt=nt?nt.value:""}var it=__ut._getCookie("logonStatus")?__ut._getCookie("logonStatus"):"",rt=(__ut._getCookie("idsEppLastLogin")&&__ut._getCookie("idsEppLastLogin"),document.getElementsByTagName("meta").sadelay);rt=500<=(rt=(rt=rt?rt.getAttribute("content"):"")?Number(rt):0)?500:rt<=0?0:rt;navigator.userAgent;var at,ot,st=__ut._getOSAndTer(),ut=__store.exploreInfo.browser;2==st.length&&(at=st[0],ot=st[1]);document.all;var ct,dt,lt,_t=!1,gt=!1;function ft(t){try{if(null!=t&&null!=t||(t=!1),0==sa.hotClickObj.count)return!1;if(!t&&sa.hotClickObj.count<10)return!1;var n=__ut._getOnlyId(),i=__ut._encode(sa.hotClickObj.pointSet),r=__ut._getSense(),a=__ut._getPrinColor(),o=Ot().get("visitorid"),s=L+__ut.getSaServer("",!0)+"/hotClick.gif";s=s+"?oId="+n+"&pvId="+N+"&ponits="+i+"&url="+__ut._encode(G)+"&pageType="+j+"&bro="+ut+"&sense="+r+"&color="+a+"&visId="+o+"&memId="+Z+"&hidUrlPattern="+B,__ut._httpGifSendPassH5(s),sa.hotClickObj.pointSet="",sa.hotClickObj.count=0}catch(e){}}function pt(){if(null!=_samap.get("_saPvDatas")){var t=[tt];if(tt?t.push("R"):t.push("G"),rt)var n=setTimeout(function(){ht(Dt(t)),_samap.remove("_saPvDatas"),clearTimeout(n),n=null},rt);else ht(Dt(t)),_samap.remove("_saPvDatas")}var i=location.href;(gt||(-1<i.indexOf("wpay.suning.com")||-1<i.indexOf("mvs.suning.com"))&&(gt=!0,__ut.sendPingGouCatchData()),null!=_samap.get("_saSearchDatas"))&&(!function(t){try{var n=Bt(X),i="",r="",a="",o="",s="",u="",c="",d="",l="",_="";if(null!=t&&null!=t){var g=t.split(J);i=void 0!==g[0]?g[0]:"",r=void 0!==g[1]?g[1]:"",a=void 0!==g[2]?g[2]:"",o=void 0!==g[3]?g[3]:"",s=void 0!==g[4]?g[4]:"",u=void 0!==g[5]?g[5]:"",c=void 0!==g[6]?g[6]:"",d=void 0!==g[7]?g[7]:"",l=void 0!==g[8]?g[8]:"",_=void 0!==g[9]?g[9]:""}var f=G.match(/cityId=([\d]+)/),p=f&&0<f.length?f[1]:"-";if(!l||""==l||"undefined"==l){var h=document.getElementById("searchCategory");l=h?h.value:""}d&&"kzkeyword undefined"==d&&(d="");var m=document.getElementById("ssa-abtest");m=m?m.value:"";var v=document.getElementById("URLPattern")||document.getElementById("CUrlPattern");v=v?v.value:"";var y=document.getElementById("sescs");y=y?y.value:"";var w=N,b=[w,s,_,u,n,i,r,a,o,m,d,p,l,c,v,y],x=__ut.getConnect(["pvid","ci","searchType","catalogId","title","keyword","resultnum","recNum","splitedKeyword","ab_test","kzWord","scId","searchID","uerWord","urlPattern","sescs"],b,{type:2,ext:__extMap.get("searchExtDatas")}),O=__ut._encode(x),S=__ut.getInitUrl(),I=__ut.getCurrencyUrl(3),k=S+I+"&evdl="+O,C=__ut.getUrlParam(k,"id");__ut._addCookie("_snms",C,"/","",""),__ut._httpGifSend(k)}catch(e){}}(Dt(_samap.get("_saSearchDatas"))),_samap.remove("_saSearchDatas"));if(null!=_samap.get("_saOrderDatas")){var r=Dt(_samap.get("_saOrderDatas"));_sendOrderDatas(r),_samap.remove("_saOrderDatas")}if(null!=_samap.get("_saRegisterDatas")){var a=Dt(_samap.get("_saRegisterDatas"));_sendRegisterDatas(a),_samap.remove("_saRegisterDatas")}if(null!=_samap.get("_saStorageDatas")){var o=Dt(_samap.get("_saStorageDatas"));_sendStorageDatas(o),_samap.remove("_saStorageDatas")}}function ht(t){if(sa.pvHasSend&&1==sa.pvHasSend)return!1;var n,i;!function(){__ut._inspectSnma();var t=new Date,n=Ot();n.put("lastViewTime",n.get("thisViewTime")),n.put("thisViewTime",t.getTime()),n.put("totalPvs",Number(n.get("totalPvs"))+1),St(n),ct=n.get("visitorid")}(),function(){var t=__ut._getCookie(O);if(!t||null==t||""==t){var n=__ut._getCookie(x);if(n&&null!=n&&""!=n){var i=It();K=i.get("inTime"),__ut._delCookie(x)}else K=A}__ut._addCookie(O,"1","/",T,"")}(),function(){!function(){try{var t=__ut._getCookie(I),n=t?t.match(new RegExp("[|]","g")):[];n=n?n.length:0,(t&&"-"==t||t&&4!=n)&&__ut._delCookie(I)}catch(e){}}();var t=At();(function(t){var n=At(),i=jt(k,n),r=jt(k,t);if(!__ut._getCookie(I)||i!=r){var a=jt(k,t);__ut._addCookie(I,a,"/",P,"");var o=It();K=o.get("inTime"),__ut._delCookie(x)}})(t=bt(t=wt(t))),lt=__ut._getCookie(I)}(),function(){__ut._inspectSnmb();var t=It(),n=new Date;t.put("outTime",n.getTime()),t.put("views",Number(t.get("views"))+1),Ct(t),dt=t.get("visitid")}(),n=__ut._getToUrl(),(i=__ut.getUrlParam(n,"adtype"))&&"-"!=i&&__ut._addCookie("_snadtp",i,"/","","");var r,a,o,s,u,c,d,l,_=__ut._getCookie(b),g=(r=t,a=It(),o=jt(U,a),s=Bt(W),u=Bt(X),c=Bt(G),d=q.encode(Bt(V)),r+J+s+J+u+J+c+J+d+J+o),f=yt(),p=__ut._getCookie(I),h=Et(),m=jt(M,h),v=D;if(void 0===_&&void 0===p){var y=new Date;_=Dt(["1",__ut._getOnlyId(),y.getTime(),y.getTime(),y.getTime(),1,1]),g=g.substring(0,g.lastIndexOf(J)+1)+"1";var w=At();w=bt(w=wt(w)),p=jt(k,w)}try{Nt(_,g,f,p,m,v,1),sa.pvHasSend=!0,_t=!0}catch(e){sa.pvHasSend=!1}__ut._addCookie(S,N,"/","",""),__ut._delCookie(C),__ut._delCookie(E),(l=It()).put("inTime",(new Date).getTime()),Ct(l)}saCustomDataUtil=new function(){this.sendData=function(e,t,n){var i=e,r=t,a=n,o=null,s=[],u=[];if(__ut.isObjArgument(e)&&(i=e.eventType,r=e.keys?e.keys:"",a=e.values?e.values:"",e=__ut._deleteKey(e,["eventType","keys","values"]),__ut.isEmptyObj(e)||(o=e)),null==i||null==i||""==i)return!1;if(r&&a&&(s=r.split(","),u=a.split(","),s.length!=u.length))return!1;if(0!=s.length||null!=o){var c=__ut.getConnect(s,u,{type:2,ext:o}),d=N,l=__ut._encode(c),_=__ut.getInitUrl(),g=__ut.getCurrencyUrl(13),f=_+g+"&event_type="+i+"&evdl="+l+"&pvid="+d;__ut._httpGifSend(f)}}},pageSaleCookieUtil=new function(){var t=this,y="_saPageSaleInfo",w="-",b="|",x=":",O=",",S=";",f=function(){var i=0,r=new Object;this.getThis=function(){return r},this.put=function(t,n){this.containsKey(t)||i++,r[t]=n},this.get=function(t){return this.containsKey(t)?r[t]:null},this.remove=function(t){delete r[t]&&i--},this.containsKey=function(t){return t in r},this.containsValue=function(t){for(var n in r)if(r[n]==t)return!0;return!1},this.values=function(){var t=new Array(i);for(var n in r)t.push(r[n]);return t},this.keys=function(){var t=new Array(i);for(var n in r)t.push(n);return t},this.size=function(){return i}};function v(t){if(!t||t==w||""==t)return null;for(var n=new f,i=t.split(S),r=0;r<i.length;r++){var a=i[r];if(a&&""!=a){var o=a.substring(0,a.indexOf(x)),s=a.substring(a.indexOf(x)+1);n.put(o,s)}}return n}function I(t){var n="";if(!t||null==t||0==t.size())return n;try{if(1==t.size()){var i=t.keys();if(!t.get(i[0])&&!t.get(i[1]))return n;if(!(""!=t.get(i[0])&&t.get(i[0])!=w||""!=t.get(i[1])&&t.get(i[1])!=w))return n}}catch(t){}for(var i=t.keys(),r=0;r<i.length;r++){var a=i[r];if(a){var o=t.get(a);o&&""!=o&&o!=w&&(n=""==n||n==w?a+x+o:n+S+(a+x+o))}}return n}function k(t){if(!t||t==w||""==t)return new f;for(var n=new f,i=t.split(S),r=0;r<i.length;r++){var a=i[r];if(a&&""!=a&&a!=w)for(var o=a.substring(0,a.indexOf(x)),s=a.substring(a.indexOf(x)+1),u=s.split(O),c=0;c<u.length;c++){var d=u[c];if(d&&""!=d&&d!=w){var l=d.substring(0,d.indexOf(b)),_=o+x+l,g=d.substring(d.indexOf(b)+1);n.put(_,g)}}}return n}function C(t,n){var i="";if(!n||null==n||0==n.size())return i;try{if(1==n.size()){var r=n.keys();if(!n.get(r[0])&&!n.get(r[1]))return i;if(!(""!=n.get(r[0])&&n.get(r[0])!=w||""!=n.get(r[1])&&n.get(r[1])!=w))return i}}catch(t){}for(var a=new __ut.saHashMap,o=0;o<t.length;o++){var s=t[o];if(s)for(var r=n.keys(),u=0;u<r.length;u++){var c=r[u];if(c){var d=n.get(c);if(d&&null!=d&&""!=d&&c.substring(0,(s+x).length)==s+x){var l=c.substring(c.indexOf(x)+1),_=a.get(s);_=_&&_!=w&&""!=_?_+O+(l+b+d):l+b+d,a.put(s,_)}}}}return i=I(a)}t.saveCookie=function(t,n){try{null!=t&&null!=t||(t=w),null!=n&&null!=n||(n=w);var i=N,r=Z;null!=it&&null!=it&&""!=it&&it!=w||(r=w);var a=!1,o=__ut._getCookie(y);if(o&&o!=w&&""!=o){for(var s=new Array,u=o.split(S),c=0;c<u.length;c++){var d=u[c];if(d){var l=d.substring(0,d.indexOf(x));l!=w&&r==l&&(a=!0),s.push(l)}}a||r&&""!=r&&r!=w&&s.push(r);var _=k(o),g=function(){var t=_sa_util._getCookie(y);if(!t||t==w||""==t)return 0;var n=t.split(S);if(null==n||0==n.length)return 0;var i=0,r="";try{for(var a=0;a<n.length;a++)if(null!=(r=n[a])&&""!=r){var o=r.split(x);if(!(null==o||o.length<2)){var s=o[1],u=s.split(O);i+=u.length}}}catch(e){}return i}();if(30<=g){for(var f=_.keys(),p="",c=0;c<f.length&&(!(p=f[c])||null==p||""==p);c++);_.remove(p)}var h=r+x+t,m=i+b+n;_.put(h,m),o=C(s,_)}else{var v=t+b+i+b+n;o=r+x+v}}catch(e){}},t.deleteCookie=function(t){try{if(null==t||null==t||""==t||t==w)return!1;var n=Z;null!=it&&null!=it&&""!=it&&it!=w||(n=w);var i=__ut._getCookie(y);if(!i||i==w||""==i)return!0;for(var r=!1,a=new Array,o=i.split(S),s=0;s<o.length;s++){var u=o[s],c=u.substring(0,u.indexOf(x));c!=w&&n==c&&(r=!0),a.push(c)}r||n&&""!=n&&n!=w&&a.push(n);for(var d=k(i),l=t.split(b),s=0;s<l.length;s++){var _=l[s];if(""!=_&&_!=w){var g=n+x+_;d.remove(g)}}i=C(a,d)}catch(e){return!1}return!0},t.deleteCustCookie=function(){try{var t=Z;if(null!=it&&null!=it&&""!=it&&it!=w||(t=w),t==w)return!1;var n=__ut._getCookie(y);if(!n||n==w||""==n)return!1;var i=v(n);if(!i||null==i)return!1;i.remove(t),n=I(i)}catch(e){return!1}return!0},t.clearCookie=function(){try{__ut._delCookie(y)}catch(e){}},t.updateCustNo=function(){try{var t=Z;if(null!=it&&null!=it&&""!=it&&it!=w||(t=w),t==w)return!1;var n=__ut._getCookie(y);if(!n||n==w||""==n)return!1;var i=v(n);if(null==i||0==i.size())return!1;for(var r=new f,a=i.keys(),o=0;o<a.length;o++){var s=a[o];if(s)if(s==w){var u=i.get(t);u&&null!=u&&""!=u?r.put(t,u+O+i.get(s)):r.put(t,i.get(s))}else{var u=r.get(s);u&&null!=u&&""!=u?r.put(s,u+O+i.get(s)):r.put(s,i.get(s))}}n=I(r)}catch(e){return!1}return!0},t.sendCookie=function(t,n){if(!t||null==t||""==t)return!1;if(!n||null==n||""==n)return!1;try{var i=__ut._getCookie(y);try{var r="",a="";n&&(r=encodeURIComponent(n)),i&&(a=encodeURIComponent(i));var o=L+R+"/ajaxPageSale.gif";o=o+"?pvId="+N+"&loginUserName="+tt+"&memberId="+Z+"&loginStatus="+it+"&orderId="+t+"&goodIds="+r+"&ck="+a,__ut._httpGifSendPassH5(o)}catch(t){}if(Z==w)return!1;if(!i||i==w||""==i)return!1;var s=v(i);if(!s||null==s||0==s.size())return!1;var u=s.get(Z);if(null==u||null==u||u==w||""==u)return!1;for(var c="",d=new Array,l=u.split(O),_=n.split(b),g=0;g<_.length;g++){var f=_[g];if(f&&""!=f&&f!=w)for(var p=0;p<l.length;p++){var h=l[p];if(h&&""!=h&&h!=w&&-1!=h.indexOf(f)){d.push(h),c=""==c?h:c+O+h;break}}}if(""==c||c==w)return!1;for(var g=0;g<d.length;g++){var m=d[g];m&&""!=m&&(u=-1!=u.indexOf(m+O)?u.replace(m+O,""):u.replace(m,""))}""!=u&&u!=w&&-1!=u.lastIndexOf(O)&&(u=u.substring(0,u.length-1)),s.put(Z,u),i=I(s)}catch(e){}return!0}},pageViewUtil=new function(){this.sendData=function(t,n){var i=new Date,r=N,a=Ot(),o=a.get("visitorid"),s=dt,u=Z,c=__ut._encode(tt),d=c?"R":"G",l=i.getTime(),_=Bt(W),g=Bt(X),f=Bt(G),p=q.encode(Bt(V)),h=It(),m=jt(U,h),v=__ut._encode(D),y=__ut._encode(yt()),w=Et(),b=jt(M,w);b=__ut._encode(b);var x=lt,O=j,S=ot,I=__ut.getUrlParam(G,"ad_sp"),k="",C=document.getElementById("ga_itemDataBean_itemID");C&&(k=C.value);var E=it,A=L+R+"/ajaxDialog.gif";A=A+"?from="+t+"&dialog="+n+"&c1="+r+"&c2="+o+"&c3="+s+"&c4="+u+"&c5="+c+"&c6="+d+"&c7="+l+"&c8="+_+"&c9="+g+"&c10="+f+"&c11="+p+"&c12="+m+"&c13="+v+"&c14="+y+"&c15="+b+"&c16="+x+"&c17="+O+"&c18="+S+"&c19="+I+"&c20="+k+"&c21="+E;var T="";B&&(T=T+"&urlPattern="+B),B&&(T=T+"&urlPattern="+B);var P=document.getElementById("CSupplierID");(P=P?P.value:"")&&(T=T+"&sperId="+P),A+=T,__ut._httpGifSendPassH5(A)}},function(){var t=document.domain;if(-1<t.indexOf(".hksuning.com")||-1<t.indexOf(".snjijin.com")){var n=new Date;n.setTime(n.getTime()-1e4);var i=";expires="+n.toGMTString()+";path=/";document.cookie="_snma="+i+";domain=."+t,document.cookie="_snmc="+i+";domain=."+t,document.cookie="_snsr="+i+";domain=."+t,document.cookie="_snvd="+i+";domain=."+t}}(),sa.ready(pt),_samap.put=function(t,n){null==_samap.data[t]&&_samap.keys.push(t),_samap.data[t]=n,pt()},function(){var t=frames.length;if(0<t)for(var n=0;n<t;n++)try{frames[n].document.onclick=xt}catch(e){}}(),vt(document,"click",function(t){!function(t){try{var n=t||window.event||t;!function(t){try{var n=0,i=0,r=t||window.event;i=r.pageX?(n=r.pageX,r.pageY):(n=r.clientX+document.body.scrollLeft-document.body.clientLeft,r.clientY+document.body.scrollTop-document.body.clientTop),n=-1!=(n+"").indexOf(".")?n.toFixed(2):n,i=-1!=(i+"").indexOf(".")?i.toFixed(2):i;var a="("+n+","+i+")";""==sa.hotClickObj.pointSet?sa.hotClickObj.pointSet=a:sa.hotClickObj.pointSet=sa.hotClickObj.pointSet+";"+a,sa.hotClickObj.count=sa.hotClickObj.count+1,ft()}catch(e){}}(n)}catch(e){}}(t)}),vt(window,"unload",function(t){ft(!0)}),_saPageViewInit=function(){try{sa.pvId=N=__ut._getOnlyId();var t=[tt];tt?t.push("R"):t.push("G"),sa.pvHasSend=!1,__store.initPageSiteId(!0),B=(B=document.getElementById("URLPattern")||document.getElementById("CUrlPattern"))?B.value:"",ht(Dt(t))}catch(e){}},_saManuPageViewInit=function(){if(_t)try{Nt("","","","","","",24)}catch(e){throw new TypeError(e)}};function mt(){var o=this;o.sendByInnerImage=function(n){if(document.body){var i=document.createElement("iframe");i.height="0",i.width="0",i.style.display="none",i.style.visibility="hidden";var r=function(){i&&i.parentNode&&i.parentNode.removeChild(i)&&(i=null)};vt(window,"beforeunload",r);var a=!1;vt(i,"load",function(){if(!a)try{a=!0;var t=i.contentWindow.document.createElement("img");t.onload=t.onerror=function(){t.onload=t.onerror=null,t=null,r(),window.removeEventListener?window.removeEventListener("beforeunload",r,!1):window.detachEvent&&window.detachEvent("onbeforeunload",r)},t.src=n}catch(e){}}),document.body.appendChild(i)}else setTimeout(function(){o.sendByInnerImage(n)},100)},o.sendByIframe=function(t){if(document.body){var n=document.getElementById("_iframe_sa_sendByIframe");if(n)return!1;(n=document.createElement("iframe")).id="_iframe_sa_sendByIframe",n.src=t,n.height="0",n.width="0",n.style.display="none",n.style.visibility="hidden",document.body.appendChild(n)}else setTimeout(function(){o.sendByIframe(t)},100)}}function vt(t,n,i,r){t.addEventListener?t.addEventListener(n,i,!!r):t.attachEvent&&t.attachEvent("on"+n,i)}function yt(){var t=__ut._getCookie(E);return t&&null!=t&&""!=t||(t=A),at+J+ut+J+__ut._getSense()+J+__ut._getPrinColor()+J+__ut._getFlash()+J+__ut._getJava()+J+t}function wt(t){try{var n=["wd","q","w","query","p","word","keyword"],i=0,r=0;if(""!=W){for(var a=0;a<H.length;a++){var o=H[a];if(-1!=W.indexOf(o)){t.put("source",o.substring(1,o.length)),t.put("medium",F[1]),t.put("content",A),t.put("campaign",A),t.put("theme",A);for(var s=W.substring(W.indexOf("?")+1,W.length).split("&"),u=0;u<s.length;u++){for(var c=s[u].split("="),d=0;d<n.length;d++)if(n[d]===c[0]&&(t.put("medium",F[2]),0<W.indexOf(".haosou.com")&&"q"==c[0]||0<W.indexOf(".google.com")&&"p"==c[0]||0<W.indexOf(".sogou.com")&&("query"==c[0]||"keyword"==c[0])||0<W.indexOf(".bing.com")&&"q"==c[0]||0<W.indexOf(".yahoo.com")&&"p"==c[0]||0<W.indexOf(".youdao.com")&&"q"==c[0]||0<W.indexOf(".so.com")&&"q"==c[0]||0<W.indexOf(".baidu.com")&&("wd"==c[0]||"w"==c[0]||"word"==c[0])||0<W.indexOf(".sm.cn")&&"q"===c[0])){t.put("theme",c[1]+y);break}if((r=d)<n.length)break}break}}if((i=a)==H.length||i<H.length&&r==n.length){Tt(location.href);var l=Tt(W);if(-1==l.indexOf(".suning.com")&&-1==l.indexOf(".cnsuning.com")&&-1==l.indexOf(".hksuning.com")&&-1==l.indexOf(".snjijin.com")&&-1==l.indexOf(".suningssc.com")&&-1==l.indexOf(".suningpay.com")||-1!=l.indexOf("union.suning.com")){t.put("source",Tt(W)),t.put("medium",F[1]),t.put("content",A),t.put("campaign",A),t.put("theme",A);for(a=0;a<H.length;a++){o=H[a];if(-1!=W.indexOf(o)){t.put("source",o.substring(1,o.length));break}}}}}}catch(e){}return t}function bt(t){try{if(""!=G&&(0<G.indexOf("utm_source")||0<G.indexOf("utm_medium")||0<G.indexOf("utm_content")||0<G.indexOf("utm_campaign")||0<G.indexOf("utm_term"))){var n=G.substring(G.indexOf("?")+1,G.length);-1!==n.indexOf("#")&&(n=n.substring(0,n.indexOf("#")));for(var i=n.split("&"),r=0;r<i.length;r++){var a=i[r].split("=");if(!(a.length<2))if(a[1]=-1<a[1].indexOf("?")?a[1].split("?")[0]:a[1],"utm_source"==a[0])t.put("source",a[1]);else if("utm_medium"==a[0])t.put("medium",a[1]);else if("utm_content"==a[0])t.put("content",a[1]);else if("utm_campaign"==a[0])t.put("campaign",a[1]);else if("utm_term"==a[0]){var o=t.get("theme"),s=o?(c=y,(u=o)?u.substring(0,u.indexOf(c)+c.length):u):A+y;t.put("theme",s+a[1])}}}}catch(e){}var u,c;return t}function xt(){var t=__ut._getCookie(v);t&&t==G||__ut._addCookie(v,G,"/","","")}function Ot(){var t=__ut._getCookie(b);if(t&&null!=t&&""!=t){if(/^[|]\d{14,19}\|{5}$/.test(t)){var n=new Date,i=["1",t.split("|")[1],n.getTime(),n.getTime(),n.getTime(),0,0];return Pt(m,i)}i=t.split(J);return Pt(m,i)}n=new Date,i=["1",__ut._getOnlyId(),n.getTime(),n.getTime(),n.getTime(),0,0];return Pt(m,i)}function St(t){var n=jt(m,t);__ut._addCookie(b,n,"/",w,"")}function It(){var t,n=__ut._getCookie(x);if(n){var i=n.split(J);if(t=Pt(U,i),0===Q){var r=t.get("inTime");if(r&&/\d/.test(r)){var a=new Date(Number(r)).getDate();if((new Date).getDate()==a+1)return K=r,Q++,kt()}}return t}return kt()}function kt(){if(window._sa_utils.getSnvd("checksnvd"),0===Y){var t=Ot();t.put("totalVisits",Number(t.get("totalVisits"))+1),St(t),Y++}var n=__ut._getOnlyId();return Pt(U,[n,K,A,0])}function Ct(t){var n=jt(U,t);__ut._addCookie(x,n,"/","","")}function Et(){var t,n=__ut._getCookie(C);if(n&&null!=n&&""!=n){var i=n.split(J);t=Pt(M,i)}else{t=Pt(M,i=[N,A])}return t.put("pvid",N),t}function At(){var t=__ut._getCookie(I);if(t&&null!=t&&""!=t){var n=t.split(J);return Pt(k,n)}n=[F[0],F[0],A,A,A];return Pt(k,n)}function Tt(t){var n=t.substring(t.indexOf("/",t.indexOf("/")+1)+1);return n.substring(0,n.indexOf("/"))}function Pt(t,n){for(var i=new __ut.saHashMap,r=0;r<t.length;r++)i.put(t[r],n[r]);return i}function jt(t,n){for(var i="",r=0;r<t.length;r++)i=i+n.get(t[r])+J;return i.substring(0,i.length-1)}function Dt(t){if(!t||""==t)return"";for(var n="",i=0;i<t.length;i++)n=n+t[i]+J;return n.substring(0,n.length-1)}function Bt(t){for(301<t.length&&(t=t.substring(0,300));-1!=t.indexOf(J);)t=t.replace(J,"--");return t}function Nt(t,n,i,r,a,o,s){var u=__ut.getInitUrl(),c=__ut.getCurrencyUrl(s),d="",l=__ut._getCookie("_snma");if(null!=l&&null!=l&&0<=l.indexOf("|"))try{d=__ut._encode(l)}catch(e){}var _,g=X;_=document.title?q.encode(Bt(document.title)):"";var f="",p="",h="",m=__ut._getCookie("_snmb");if(null!=m&&null!=m&&0<=m.indexOf("|"))try{f=m.split("|")[1],p=m.split("|")[2],h=m.split("|")[3]}catch(e){}var v=document.getElementById("errorCode");v=v?v.value:"";var y="",w=__ut._getCookie("_snck");if(null!=w&&null!=w)try{y=w}catch(e){}var b="",x=__ut._getCookie("_snmz");if(null!=x&&null!=x&&0<=x.indexOf("|"))try{b=x.split("|")[1]}catch(e){}var O=document.getElementById("ssa-abtest");O=O?O.value:"";var S=__ut.getUrlParam(G,"ad_sp"),I=document.getElementById("ga_itemDataBean_itemID");I=I?I.value:"";var k=document.getElementById("URLPattern")||document.getElementById("CUrlPattern");k=k?k.value:"";var C="",E=__ut._getCookie("_snadtp");null!=E&&null!=E&&(C=E);var A=__ut._getCookie("_snadid"),T=null!=A?A:"",P=[g,_],j=__ut.getConnect(["ftitle","ctitle"],P,{type:2});j=__ut._encode(j);var D=[f,p],B=__ut.getConnect(["fit","fot"],D,{type:2});B=__ut._encode(B);var N,U,M,L=__ut._getValFromCookie("_snadclkid");function R(t){var n=null;return"safp"==t?(n=__ut._getToUrl(),__ut.getUrlParam(n,"safp")):"sapp"==t?(n=__ut._getFromUrl(),__ut.getUrlParam(n,"safp")):"safc"===t?(n=__ut._getToUrl(),__ut.getUrlParam(n,t)):""}N=R("safp"),U=R("sapp"),M=R("safc");var V=["err","clid","clickDots","ab_test","ad_sp","item_Id","urlPattern","adtype","adid","ad_clickid"],W=[v,y,b,O,S,I,k,C,T,L];N&&(V.push("safp"),W.push(N)),U&&(V.push("sapp"),W.push(U)),M&&(V.push("safc"),W.push(M));var H=__ut.getConnect(V,W,{type:2}),F=u+c+"&snma="+d+"&title="+j+"&ft="+B+"&ext="+(H=__ut._encode(H))+"&sec="+h;__ut._httpGifSend(F),tt+J+Z+J+ct+J+dt,"da_opt.js"==__ut.getJsResName&&function(){if(!z)return;var t=Ot().get("visitorid"),n=new mt,i="//cms.gtags.net/p?a=20&xid="+t;n.sendByInnerImage(i)}()}_sendExpoDatas=function(t,n,i){var r,a,o,s=1===n?(a="-",(o=document.getElementById("ga_itemDataBean_itemID")||document.getElementById("justAddPartNumber"))&&(r=18==(r=o.value).length?r.substring(9):r),r&&(a=r),a):"-",u=__ut.getInitUrl(),c=__ut.getCurrencyUrl(9),d="object"==typeof sn&&sn.cityId?sn.cityId:"",l=["pvid","expoinfo","cityId","item_Id"],_=[N,t,d,s],g=i?__ut.getConnect(l,_,{type:2,ext:i}):__ut.getConnect(l,_,{type:2});u=u+c+"&evdl="+(g=__ut._encode(g)),__ut._httpGifSendPassH5(u)},_analyseExpoTags=function(e,t){var n=e,i=t,r=null;__ut.isObjArgument(e)&&(n=e.tag,i=e.prefix,e=__ut._deleteKey(e,["tag","prefix"]),__ut.isEmptyObj(e)||(r=e));var a=document.getElementsByTagName(n),o="",s="baoguang_",u=new RegExp("^"+s),c=1;2==arguments.length&&(s=i,u=new RegExp("^"+s),c=2);for(var d=0,l=a.length;d<l;d++){var _=a[d].id;u.test(_)&&(o=(o+=(_=_.substring(9))+"#@#").replace(/\|/g," "))}""!==o?(o=o.substring(0,o.length-3),_sendExpoDatas(o,c,r)):_sendExpoDatas("-",c,r)},_ssaSendPvData=function(t,n,i){try{V=i,G=n,W=t,X=A;var r=[tt];tt?r.push("R"):r.push("G"),sa.pvHasSend=!1,B=(B=document.getElementById("URLPattern")||document.getElementById("CUrlPattern"))?B.value:"",ht(Dt(r))}catch(e){}},_sendOrderDatas=function(t){if(!t||""==t)return!1;var n=__ut.getInitUrl(),i=__ut.getCurrencyUrl(11),r=d,a=N,o=__ut._getCookie("_snms");(!o&&null==o||""==o)&&(o=A);var s=[a,t,o,r],u=__ut.getConnect(["pvid","order_id","search_id","item_id"],s,{type:2}),c=n+i+"&evdl="+(u=__ut._encode(u));__ut._httpGifSend(c)},_sendOrderInfo=function(e,t){var n=e,i=t,r=null;if(__ut.isObjArgument(e)&&(n=e.orderId,i=e.orderInfo,e=__ut._deleteKey(e,["orderId","orderInfo"]),__ut.isEmptyObj(e)||(r=e)),!n)return!1;i||(i=n);try{var a=__ut.getInitUrl(),o=__ut.getCurrencyUrl(11),s=N,u=__ut._getCookie("_snms");(!u&&null==u||""==u)&&(u=A);var c=["pvid","order_id","search_id","item_id"],d=[s,n,u,i],l=r?__ut.getConnect(c,d,{type:2,ext:r}):__ut.getConnect(c,d,{type:2}),_=a+o+"&evdl="+(l=__ut._encode(l));-1!==_.indexOf("&i=lRf&")&&__ut._addStorage("sa_ord_info",_),__ut._httpGifSend(_,function(){__ut._delStorage("sa_ord_info")})}catch(e){}},_sendRegisterDatas=function(t){var n=__ut.getInitUrl(),i=__ut.getCurrencyUrl(4),r=[N,t],a=__ut.getConnect(["pvid","registerId"],r,{type:2}),o=n+i+"&evdl="+(a=__ut._encode(a));__ut._httpGifSendPassH5(o)},_sendStorageDatas=function(t){var n=__ut.getInitUrl(),i=__ut.getCurrencyUrl(8),r=function(t){var n="";try{var i="",r="",a="",o="",s="",u="",c="",d="",l="",_=t.split("|"),g=_[0],f=_[1],p=_[2],h=document.getElementById("supplierID"),m=h?h.value.replace(/\|/g," "):"can not get supplierId";(c=document.getElementById("deliverytype"))&&(c=c.value);var v=document.getElementById("mdmDistrictId");v&&(r=v.value);var y=document.getElementById("manageInvFlag");y&&(o=y.value);var w=document.getElementById("operatetype");w&&(u=w.value);var b=document.getElementById("productStatus");b&&(s=b.value);var x=document.getElementById("productStatusDesc");x&&(d=x.value);var O=document.getElementById("mdmProvinceId");O&&(i=O.value);var S=document.getElementById("delivery");S&&(l=S.value);var I="",k="",C=document.getElementById("shop_code"),E=document.getElementById("shop_name");C&&(I=C.value),E&&(k=E.value,k=__ut._encode(k));var A="",T=document.getElementById("suppliernewID");T&&(A=T.value);var P=document.getElementById("vendorType");P&&(a=P.value);var j=[N,g,f,p,m,c,r,o,u,s,d,i,I,k,A,a,at,ot,l];n=__ut.getConnect(["pvid","productid","city","shipOffset","supplierID","deliverytype","districtId","manageInvFlag","operatetype","productStatus","productStatusDesc","provinceId","storeid","shname","suppliernewID","vendorType","os","ter","delivery"],j,{type:2,ext:__extMap.get("storeExtData")})}catch(e){}return n}(t),a=n+i+"&evdl="+(r=__ut._encode(r));__ut._httpGifSend(a)}}(),function(){function i(e,t,n,i){var r=e,a=null,o=t||n;__ut.isObjArgument(e)&&e.tag&&(r=e.tag,e=__ut._deleteKey(e,["tag"]),__ut.isEmptyObj(e)||(a=e));var s=__expo.getSaData(r);s.saflag=r.tagName||"",s=__ut._encode(__ut.stringify(s));var u=r.title?__ut._encode(r.title):"";if(""==u){var c=r.attributes.title;null!=c&&null!=c&&(u=c.value?__ut._encode(c.value):"")}if(null!=n&&null!=n&&""!=n){var d=r.attributes[n];null!=d&&null!=d&&(u=d.value?__ut._encode(d.value):"")}var l=r.name?__ut._encode(r.name):"";if(""===l){var _=r.attributes.name;null!=_&&null!=_&&(l=_.value?__ut._encode(_.value):"")}if(null!=t&&null!=t&&""!=t){var g=r.attributes[t];null!=g&&null!=g&&(l=g.value?__ut._encode(g.value):t+" undefined")}var f=r.getAttribute("href")||"",p=-1===f.indexOf("javascript:")?f:"",h=__ut.getInitUrl(),m=__ut.getCurrencyUrl(2),v={sa_data:s,tname:l,title:u,targeturl:p},y=a?__ut._assign(v,a):v,w=__ut.getClickDetailUrl(r,y),b=__ut.jsonParse(w);if(w=__ut._encode(w),sa._spmSwitch&&__ut.checkLabel(r)&&document.body.contains(r))(a||o)&&(a=__ut._assign({eventType:"sacustomclick"},a),a=__ut._assign(b,a),SAUP.sendLogData("custom",a));else{var x=h+m+"&evdl="+w,O=__ut.getUrlParam(x,"id");__ut._addCookie("_snck",O,"/","",""),__ut._httpGifSend(x)}}sa.click||(sa.click={});var t=sa.click;t.sendDatasIndex=i,t.sendClickData=function(t,n){i(t,null,null)}}(),Mz={eleid:"",saBase64:new __ut.saBase64,getFinalTarget:function(t){return t?"body"==t.tagName.toLocaleLowerCase()?"":__ut.checkLabel(t)?t:arguments.callee(t.parentNode):""},getModObj:function(t,n){try{var i=__ut.getSaModid(t);return"body"==t.tagName.toLocaleLowerCase()?{id:0,ele:n}:i?{id:i,ele:n}:arguments.callee(t.parentNode,n)}catch(e){}},getEleId:function(t,n){if(0===t.id)return md5(n.tpath).substr(0,10);if(__ut.getSaModid(t.ele))return"0";for(var i=__ut.getSaModLabel,r=__ut.selectorModid("sap-modid",t.id),a=0;a<r.length;a++)for(var o=i(r[a],t.ele.tagName.toLocaleLowerCase()),s=0;s<o.length;s++)if(o[s]==t.ele)return 0==a?s+1:md5(n.tpath).substr(0,10)},getSap:function(t,n){try{var i,r,a,o;i=__store.getSiteid(),r=__store.getPageid();var s,u,c=Mz.getModObj(t,t);return a=c.id,(o=Mz.eleid||Mz.getEleId(c,n))?(u="siteid="+i+"&pageid="+r+"&modid="+a+"&eleid="+o,s=i+"."+r+"."+a+"."+o,window.saSap={xPath:n.tpath,code64:this.saBase64.encode(u),safp:s},{sap:this.saBase64.encode(u),safp:s}):!1}catch(e){}},checkHrefHash:function(t,n){var i="",r=t.indexOf("#");return i+=t.substring(0,r)+n+t.substring(r,t.length)},getSafpSwitch:function(t){var n=__ut.getConfig(),i=[];n&&(i=n.sendParam?n.sendParam:[]);for(var r=0;r<i.length;r++)if("string"==typeof i[r]&&-1<t.indexOf(i[r]))return!0}},sa._spmSwitch=!1,sa.ready(function(){var t=__ut.getMetaVal("autoclick")||"",n=__ut.getMetaVal("pageid")||"";"true"===t&&""!==n&&(sa._spmSwitch=!0),__store.initPageSiteId()}),sa.ready(function(){if(sa._spmSwitch){function i(t){var n=__ut.readInfor(t),i=t.getAttribute("sa-data");i=i?i.replace(/'/g,'"'):"{}";try{i=__ut.jsonParse(i),__ut.isObject(i)||(i={})}catch(e){i={}}Mz.eleid=__ut.getSaDataEleid(i),(i=__ut.setSadata(n.targeturl,i)||i).adtype&&__ut._addCookie("_snadtp",i.adtype,"/","",""),i.adid&&__ut._addCookie("_snadid",i.adid,"/","",""),i.saflag=t.tagName||"",n.sa_data=__ut._encode(__ut.stringify(i));var r=t.getAttribute("saname")||t.getAttribute("name")||"";n.tname=__ut._encode(r);var a=t.getAttribute("satitle")||t.getAttribute("title")||t.getAttribute("alt")||"";n.title=__ut._encode(a);var o=Mz.getSap(t,n);if(!o)return!1;var s,u=o.sap,c=o.safp,d=__ut.getSafcVal(i);n.sap=u,n.safp=c;var l=d?c+"&safc="+d:c,_=n.targeturl,g=_?_.split("?")[0]:"";if(_&&!/^(javascript|#)/i.test(_)&&!/(\?|&)safp=/.test(_)&&Mz.getSafpSwitch(g)){if(-1<(_=_.replace(/(\s*$)/g,"")).indexOf("#"))if(-1==_.indexOf("?")){var f="?safp="+l;_=Mz.checkHrefHash(_,f)}else _=_.indexOf("?")>_.indexOf("#")?_[_.indexOf("?")+1]?_+"&safp="+l:_+"safp="+l:(f="&safp="+l,Mz.checkHrefHash(_,f));else _=-1==_.indexOf("?")?_+"?safp="+l:_[_.indexOf("?")+1]?_+"&safp="+l:_+"safp="+l;t.setAttribute("href",_),n.targeturl=_}n.targeturl=__ut.getTargetUrl(t,"href","sahref"),s=__ut.getClickDetailUrl(t,n),__ut._httpGifSend(__ut.getInitUrl()+__ut.getCurrencyUrl(2)+"&evdl="+__ut._encode(s))}__ut.addEvent(document.body,"click",function(e){var t,n=__ut.getTrg(e);if(!__ut.checkLabel(n)){if(t=Mz.getFinalTarget(n))try{i(t)}catch(e){}return!0}try{i(n)}catch(e){}})}}),_searchDataSaPush=_searchInner=function(t,e,n,i,r){var a=t,o=e,s=n,u=i||"",c=r||"",d=null;__ut.isObjArgument(t)&&(a=t.totalRows,o=t.searchKeyWord,s=t.kuozhanKeyWord,u=t.searchCategory,c=t.searchType,t=__ut._deleteKey(t,["totalRows","searchKeyWord","kuozhanKeyWord","searchCategory","searchType"]),d=__ut.isEmptyObj(t)?null:t),d&&__extMap.put("searchExtDatas",d);try{a||(a=0);var l=document.location.href,_=(_=__ut.getUrlParam(l,"ci"))||"",g=(g=__ut.getUrlParam(l,"catalogId"))||"",f="";if(o)f=o.replace(/%7C/g,"");else{var p=document.getElementById("keyword");f=p?p.value.replace(/%7C/g,""):""}var h="";if(s)h=s.replace(/%7C/g,"");else{var m=document.getElementById("kuozhan_key_words");h=m?m.value.replace(/%7C/g,""):""}var v="",y=document.getElementById("replace_key_words");if(null!=y){var w=y.value;if(null!=w&&null!=w&&""!=w){var b=w.split("*:*");2<=b.length&&(v=b[0],f=(f=b[1])?f.replace(/%7C/g,""):"",v=v?v.replace(/%7C/g,""):"")}}var x=document.getElementById("sa_splited_key_words"),O=[f,a,"0",x?x.value:"",_,g,v,h,u,c];_samap.put("_saSearchDatas",O)}catch(e){}},window._spmPageBridge={},window._spmPageBridge.currentOrigin="",__ut.addEvent(window,"message",function t(e){if("string"==typeof e.data&&(-1<e.data.indexOf('"type":"initSpm"')||-1<e.data.indexOf('"type":"init"'))&&(-1<e.origin.indexOf("ssa.cnsuning.com")||-1<e.origin.indexOf("ssasit.cnsuning.com")||-1<e.origin.indexOf("ssaxgpre.cnsuning.com")||-1<e.origin.indexOf("ssapre.cnsuning.com")||-1<e.origin.indexOf("ssadev.cnsuning.com")||-1<e.origin.indexOf("salocpre.cnsuning.com")||-1<e.origin.indexOf("salocsit.cnsuning.com")||-1<e.origin.indexOf("localhost"))){window._spmPageBridge.currentOrigin=e.origin;var n="";-1<e.origin.indexOf("ssa")&&-1<e.data.indexOf('"type":"init"')&&(n="ssa_front.js"),-1<e.data.indexOf('"type":"initSpm"')&&(n="spm_front.js");var i=document.createElement("script");i.type="text/javascript";var r=__ut.getJsUrl("da_opt.js");__conf.isSaPrd?i.src="//res.suning.cn/javascript/sn_da/"+n:r&&-1<r.indexOf("pre")?r&&-1<r.indexOf("xg")?i.src="//resprexg.suning.cn/javascript/sn_da/"+n:i.src="//preres.suning.cn/javascript/sn_da/"+n:i.src="//sitres.suning.cn/javascript/sn_da/"+n,document.body.appendChild(i),__ut.removeEvent(window,"message",t)}}),function(){function t(t){if(t)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var n=new ArrayBuffer(68);this.buffer8=new Uint8Array(n),this.blocks=new Uint32Array(n)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==typeof window,i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==typeof self,h=!i.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,o="function"==typeof _define&&_define.amd,a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var b=function(n){return function(e){return new t(!0).update(e)[n]()}},v=function(){var n=b("hex");h&&(n=w(n)),n.create=function(){return new t},n.update=function(t){return n.create().update(t)};for(var e=0;e<c.length;++e){var i=c[e];n[i]=b(i)}return n},w=function(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(n){if("string"==typeof n)return e.createHash("md5").update(n,"utf8").digest("hex");if(null==n)throw r;return n.constructor===ArrayBuffer&&(n=new Uint8Array(n)),Array.isArray(n)||ArrayBuffer.isView(n)||n.constructor===i?e.createHash("md5").update(new i(n)).digest("hex"):t(n)};return s};t.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if("string"!==n){if("object"!==n)throw r;if(null===t)throw r;if(a&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||a&&ArrayBuffer.isView(t)))throw r;e=!0}for(var i,o,s=0,u=t.length,c=this.blocks,d=this.buffer8;s<u;){if(this.hashed&&(this.hashed=!1,c[0]=c[16],c[16]=c[1]=c[2]=c[3]=c[4]=c[5]=c[6]=c[7]=c[8]=c[9]=c[10]=c[11]=c[12]=c[13]=c[14]=c[15]=0),e)if(a)for(o=this.start;s<u&&o<64;++s)d[o++]=t[s];else for(o=this.start;s<u&&o<64;++s)c[o>>2]|=t[s]<<y[3&o++];else if(a)for(o=this.start;s<u&&o<64;++s)(i=t.charCodeAt(s))<128?d[o++]=i:d[o++]=(d[o++]=i<2048?192|i>>6:(d[o++]=i<55296||57344<=i?224|i>>12:(i=65536+((1023&i)<<10|1023&t.charCodeAt(++s)),d[o++]=240|i>>18,128|i>>12&63),128|i>>6&63),128|63&i);else for(o=this.start;s<u&&o<64;++s)(i=t.charCodeAt(s))<128?c[o>>2]|=i<<y[3&o++]:(i<2048?c[o>>2]|=(192|i>>6)<<y[3&o++]:(i<55296||57344<=i?c[o>>2]|=(224|i>>12)<<y[3&o++]:(i=65536+((1023&i)<<10|1023&t.charCodeAt(++s)),c[o>>2]|=(240|i>>18)<<y[3&o++],c[o>>2]|=(128|i>>12&63)<<y[3&o++]),c[o>>2]|=(128|i>>6&63)<<y[3&o++]),c[o>>2]|=(128|63&i)<<y[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,64<=o?(this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return 4294967295<this.bytes&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,n=this.lastByteIndex;t[n>>2]|=u[3&n],56<=n&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var t,n,e,i,r,a,o=this.blocks;n=this.first?((n=((t=((t=o[0]-680876937)<<7|t>>>25)-271733879<<0)^(e=((e=(-271733879^(i=((i=(-1732584194^2004318071&t)+o[1]-117830708)<<12|i>>>20)+t<<0)&(-271733879^t))+o[2]-1126478375)<<17|e>>>15)+i<<0)&(i^t))+o[3]-1316259209)<<22|n>>>10)+e<<0:(t=this.h0,n=this.h1,e=this.h2,((n+=((t=((t+=((i=this.h3)^n&(e^i))+o[0]-680876936)<<7|t>>>25)+n<<0)^(e=((e+=(n^(i=((i+=(e^t&(n^e))+o[1]-389564586)<<12|i>>>20)+t<<0)&(t^n))+o[2]+606105819)<<17|e>>>15)+i<<0)&(i^t))+o[3]-1044525330)<<22|n>>>10)+e<<0),n=((n+=((t=((t+=(i^n&(e^i))+o[4]-176418897)<<7|t>>>25)+n<<0)^(e=((e+=(n^(i=((i+=(e^t&(n^e))+o[5]+1200080426)<<12|i>>>20)+t<<0)&(t^n))+o[6]-1473231341)<<17|e>>>15)+i<<0)&(i^t))+o[7]-45705983)<<22|n>>>10)+e<<0,n=((n+=((t=((t+=(i^n&(e^i))+o[8]+1770035416)<<7|t>>>25)+n<<0)^(e=((e+=(n^(i=((i+=(e^t&(n^e))+o[9]-1958414417)<<12|i>>>20)+t<<0)&(t^n))+o[10]-42063)<<17|e>>>15)+i<<0)&(i^t))+o[11]-1990404162)<<22|n>>>10)+e<<0,n=((n+=((t=((t+=(i^n&(e^i))+o[12]+1804603682)<<7|t>>>25)+n<<0)^(e=((e+=(n^(i=((i+=(e^t&(n^e))+o[13]-40341101)<<12|i>>>20)+t<<0)&(t^n))+o[14]-1502002290)<<17|e>>>15)+i<<0)&(i^t))+o[15]+1236535329)<<22|n>>>10)+e<<0,n=((n+=((i=((i+=(n^e&((t=((t+=(e^i&(n^e))+o[1]-165796510)<<5|t>>>27)+n<<0)^n))+o[6]-1069501632)<<9|i>>>23)+t<<0)^t&((e=((e+=(t^n&(i^t))+o[11]+643717713)<<14|e>>>18)+i<<0)^i))+o[0]-373897302)<<20|n>>>12)+e<<0,n=((n+=((i=((i+=(n^e&((t=((t+=(e^i&(n^e))+o[5]-701558691)<<5|t>>>27)+n<<0)^n))+o[10]+38016083)<<9|i>>>23)+t<<0)^t&((e=((e+=(t^n&(i^t))+o[15]-660478335)<<14|e>>>18)+i<<0)^i))+o[4]-405537848)<<20|n>>>12)+e<<0,n=((n+=((i=((i+=(n^e&((t=((t+=(e^i&(n^e))+o[9]+568446438)<<5|t>>>27)+n<<0)^n))+o[14]-1019803690)<<9|i>>>23)+t<<0)^t&((e=((e+=(t^n&(i^t))+o[3]-187363961)<<14|e>>>18)+i<<0)^i))+o[8]+1163531501)<<20|n>>>12)+e<<0,n=((n+=((i=((i+=(n^e&((t=((t+=(e^i&(n^e))+o[13]-1444681467)<<5|t>>>27)+n<<0)^n))+o[2]-51403784)<<9|i>>>23)+t<<0)^t&((e=((e+=(t^n&(i^t))+o[7]+1735328473)<<14|e>>>18)+i<<0)^i))+o[12]-1926607734)<<20|n>>>12)+e<<0,n=((n+=((a=(i=((i+=((r=n^e)^(t=((t+=(r^i)+o[5]-378558)<<4|t>>>28)+n<<0))+o[8]-2022574463)<<11|i>>>21)+t<<0)^t)^(e=((e+=(a^n)+o[11]+1839030562)<<16|e>>>16)+i<<0))+o[14]-35309556)<<23|n>>>9)+e<<0,n=((n+=((a=(i=((i+=((r=n^e)^(t=((t+=(r^i)+o[1]-1530992060)<<4|t>>>28)+n<<0))+o[4]+1272893353)<<11|i>>>21)+t<<0)^t)^(e=((e+=(a^n)+o[7]-155497632)<<16|e>>>16)+i<<0))+o[10]-1094730640)<<23|n>>>9)+e<<0,n=((n+=((a=(i=((i+=((r=n^e)^(t=((t+=(r^i)+o[13]+681279174)<<4|t>>>28)+n<<0))+o[0]-358537222)<<11|i>>>21)+t<<0)^t)^(e=((e+=(a^n)+o[3]-722521979)<<16|e>>>16)+i<<0))+o[6]+76029189)<<23|n>>>9)+e<<0,n=((n+=((a=(i=((i+=((r=n^e)^(t=((t+=(r^i)+o[9]-640364487)<<4|t>>>28)+n<<0))+o[12]-421815835)<<11|i>>>21)+t<<0)^t)^(e=((e+=(a^n)+o[15]+530742520)<<16|e>>>16)+i<<0))+o[2]-995338651)<<23|n>>>9)+e<<0,n=((n+=((i=((i+=(n^((t=((t+=(e^(n|~i))+o[0]-198630844)<<6|t>>>26)+n<<0)|~e))+o[7]+1126891415)<<10|i>>>22)+t<<0)^((e=((e+=(t^(i|~n))+o[14]-1416354905)<<15|e>>>17)+i<<0)|~t))+o[5]-57434055)<<21|n>>>11)+e<<0,n=((n+=((i=((i+=(n^((t=((t+=(e^(n|~i))+o[12]+1700485571)<<6|t>>>26)+n<<0)|~e))+o[3]-1894986606)<<10|i>>>22)+t<<0)^((e=((e+=(t^(i|~n))+o[10]-1051523)<<15|e>>>17)+i<<0)|~t))+o[1]-2054922799)<<21|n>>>11)+e<<0,n=((n+=((i=((i+=(n^((t=((t+=(e^(n|~i))+o[8]+1873313359)<<6|t>>>26)+n<<0)|~e))+o[15]-30611744)<<10|i>>>22)+t<<0)^((e=((e+=(t^(i|~n))+o[6]-1560198380)<<15|e>>>17)+i<<0)|~t))+o[13]+1309151649)<<21|n>>>11)+e<<0,n=((n+=((i=((i+=(n^((t=((t+=(e^(n|~i))+o[4]-145523070)<<6|t>>>26)+n<<0)|~e))+o[11]-1120210379)<<10|i>>>22)+t<<0)^((e=((e+=(t^(i|~n))+o[2]+718787259)<<15|e>>>17)+i<<0)|~t))+o[9]-343485551)<<21|n>>>11)+e<<0,this.first?(this.h0=t+1732584193<<0,this.h1=n-271733879<<0,this.h2=e-1732584194<<0,this.h3=i+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+n<<0,this.h2=this.h2+e<<0,this.h3=this.h3+i<<0)},t.prototype.hex=function(){this.finalize();var t=this.h0,i=this.h1,e=this.h2,r=this.h3;return n[t>>4&15]+n[15&t]+n[t>>12&15]+n[t>>8&15]+n[t>>20&15]+n[t>>16&15]+n[t>>28&15]+n[t>>24&15]+n[i>>4&15]+n[15&i]+n[i>>12&15]+n[i>>8&15]+n[i>>20&15]+n[i>>16&15]+n[i>>28&15]+n[i>>24&15]+n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[r>>4&15]+n[15&r]+n[r>>12&15]+n[r>>8&15]+n[r>>20&15]+n[r>>16&15]+n[r>>28&15]+n[r>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,n=this.h1,e=this.h2,i=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&i,i>>8&255,i>>16&255,i>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),n=new Uint32Array(t);return n[0]=this.h0,n[1]=this.h1,n[2]=this.h2,n[3]=this.h3,t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var t,n,e,i="",r=this.array(),a=0;a<15;)t=r[a++],n=r[a++],e=r[a++],i+=p[t>>>2]+p[63&(t<<4|n>>>4)]+p[63&(n<<2|e>>>6)]+p[63&e];return t=r[a],i+(p[t>>>2]+p[t<<4&63]+"==")};var _=v();f?module.exports=_:(i.md5=_,o&&_define(function(){return _}))}(),sa.ready(_heimdallr)}function create_snadclkid(t){var n=t||document.location.href,i=/(^\s*)|(\s*$)/g;function r(t){return(__ut.getUrlParam(n,t)||"").replace(i,"")}var a=r("click_id")||r("clickid")||r("bd_vid")||r("gdt_vid");a&&__ut._addCookie("_snadclkid",a,"/",864e5,"")}function getssaCfg(){var n=__ut._getStorage("saConfig"),i={},r=!1;__ut._delStorage("ssaCfg"),(n=n&&"undefined"!==n?__ut.jsonParse(n):null)&&(autoExpoEvent(n),r=!0);var t="//"+__ut.getSaServer()+"/jsConfig.action";try{__ut._ajax({type:"get",url:t,data:{dm:location.hostname},success:function(t){i=t?__ut.jsonParse(t):{},n&&i.version===n.version||__ut._addStorage("saConfig",t),__conf.ssaCfg=i,r||autoExpoEvent(i)},error:function(t){__conf.ssaCfg=n}})}catch(e){}}function expoManual(t){var n=t;if(!document.querySelectorAll)return!1;if(n&&("function"==typeof n.getAttribute||"object"==typeof n.getAttribute)){var i=__store.getSiteid(),r=__store.getPageid();if(i&&r){var a=__expo.getModInfo(n,n);if(a&&a.id){var o=__expo.getSaData(n),s=__ut.getSaDataEleid(o)||__expo.getExpoEleid(n,a.id),u=n.getAttribute("sahref")||n.getAttribute("href")||"";if(!s&&0!==s)return;var c={name:n.getAttribute("saname")||n.getAttribute("name")||"",id:n.getAttribute("said")||n.getAttribute("id")||"",sa_data:__ut._encode(__ut.stringify(o)),safp:i+"."+r+"."+a.id+"."+s,targeturl:u};__expo.cacheData(c)}}}}function autoExpoEvent(t){if(!sa.repeatAutoexpo&&(sa.repeatAutoexpo=!0,t&&document.querySelectorAll&&__ut.isArray(t.expo))){!__ut.isArray(t.newexpo)&&(t.newexpo=[]);var n=__expo.isOpenExpo(t.expo,t.newexpo);__expo.expo=t.expo,__expo.newexpo=t.newexpo;try{1===n&&function(){var t=document.querySelectorAll("img[src]");if(t&&0!==t.length)for(var n=0,i=t.length;n<i&&!(60<=n);n++)this.startExposure(t[n],!0)}.call(__expo)}catch(e){throw new TypeError(e)}sa.ready(function(){n&&__expo.initExpo()})}}function _heimdallr(){if(!0!==sa.heimdallrSend){var t=window.navigator.platform,n=(new window.Date).getTimezoneOffset();n=void 0!==n?n:"undefined";var i=window.navigator.vendor;i="string"==typeof i?i:"undefined";var r=window.ActiveXObject;r=void 0!==r||"undefined";var a=window.navigator.cpuClass;a=void 0===a?"undefined":a;var o=window.navigator.oscpu;o=void 0===o?"undefined":o;var s=window.safari;s=void 0!==s||"undefined";var u=function(t){try{return md5(t.toDataURL())}catch(e){return"undefined"}}(function(){try{var t=window.document.createElement("canvas"),n=t.getContext("2d"),i="Suning Fingerprints/Canvas 1.0";return n.textBaseline="top",n.font="14px 'Arial'",n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(125,1,62,20),n.fillStyle="#069",n.fillText(i,2,15),n.fillStyle="rgba(102, 204, 0, 0.7)",n.fillText(i,4,17),t}catch(e){return window.console&&console.log("unsupported canvas",e),null}}()),c=function(){var t=["webkit","moz","ms","o"];if("hidden"in window.document)return window.document.hidden;for(var n=0;n<t.length;n++)if(t[n]+"Hidden"in window.document)return window.document[t[n]+"Hidden"];return null}();c=null===c?"undefined":c;var d=function(){var t=["webkit","moz","ms","o"];if("visibilityState"in window.document)return window.document.visibilityState;for(var n=0;n<t.length;n++)if(t[n]+"VisibilityState"in window.document)return window.document[t[n]+"VisibilityState"];return null}();d=d||"undefined";var l=[function(){try{return[window.document.body.clientWidth,window.document.body.clientHeight]}catch(e){return["undefined","undefined"]}}().join("x"),function(){try{return[window.document.body.scrollWidth,window.document.body.scrollHeight]}catch(e){return["undefined","undefined"]}}().join("x"),[window.screen.width,window.screen.height].join("x"),[window.screen.availWidth,window.screen.availHeight].join("x")].join(","),_=window.navigator.product;_=void 0===_?"undefined":_;var g=window.navigator.productSub;g=void 0===g?"undefined":g;var f=window.navigator.buildID,p=t+"|"+n+"|"+i+"|"+r+"|"+a+"|"+o+"|"+s+"|"+u+"|"+c+"|"+d+"|"+l+"|"+_+"|"+g+"|"+(f=void 0===f?"undefined":f),h=new __ut.saBase64;SAUP.sendLogData("custom",{eventType:"heimdallr",mt:h.encode(p)}),sa.heimdallrSend=!0}}}(window);