//header重置
$("#reset").click(function(){
	if($("#searchTxt").val()){
		$("#searchTxt").val("");
	}
})
//点眼睛
$(".see").eq(0).click(function(){
	var s=$(".seeImg").eq(0);
	if(s.css("display")=="none"){
		s.css("display","inline-block");
	}else{
		s.css("display","none");
	}
})
//侧栏变色
function changecolor(){
	for(var i=0;i<$(".moudle").length;i++){
		var stY=$(".moudle").eq(i).offset().top - $(window).scrollTop();
		if(stY>=0&&stY<=($(window).height()/2)){
			$(".wrap1 li").css("backgroundColor","#293c55");
			$(".wrap1 li").eq(i).css("backgroundColor","#e43c59")
			break;
		}
	
 }
		}
changecolor()
$(window).scroll(function(){
//	$(".pt80").removeClass("pt80");
	changecolor()
	
})
//锚点点击
$(".wrap1 a").click(function(){
	$(".pt80").removeClass("pt80");
	var ele=$(this).attr("href");
	$(ele).addClass("pt80");
	if($(ele).hasClass("moudle2")){
		$(ele).siblings(".moudle2").addClass("pt80");
	}
	changecolor();
})
//图片点击放大
$(".pic img").click(function(){
	 $(".box img").css({
   "width":"auto",
	"height": "100%",
	"position":"absolute",
	"left": 0,
	"top": 0
   });
	var src=$(this).attr("src");
	$(".box img").attr("src",src);
    $(".box").css("display","block");
   $(window).attr("wid",parseInt($(".box img").eq(0).css("width")));
//console.log($(".box img").css("height"))
	$(".box div").css({
		"height":$(".box img").css("height"),
		"width":$(".box img").css("width"),
		"background":"yellow"
	})
   
    $(".box").fadeTo(500,1,function(){
		
//  	console.log($(window).attr("wid"));
    });
})
$(".box").click(function(e){
	$(this).fadeTo(500,0,function(){
		$(this).css("display","none");
		$(document.body).bind("DOMMouseScroll mousewheel");
	})
	
//	e.stopPropagation();
});
$(".box").bind('DOMMouseScroll mousewheel',function(e) {
 	e.preventDefault();
})
$(".box div").click(function(e){
	e.stopPropagation();
})
$(".box img").click(function(e){
//	e.stopPropagation();
//	console.log($(window).attr("wid"));
//	console.log(window.wid);
//	$(document.body).css({
//		   "overflow-y":"hidden"
//		 });
}).bind('DOMMouseScroll mousewheel',function(e) {
	var ev=window.event||e;
	console.log($(window).attr("wid"));
	  ev.preventDefault();
	  var scrollUnit=Math.max(-1,Math.min(1,(ev.wheelDelta||-ev.detail/40)));
	  var newWith=Math.max($(window).attr("wid"),Math.min(3600,parseInt($(this).css("width"))+(28*scrollUnit)))+"px";
		$(this).css("width",newWith);
		$(this).css("height","auto");
//		console.log(window.wid);
//	console.log($(this).css("width"));
 });
//放大缩小拖拽
//function doPic(){
	
	$(".box div").mousedown(function(e){
			var e=e||window.event;
			var mx=0,my=0;
			var ex,ey;
			ex=e.pageX;
			ey=e.pageY;
			var ix=parseInt($(".box img").css("left"));
			var iy=parseInt($(".box img").css("top"));
			$(".box div").css("cursor","move").mousemove(function(ev){
				var ev=ev||window.event;
				mx=ev.pageX-ex;
				my=ev.pageY-ey;
//				console.log(mx)
				$(".box img").css({
					"top":iy+my+"px",
					"left":ix+mx+"px",
					"cursor":"move"
				})
			})
		})
	$(".box").mouseup(function(){
			$(".box").off("mousemove")
			$(".box div").css("cursor","pointer")
			var ix=parseInt($(".box img").css("left"));
			var iy=parseInt($(".box img").css("top"));
			console.log(ix,iy)
			if(ix>0){ix=0}
			if(iy>0){iy=0}
//console.log($(".box div")[0].offsetWidth)
//console.log($(".box img")[0].offsetWidth)
//console.log($(".box img").offset().left)
//console.log(($(".box div")[0].offsetWidth+$(".box div").offset().left-$(".box img")[0].offsetWidth-$(".box img").offset().left))
			if((ix<0)&&(($(".box div")[0].offsetWidth+$(".box div").offset().left-$(".box img")[0].offsetWidth-$(".box img").offset().left)>=0)){
				ix=-$(".box img")[0].offsetWidth+$(".box div")[0].offsetWidth;
				console.log("ix:"+ix)
			};
			if((iy<0)&&(($(".box div")[0].offsetHeight+$(".box div").offset().top-$(".box img")[0].offsetHeight-$(".box img").offset().top)>0)){
				iy=-$(".box img")[0].offsetHeight+$(".box div")[0].offsetHeight;
			};
			console.log(ix,iy)
			console.log($(".box img")[0].offsetHeight)
//			if(!$(".box img").is(":animated")){//stop(true,true).
				$(".box img").css("cursor","pointer").css({
					"top":iy+"px",
					"left":ix+"px",
				})//,300,"swing"
//			}
			
		}
	)
//}
//doPic()
//百度地图样例引入

var smap=new BMap.Map("stanceMap");
smap.centerAndZoom(new BMap.Point(116.404, 39.915), 14);

var local = new BMap.LocalSearch(smap, {
renderOptions:{map: smap}
});
local.searchInBounds("银行", smap.getBounds());

smap.addEventListener("dragend",function(){
    smap.clearOverlays();
    local.searchInBounds("银行", smap.getBounds());
});

