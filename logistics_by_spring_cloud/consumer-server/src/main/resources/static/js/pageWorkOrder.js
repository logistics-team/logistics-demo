// 分页控件 created by Jay.Wu

//var pageOptions = null;
var pageOptions = {isJump:true, isPost:true};
var pageUrl;
var pageNum;
var pageUtilForm = "pageUtilForm";

$.ajaxSetup({
 contentType: "application/x-www-form-urlencoded; charset=utf-8"
});

function turnPage(postUrl, url, page) {
	pageUrl = url;
	pageNum = page;
	parentUrl = getSearchString(postUrl,"parentUrl");
	if (pageOptions) {
		if (pageOptions.func) {
			pageOptions.func();
		}
		if (pageOptions.isJump) {
			if (pageOptions.isPost) {
				document.getElementById(pageUtilForm).submit = function(){
					$.ajax({
						type:"post",	
						url:pageUrl+page,				
						data:{page:page},
						contentType:"application/x-www-form-urlencoded; charset=utf-8",
						error: function(){
							alert('Error loading web_jsp document');
						},
						success:function(data){
							document.getElementById("workOrder").innerHTML = data;
						}
					});
					return false;
				};
				document.getElementById(pageUtilForm).submit();
			} else {
				alert(url);
////				window.location = url + page;
//				$.ajax({
//					type:"post",	
//					url:url+page,				
//					data:,
//					error: function(){
//						alert('Error loading web_jsp document');
//					},
//					success:function(data){
//						alert(data);
//					}
//				});
			}
		}

		if (pageOptions.para) {
		}

	} else {
		document.getElementById(pageUtilForm).submit = function(){
			$.ajax({
				type:"post",	
				url:url+page,				
				data:{page:page,parentUrl:parentUrlStr},
				error: function(){
					alert('Error loading web_jsp document');
				},
				success:function(data){
					document.getElementById("newlistPage").innerHTML = data;
				}
			});
			return false;
		}
	}
}

//ajax翻页
	var xmlHttp = createXMLHttpRequest();
	function createXMLHttpRequest() {
		var xmlHttp = false;
		if (window.XMLHttpRequest) { // Mozilla, Safari,...
			xmlHttp = new XMLHttpRequest();
			if (xmlHttp.overrideMimeType){
				xmlHttp.overrideMimeType('text/xml');
			}
		}else if (window.ActiveXObject){ // IE
			try{
				xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
			}catch(E) {
				try{
					xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
				}catch(E){}
			}
		}
		if (!xmlHttp) {
			alert('');
			return false;
		}
		return xmlHttp;
	}
	function getContent(url,div){
		document.getElementById(div).innerHTML = "<center style='font-size: 0.28rem;'><img src='<%=basePath%>/images/ajax/ajax-loader.gif'><br>正在查询...</center>";
		var xmlHttp=createXMLHttpRequest();
		xmlHttp.open('POST', url, true);
		xmlHttp.send(null);
		xmlHttp.onreadystatechange =function(){
			if(xmlHttp.readyState != 4) {
				return;
			}
			if (xmlHttp.status != 200) {
				return;
			}
			alert(div);
			document.getElementById(div).innerHTML=xmlHttp.responseText;
		}
	}
	function getSearchString(url,key) {  
		var result = "";
	    // 获取URL中?之后的字符  
	    var str = url.substring(url.indexOf("?"),url.length);  
	    str = str.substring(1,str.length);  
	      
	    // 以&分隔字符串，获得类似name=123这样的元素数组  
	    var arr = str.split("&");  
	    var obj = new Object();  
	      
	    // 将每一个数组元素以=分隔并赋给obj对象      
	    for(var i = 0; i < arr.length; i++) {  
	        var tmp_arr = arr[i].split("="); 
	        if(decodeURIComponent(tmp_arr[0]) == key){
	        	result = decodeURIComponent(tmp_arr[1]);
	        }
	    }  
	    return result;  
	}  
