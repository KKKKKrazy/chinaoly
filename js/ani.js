//window.onload = function() {
$(function(){
	var ck = new Cookie("HasLoaded"); //每个页面的new Cookie名HasLoaded不能相同
	var ani=document.getElementsByClassName("ani")[0];
//	var div=document.getElementsByClassName("ani")[0].getElementsByTagName("h1")[0].getElementsByTagName("div")[0];
	var div=$(".ani h1 div").eq(0);
	if(ck.Read() == null) { //未加载过，Cookie内容为空
//		alert("首次打开页面");
		ani.style.display="block";
		div.addClass("aning");
//		div.fadeIn()
		setTimeout(function(){
			ani.style.display="none";
			
		},3000);
		//设置保存时间
		var dd = new Date();
		dd = new Date(dd.getFullYear(), dd.getMonth(), dd.getDate());
		dd.setDate(dd.getDate() + 3);
		ck.setExpiresTime(dd);
		ck.Write("true"); //设置Cookie。只要浏览器不关闭，Cookie就一直存在
	} else { //Cookie存在，表示页面是被刷新的
//		alert("页面刷新");
//      刷新则没有动画
		ani.style.display="none";
	}
})
//}