//搜索重置
$("#reset").click(function(){
	if($("#searchTxt").val()){
		$("#searchTxt").val("");
	}
})
//$(".mod").mouseover(function(){
////	alert(1)
//	$(".big").removeClass("big");
//	$(".mod").animate({"height":"100px","width":"100px"},600)
//	$(this).addClass("big");
//	$(".big").animate({"height":"160px","width":"160px"},600)
//})
for(var i in $(".mod")){
	$(".mod").eq(i).unbind("mouseover").bind({
	"mouseover":function(){
		if(($(this).className!="big")){
//			$(".big").animate({"height":"106px","width":"106px","margin-top":"35px"},400)
			$(".mod").removeClass("big");
	//		$(".mod").animate({"height":"100px","width":"100px"},400)
			$(this).addClass("big");
//			$(".big").animate({"height":"160px","width":"160px","margin-top":"13px"},400)
		}else{
			
		}
//		if($(this)!=$(".big")){
//			$(".big").animate({"height":"106px","width":"106px","margin-top":"35px"},400)
//		$(".big").removeClass("big");
////		$(".mod").animate({"height":"100px","width":"100px"},400)
//		$(this).addClass("big");
//		$(".big").animate({"height":"160px","width":"160px","margin-top":"13px"},400)
//		}
		
	}


})
}
//页面载入
$(function(){
	$(".ani h1 div").eq(0).addClass("aning");
//	后演示动画每次??
	setTimeout(function(){
		$(".ani").css("display","none");
//		$(".ani").addClass("ani2")
	},3000)
})
//搜索跳转页面 样例 （需删）
$("#search").click(function(){
	if($("#searchTxt").val()){
		window.location.href="html/shizhanbaike.html";
	}else{
		alert("请输入搜索内容！")
	}
})

