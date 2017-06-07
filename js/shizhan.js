//4.20词云图
var chart = echarts.init(document.getElementById('cloud'));
 var option = {
                tooltip: {},
                series: [ {
                    type: 'wordCloud',
                    gridSize: 18,
                    sizeRange: [12, 50],
                    rotationRange: [0, 0],
//                  shape: 'circle',
                    width: 450,
                    height: 320,
                    textStyle: {
                        normal: {
                            color: function () {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [
                         {
                            name: '孙冰',
                            value: 10000,
                            textStyle: {
                                normal: {
                                    color: 'black'
                                },
                                emphasis: {
                                    color: 'red'
                                }
                            }
                        },
                        {
                            name: '38岁',
                            value: 4386
                        },
                        {
                            name: '博士',
                            value: 4055
                        },
                        {
                            name: '男',
                            value: 2467
                        },
                        {
                            name: '大数据',
                            value: 2244
                        },
                        {
                            name: '无犯罪记录',
                            value: 1898
                        },
                        {
                            name: '无违规记录',
                            value: 1484
                        },
                        {
                            name: '高智商',
                            value: 1112
                        },
                        {
                            name: '绍兴 暂口',
                            value: 965
                        },
                        {
                            name: '杭州 常口',
                            value: 847
                        },
                        {
                            name: '80kg',
                            value: 555
                        },
                        {
                            name: '创造性',
                            value: 462
                        },
                        {
                            name: '出差达人',
                            value: 360
                        },
                         {
                            name: '175cm',
                            value: 555
                        },
                        {
                            name: '创造性',
                            value: 462
                        },
                        {
                            name: '科技',
                            value: 366
                        },
                        {
                            name: '漫画',
                            value: 360
                        },
                        {
                            name: '外向',
                            value: 550
                        },
                        {
                            name: '科技',
                            value: 366
                        },
                         {
                            name: '网购',
                            value: 555
                        },
                        {
                            name: '好学',
                            value: 360
                        },
                        {
                            name: '好奇',
                            value: 282
                        },
                        {
                            name: '学术',
                            value: 273
                        }
                    ]
                } ]
            };

            chart.setOption(option);

//通讯折叠
$(".down").click(
	function(){
//		alert(1);
		//折叠
		if(!$(this).hasClass("deployshow")){
			$(this).prev().css({"height":"auto","overflow":"visible"});
			$(this).addClass("deployshow");
			$(this).find("img").attr("src","../img/dropUp.png");
		}else{
			$(this).prev().css({"height":"60px","overflow":"hidden"});
			$(this).removeClass("deployshow");
			$(this).find("img").attr("src","../img/dropDown.png");
		}
		
	}
)
//echart 仪表盘开始
window.onload = function(){
    Meter.setOptions({
        element: 'meter',
        centerPoint: {
            x: 180,
            y: 180
        },
        radius: 180,
        data: {
            value: 22,
            title: '犯罪指数{t}',
            subTitle: '评估时间：2015.07.28',
            area: [{
                min: 0, max: 30, text: '较弱'
            },{
                min: 30, max: 50, text: '一般'
            },{
                min: 50, max: 70, text: '很强'
            },{
                min: 70, max: 85, text: '超强'
            },{
                min: 85, max: 100, text: '极强'
            }]
        }
    }).init(); 
}
//echart 仪表盘结束

//header重置
$("#reset").click(function(){
	if($("#searchTxt").val()){
		$("#searchTxt").val("");
	}
})
//地址分析模块
//点编辑
$(".addressAnalyzed .edit").on("click",function(){
	//	alert("edit")
	 zeroModal.show({
            title: '地址采集',
            content: '<div class="test" style="background: #efefef">'+
					'<p><label><span class="red">*</span>地址：</label><input type="text" class="add" id="addressTxt" /></p>'+
					'<p><label><span class="red">*</span>来源：</label><input type="text" class="add" id="addressFrom" /></p>'+
					'<p><label><span class="red">*</span>置信度：</label><input type="text" class="add" id="addressConfidence" /></p>'+
					'<p><label><span class="red">*</span>采集时间：</label><input type="text" class="add"  onclick="laydate()"  id="addressTime" /></p>'+
					'<p><label>采集事由：</label><input type="text" class="add" id="addressReason" /></p>'+
					'<p class="pBtn"><button id="addressBtn" class="subbtn">提交</button></p>'+
				'</div>',
            width: '500px',
            height: '240px',
            opacity: 0.8,
            esc:true
        });	
	//再获取提交地址值
	$("#addressBtn").click(function(){
		console.log($("#addressTxt").val());
	})
	
})//新信息
$(".addressAnalyzed .message").on("click",function(){
	//	alert("edit")
//	 zeroModal.show({
//          title: '新信息',
//          content:'<div class="test" style="background: #efefef">'+
//					'<p><label><span class="red">*</span>地址：</label><input type="text" class="add" id="messageTxt" /></p>'+
//					'<p><label><span class="red">*</span>来源：</label><input type="text" class="add" id="messageTxt" /></p>'+
//					'<p><label><span class="red">*</span>置信度：</label><input type="text" class="add" id="addressConfidence" /></p>'+
//					'<p><label><span class="red">*</span>采集时间：</label><input type="text"  onclick="laydate()"  class="add" id="addressTime" /></p>'+
//					'<p><label>采集事由：</label><input type="text" class="add" id="addressReason" /></p>'+
//					'<p class="pBtn"><button id="addressBtn" class="subbtn">提交</button></p>'+
//				'</div>',
//          width: '500px',
//          height: '250px',
//          opacity: 0.8,
//          esc:true
//      });	
	$("#addrComm").toggleClass("block");

	
	//再获取提交地址值
	$("#addressBtn").click(function(){
		console.log($("#messageBtn").val());
	})
	
})//item 折叠
$(".deploy").on("click",function(){
//		alert(1);
		//折叠
		var pn=$(this).parent().parent().parent();
//		var pn=par.find(".addressAnalyzed");
//		console.log(par)
		pn.toggleClass("deployshow")

	
})
//时间控件
//!function(){
//laydate({
// elem: '#startTime'
//})
//
//}();
//点赞
$(".zan").click(function(){
//	alert(1)
	var num=$(this).next().html();//此参数实际应该从数据库获取
//	console.log(this.zan)
	if(!this.zan){
		this.src="../img/zan-red.png";
		this.zan=1;
		$(this).next().html(num-0+1);
//		zanPlus();
	}else{
		this.src="../img/zan-grey.png";
		this.zan=0;
		$(this).next().html(num-1)
	}
})
//点赞数控制
function zanPlus(){
	if($(".zanNum").html()>99){
		$(".zanNum").html("99+");
	}
}
//地址详情点击
$(".addressAnalyzed .deta").click(function(){
	
})
//服务处所模块
//常口基本信息查看
$(".infode").click(function(){
	var item=$(this).parent().prev().prev().html().replace(/\:|\：/g,"");
	zeroModal.show({
            title: item+'详情',
            content: '<div class="test">'+
					'<table border="" bordercolor="#ccc" cellspacing="" cellpadding="">'+
						'<thead><tr><th>'+item+'</th><th>采集来源</th><th>采集时间</th></tr></thead>'+
						'<tr><td>Data</td><td>Data</td><td>Data</td></tr>'+
						'<tr><td>Data</td><td>Data</td><td>Data</td></tr>'+
						'<tr><td>Data</td><td>Data</td><td>Data</td></tr>'+
						'<tr><td>Data</td><td>Data</td><td>Data</td></tr>'+
						'<tr><td>Data</td><td>Data</td><td>Data</td></tr>'+
						'<tr><td>Data</td><td>Data</td><td>Data</td></tr>'+
						'<tr><td>Data</td><td>Data</td><td>Data</td></tr>'+
//						'<tr><td>Data</td><td>Data</td><td>Data</td></tr>'+
//						'<tr><td>Data</td><td>Data</td><td>Data</td></tr>'+
//						'<tr><td>Data</td><td>Data</td><td>Data</td></tr>'+
//						'<tr><td>Data</td><td>Data</td><td>Data</td></tr>'+
//						'<tr><td>Data</td><td>Data</td><td>Data</td></tr>'+
//						'<tr><td>Data</td><td>Data</td><td>Data</td></tr>'+
//						'<tr><td>Data</td><td>Data</td><td>Data</td></tr>'+
					'</table>'+
				'</div>',
            width: '600px',
            height: '240px',
            opacity: 0.8,
            esc:true
        });	
})
//新地址提交
$(".service .edit").click(function(){
	zeroModal.show({
            title: '服务处所采集',
            content: '<div class="test" style="background: #efefef">'+
					'<p><label><span class="red">*</span>地址：</label><input type="text" class="add" id="serviceTxt" /></p>'+
					'<p><label><span class="red">*</span>来源：</label><input type="text" class="add" id="serviceFrom" /></p>'+
					'<p><label><span class="red">*</span>置信度：</label><input type="text" class="add" id="serviceConfidence" /></p>'+
					'<p><label><span class="red">*</span>采集时间：</label><input type="text" class="add"  onclick="laydate()"  id="serviceTime" /></p>'+
					'<p><label>采集事由：</label><input type="text" class="add" id="serviceReason" /></p>'+
					'<p class="pBtn"><button id="serviceBtn" class="subbtn">提交</button></p>'+
				'</div>',
            width: '500px',
            height: '240px',
            opacity: 0.8,
            esc:true
        });	
	//再获取提交地址值
	$("#serviceBtn").click(function(){
		console.log($("#serviceTxt").val());
	})
})
//服务处所 评论点击
$(".service .message").click(function(){
	$("#servComm").toggleClass("block");
})
//持有手机号模块
//提交
$(".phoneNum .edit").click(function(){
	zeroModal.show({
            title: '手机号采集',
            content: '<div class="test" style="background: #efefef">'+
					'<p><label><span class="red">*</span>手机号：</label><input type="text" class="add" id="phoneTxt" /></p>'+
					'<p><label><span class="red">*</span>来源：</label><input type="text" class="add" id="phoneFrom" /></p>'+
					'<p><label><span class="red">*</span>置信度：</label><input type="text" class="add" id="phoneConfidence" /></p>'+
					'<p><label><span class="red">*</span>采集时间：</label><input type="text" class="add"  onclick="laydate()"  id="phoneTime" /></p>'+
					'<p><label>采集事由：</label><input type="text" class="add" id="phoneReason" /></p>'+
					'<p class="pBtn"><button id="phoneBtn" class="subbtn">提交</button></p>'+
				'</div>',
            width: '500px',
            height: '240px',
            opacity: 0.8,
            esc:true
        });	
	//再获取提交地址值
	$("#phoneBtn").click(function(){
		console.log($("#phoneTxt").val());
	})
})
//手机号 评论
$(".phoneNum .message").click(function(){
	$("#phoneComm").toggleClass("block");
})
//生物模块
$(".biosignature .edit").click(function(){
//	$("#bioComm").toggleClass("block");
	zeroModal.show({
            title: '生物特征资料采集',
            content: '<div class="test" style="background: #efefef">'+
					'<p><label>文件类型：</label><select style="height:24px" name="" id="bioType" class="add" >'+
							'<option value="">指纹</option>'+
							'<option value="">掌纹</option>'+
							'<option value="">足迹</option>'+
							'<option value="">DNA</option>'+
							'<option value="">声纹</option>'+
							'<option value="">短视频资料</option>'+
						'</select></p>'+
					'<p><label>采集时间：</label><input type="text" class="add"  onclick="laydate()"  id="bioTime" /></p>'+
					'<p><label>采集部门：</label><input type="text" class="add" id="bioFrom" /></p>'+
					'<p><label>采集人：</label><input type="text" class="add" id="bioMan" /></p>'+
					'<p><label>采集事由：</label><input type="text" class="add" id="bioReason" /></p>'+
					'<p><label>文件内容：</label><input type="file" class="add" id="bioContent" /></p>'+
					'<p class="pBtn"><button id="bioBtn" class="subbtn">提交</button></p>'+
				'</div>',
            width: '500px',
            height: '280px',
            opacity: 0.8,
            esc:true
        });	
	//再获取提交地址值
	$("#bioBtn").click(function(){
		console.log($("#bioType").find("option:selected").text());
	})
})

$(".biosignature .message").click(function(){
	$("#bioComm").toggleClass("block");
})

//人像资料模块
$(".personPic .edit").click(function(){
//	$("#bioComm").toggleClass("block");
	zeroModal.show({
            title: '人像资料采集',
            content: '<div class="test" style="background: #efefef">'+
//					'<p><label>文件类型：</label><select style="height:24px" name="" id="picType" class="add" >'+
//							'<option value="">指纹</option>'+
//							'<option value="">掌纹</option>'+
//							'<option value="">足迹</option>'+
//							'<option value="">DNA</option>'+
//							'<option value="">声纹</option>'+
//							'<option value="">短视频资料</option>'+
//						'</select></p>'+
					'<p><label>采集时间：</label><input type="text" class="add"  onclick="laydate()"  id="picTime" /></p>'+
					'<p><label>采集部门：</label><input type="text" class="add" id="picFrom" /></p>'+
					'<p><label>采集人：</label><input type="text" class="add" id="picMan" /></p>'+
					'<p><label>采集事由：</label><input type="text" class="add" id="picReason" /></p>'+
					'<p><label>文件内容：</label><input type="file" class="add" id="picContent" /></p>'+
					'<p class="pBtn"><button id="picBtn" class="subbtn">提交</button></p>'+
				'</div>',
            width: '500px',
            height: '280px',
            opacity: 0.8,
            esc:true
        });	
	//再获取提交地址值
	$("#picBtn").click(function(){
		console.log($("#picMan").val());
	})
})
$(".personPic .message").click(function(){
	$("#picComm").toggleClass("block");
})
//虚实结合模块
$(".combine .edit").click(function(){
	zeroModal.show({
            title: '虚实结合内容添加',
            content: '<div class="test" style="background: #efefef">'+
					'<p><label>添加分类：</label><select style="height:24px" name="" id="virType" class="add" >'+
							'<option value="">微信号</option>'+
							'<option value="">QQ号</option>'+
							'<option value="">邮箱号</option>'+
							'<option value="">支付宝</option>'+
							'<option value="">声纹</option>'+
							'<option value="">手机MAC采集</option>'+
						'</select></p>'+
					'<p><label>采集时间：</label><input type="text" class="add"  onclick="laydate()"  id="virTime" /></p>'+
//					'<p><label>采集部门：</label><input type="text" class="add" id="virFrom" /></p>'+
					'<p><label>采集人：</label><input type="text" class="add" id="virMan" /></p>'+
					'<p><label>采集事由：</label><input type="text" class="add" id="virReason" /></p>'+
					'<p><label>内容：</label><input type="text" class="add" id="virContent" /></p>'+
					'<p class="pBtn"><button id="virBtn" class="subbtn">提交</button></p>'+
				'</div>',
            width: '500px',
            height: '240px',
            opacity: 0.8,
            esc:true
        });	
	//再获取提交地址值
	$("#virBtn").click(function(){
		console.log($("#virMan").val());
	})
})
$(".combine .message").click(function(){
	$("#virComm").toggleClass("block");
})
//锚点点击
$(".wrap1 a").click(function(){
	console.log($(this).attr("href"));
//	$(this).css("padding-top","70px");
})
//tab 切换
 $('#myTab a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    })
 //侧栏变色
function changecolor(){
	for(var i=0;i<$(".part").length;i++){
		var stY=$(".part").eq(i).offset().top - $(window).scrollTop();
		if(stY>=0&&stY<=$(window).height()){
			$(".wrap1 .to").css("backgroundColor","#293c55");
			$(".wrap1 .to").eq(i).css("backgroundColor","#e43c59")
			break;
		}
	
 }
		}
changecolor()
$(window).scroll(function(){
//	$(".pt80").removeClass("pt80");
	changecolor()
	
})