//日活动 样例
var char1 = echarts.init($("#acti .list")[0]);
var char2=echarts.init($("#acti30 .list")[0]);
var char3=echarts.init($("#bayonet .list")[0]);
var char4=echarts.init($("#bayonet30 .list")[0]);
var option1={
title: {
//      text: '日活动跨度规律',
        subtext: '活动距离'
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar', 'stack', 'tiled']},
            restore: {},
            saveAsImage: {}
        }
    },
    calculable : true,
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        axisLine:{
        	lineStyle:{
				color:"#aaa"
			}
        },
        splitLine:{
			show:true,
			interval:0,
			
		},
		minInterval:1,
        data: ['00:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00']
    },
    yAxis: {
        type: 'value',
        axisLine: {
        	onZero: false,
        	lineStyle:{
				color:"#aaa"
			}
        },
		splitLine:{
			show:false
		},
        axisLabel: {
            formatter: '{value} km'
        }
    },
    series: [
        {
            name:'活动跨度',
            type:'line',
            data:[30, 10, 20, 30, 40, 20, 10,60,40,70,80,3, 45, 66, 30, 40, 44, 32,70,66,12,188,32,78],
             smooth:true,
             itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: '#f9e289'
                    }, {
                        offset: 1,
                        color: '#f9b089'
                    }])
                }
            },
            markPoint: {
                data: [
                    {type: 'max', name: '最大距离'},
                    {type: 'min', name: '最小距离'}
                ]
            },
        }
    ]
};
char1.setOption(option1);
var option2={
	 title: {
//      text: '堆叠区域图'
		subtext:"活动跨度",
    },
    grid:[ 
    	{
        left: 50,
        right: 50,
        height: '28%'
    }, {
        left: 50,
        right: 50,
        top: '45%',
        height: '40%'
    }
        ],
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['白天','夜晚']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis : [
        {
            type : 'category', 
            splitLine:{
            	show:true,
            	interval:0
            },
            boundaryGap : false,
            data : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
        }
        ,{
        	type : 'category', 
            splitLine:{
            	show:true,
            	interval:0
            },
            axisLabel:{
            	show:false,
            },
            gridIndex:1,
//          inverse:true,
			position:'top',
//			offset:10,
            boundaryGap : false,
            data : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine:{
            	show:false
            },
            axisLabel:{
            	formatter:"{value} km"
            }
           
        }
        ,{
        	type : 'value',
            splitLine:{
            	show:false
            },
             gridIndex:1,
            axisLabel:{
            	showMinLabel:false,
            	formatter:"{value} km"
            },
            inverse:true,
            position:'left'
        }
    ],
    series : [
        {
            name:'白天',
            type:'line',
//          stack: '总量',
            areaStyle: {normal: {}},
            data:[220, 132, 101, 134, 90, 230,120, 132, 191, 134, 90, 230,120, 132, 101, 134, 90, 230,120, 132, 101, 134, 90, 230,120, 132, 101, 134, 90, 230, ]
        },
        {
            name:'夜晚',
            type:'line',
             yAxisIndex: 1,
             xAxisIndex:1,
//          stack: '总量',
            areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330,220, 182, 191, 234, 290, 330,220, 182, 191, 234, 290, 330,220, 182, 191, 234, 290, 330,220, 182, 191, 234, 290, 330 ]
        }
       
    ]
};
char2.setOption(option2);
var option3={
title: {
//      text: '日活动跨度规律',
        subtext: '卡口数'
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar', 'stack', 'tiled']},
            restore: {},
            saveAsImage: {}
        }
    },
    calculable : true,
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        axisLine:{
        	lineStyle:{
				color:"#aaa"
			}
        },
        splitLine:{
			show:true,
			interval:0,
			
		},
		minInterval:1,
        data: ['00:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00']
    },
    yAxis: {
        type: 'value',
        axisLine: {
        	onZero: false,
        	lineStyle:{
				color:"#aaa"
			}
        },
		splitLine:{
			show:false
		},
        axisLabel: {
            formatter: '{value} '
        }
    },
    series: [
        {
            name:'活动跨度',
            type:'line',
            data:[30, 10, 20, 30, 40, 20, 10,60,40,70,80,3, 45, 66, 30, 40, 44, 32,70,66,12,188,32,78],
             smooth:true,
             itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#f9e289'
                    }, {
                        offset: 1,
                        color: '#f9b089'
                    }])
                }
            },
            markPoint: {
                data: [
                    {type: 'max', name: '最大距离'},
                    {type: 'min', name: '最小距离'}
                ]
            },
        }
    ]
};
char3.setOption(option3);
var option4={
	 title: {
        subtext: '卡口数'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['白天','夜晚']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis : [
        {
            type : 'category', 
            splitLine:{
            	show:true,
            	interval:0
            },
            boundaryGap : false,
            data : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine:{
            	show:false
            },
//          axisLabel:{
//          	formatter:"{value} km"
//          }
           
        }
    ],
    series : [
        {
            name:'白天',
            type:'line',
//          stack: '总量',
            areaStyle: {normal: {}},
            data:[220, 132, 101, 134, 90, 230,120, 132, 191, 134, 90, 230,120, 132, 101, 134, 90, 230,120, 132, 101, 134, 90, 230,120, 132, 101, 134, 90, 230, ]
        },
        {
            name:'夜晚',
            type:'line',
//          stack: '总量',
            areaStyle: {normal: {}},
            data:[220, 182, 191, 234, 290, 330,220, 182, 191, 234, 290, 330,220, 182, 191, 234, 290, 330,220, 182, 191, 234, 290, 330,220, 182, 191, 234, 290, 330 ]
        }
       
    ]
}
char4.setOption(option4);