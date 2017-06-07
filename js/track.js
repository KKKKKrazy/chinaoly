//民航出行图 模拟
var fly = echarts.init($("#flyMap")[0]);
var rail=echarts.init($("#railMap")[0]);
fly.showLoading();
rail.showLoading();
$.get("../json/china.json", function(cj) {
	fly.hideLoading();
	rail.hideLoading();
	
	echarts.registerMap('china',cj);
	
	var geoCoordMap = {
		'上海': [121.4648, 31.2891],
		'东莞': [113.8953, 22.901],
		'东营': [118.7073, 37.5513],
		'中山': [113.4229, 22.478],
		'临汾': [111.4783, 36.1615],
		'临沂': [118.3118, 35.2936],
		'丹东': [124.541, 40.4242],
		'丽水': [119.5642, 28.1854],
		'乌鲁木齐': [87.9236, 43.5883],
		'佛山': [112.8955, 23.1097],
		'保定': [115.0488, 39.0948],
		'兰州': [103.5901, 36.3043],
		'包头': [110.3467, 41.4899],
		'北京': [116.4551, 40.2539],
		'北海': [109.314, 21.6211],
		'南京': [118.8062, 31.9208],
		'南宁': [108.479, 23.1152],
		'南昌': [116.0046, 28.6633],
		'南通': [121.1023, 32.1625],
		'厦门': [118.1689, 24.6478],
		'台州': [121.1353, 28.6688],
		'合肥': [117.29, 32.0581],
		'呼和浩特': [111.4124, 40.4901],
		'咸阳': [108.4131, 34.8706],
		'哈尔滨': [127.9688, 45.368],
		'唐山': [118.4766, 39.6826],
		'嘉兴': [120.9155, 30.6354],
		'大同': [113.7854, 39.8035],
		'大连': [122.2229, 39.4409],
		'天津': [117.4219, 39.4189],
		'太原': [112.3352, 37.9413],
		'威海': [121.9482, 37.1393],
		'宁波': [121.5967, 29.6466],
		'宝鸡': [107.1826, 34.3433],
		'宿迁': [118.5535, 33.7775],
		'常州': [119.4543, 31.5582],
		'广州': [113.5107, 23.2196],
		'廊坊': [116.521, 39.0509],
		'延安': [109.1052, 36.4252],
		'张家口': [115.1477, 40.8527],
		'徐州': [117.5208, 34.3268],
		'德州': [116.6858, 37.2107],
		'惠州': [114.6204, 23.1647],
		'成都': [103.9526, 30.7617],
		'扬州': [119.4653, 32.8162],
		'承德': [117.5757, 41.4075],
		'拉萨': [91.1865, 30.1465],
		'无锡': [120.3442, 31.5527],
		'日照': [119.2786, 35.5023],
		'昆明': [102.9199, 25.4663],
		'杭州': [119.5313, 29.8773],
		'枣庄': [117.323, 34.8926],
		'柳州': [109.3799, 24.9774],
		'株洲': [113.5327, 27.0319],
		'武汉': [114.3896, 30.6628],
		'汕头': [117.1692, 23.3405],
		'江门': [112.6318, 22.1484],
		'沈阳': [123.1238, 42.1216],
		'沧州': [116.8286, 38.2104],
		'河源': [114.917, 23.9722],
		'泉州': [118.3228, 25.1147],
		'泰安': [117.0264, 36.0516],
		'泰州': [120.0586, 32.5525],
		'济南': [117.1582, 36.8701],
		'济宁': [116.8286, 35.3375],
		'海口': [110.3893, 19.8516],
		'淄博': [118.0371, 36.6064],
		'淮安': [118.927, 33.4039],
		'深圳': [114.5435, 22.5439],
		'清远': [112.9175, 24.3292],
		'温州': [120.498, 27.8119],
		'渭南': [109.7864, 35.0299],
		'湖州': [119.8608, 30.7782],
		'湘潭': [112.5439, 27.7075],
		'滨州': [117.8174, 37.4963],
		'潍坊': [119.0918, 36.524],
		'烟台': [120.7397, 37.5128],
		'玉溪': [101.9312, 23.8898],
		'珠海': [113.7305, 22.1155],
		'盐城': [120.2234, 33.5577],
		'盘锦': [121.9482, 41.0449],
		'石家庄': [114.4995, 38.1006],
		'福州': [119.4543, 25.9222],
		'秦皇岛': [119.2126, 40.0232],
		'绍兴': [120.564, 29.7565],
		'聊城': [115.9167, 36.4032],
		'肇庆': [112.1265, 23.5822],
		'舟山': [122.2559, 30.2234],
		'苏州': [120.6519, 31.3989],
		'莱芜': [117.6526, 36.2714],
		'菏泽': [115.6201, 35.2057],
		'营口': [122.4316, 40.4297],
		'葫芦岛': [120.1575, 40.578],
		'衡水': [115.8838, 37.7161],
		'衢州': [118.6853, 28.8666],
		'西宁': [101.4038, 36.8207],
		'西安': [109.1162, 34.2004],
		'贵阳': [106.6992, 26.7682],
		'连云港': [119.1248, 34.552],
		'邢台': [114.8071, 37.2821],
		'邯郸': [114.4775, 36.535],
		'郑州': [113.4668, 34.6234],
		'鄂尔多斯': [108.9734, 39.2487],
		'重庆': [107.7539, 30.1904],
		'金华': [120.0037, 29.1028],
		'铜川': [109.0393, 35.1947],
		'银川': [106.3586, 38.1775],
		'镇江': [119.4763, 31.9702],
		'长春': [125.8154, 44.2584],
		'长沙': [113.0823, 28.2568],
		'长治': [112.8625, 36.4746],
		'阳泉': [113.4778, 38.0951],
		'青岛': [120.4651, 36.3373],
		'韶关': [113.7964, 24.7028]
	};

	var BJData = [
		[{
			name: '北京'
		}, {
			name: '上海',
			value: 95
		}],
		[{
			name: '北京'
		}, {
			name: '广州',
			value: 90
		}],
		[{
			name: '北京'
		}, {
			name: '大连',
			value: 80
		}],
		[{
			name: '北京'
		}, {
			name: '南宁',
			value: 70
		}],
		[{
			name: '北京'
		}, {
			name: '南昌',
			value: 60
		}],
		[{
			name: '北京'
		}, {
			name: '拉萨',
			value: 50
		}],
		[{
			name: '北京'
		}, {
			name: '长春',
			value: 40
		}],
		[{
			name: '北京'
		}, {
			name: '包头',
			value: 30
		}],
		[{
			name: '北京'
		}, {
			name: '重庆',
			value: 20
		}],
		[{
			name: '北京'
		}, {
			name: '常州',
			value: 10
		}]
	];

	var SHData = [
		[{
			name: '上海'
		}, {
			name: '包头',
			value: 95
		}],
		[{
			name: '上海'
		}, {
			name: '昆明',
			value: 90
		}],
		[{
			name: '上海'
		}, {
			name: '广州',
			value: 80
		}],
		[{
			name: '上海'
		}, {
			name: '郑州',
			value: 70
		}],
		[{
			name: '上海'
		}, {
			name: '长春',
			value: 60
		}],
		[{
			name: '上海'
		}, {
			name: '重庆',
			value: 50
		}],
		[{
			name: '上海'
		}, {
			name: '长沙',
			value: 40
		}],
		[{
			name: '上海'
		}, {
			name: '北京',
			value: 30
		}],
		[{
			name: '上海'
		}, {
			name: '丹东',
			value: 20
		}],
		[{
			name: '上海'
		}, {
			name: '大连',
			value: 10
		}]
	];

	var GZData = [
		[{
			name: '广州'
		}, {
			name: '福州',
			value: 95
		}],
		[{
			name: '广州'
		}, {
			name: '太原',
			value: 90
		}],
		[{
			name: '广州'
		}, {
			name: '长春',
			value: 80
		}],
		[{
			name: '广州'
		}, {
			name: '重庆',
			value: 70
		}],
		[{
			name: '广州'
		}, {
			name: '西安',
			value: 60
		}],
		[{
			name: '广州'
		}, {
			name: '成都',
			value: 50
		}],
		[{
			name: '广州'
		}, {
			name: '常州',
			value: 40
		}],
		[{
			name: '广州'
		}, {
			name: '北京',
			value: 30
		}],
		[{
			name: '广州'
		}, {
			name: '北海',
			value: 20
		}],
		[{
			name: '广州'
		}, {
			name: '海口',
			value: 10
		}]
	];
	
	var bjDataR=[
	[{
			name: '北京'
		}, {
			name: '上海',
			value: 95
		}],
		[{
			name: '北京'
		}, {
			name: '广州',
			value: 90
		}],
		[{
			name: '北京'
		}, {
			name: '大连',
			value: 80
		}],
		[{
			name: '北京'
		}, {
			name: '南宁',
			value: 70
		}],
		[{
			name: '北京'
		}, {
			name: '南昌',
			value: 60
		}],
		[{
			name: '北京'
		}, {
			name: '拉萨',
			value: 50
		}],
		[{
			name: '北京'
		}, {
			name: '长春',
			value: 40
		}],
		[{
			name: '北京'
		}, {
			name: '包头',
			value: 30
		}],
		[{
			name: '北京'
		}, {
			name: '重庆',
			value: 20
		}],
		[{
			name: '北京'
		}, {
			name: '常州',
			value: 10
		}]
		];
		var shDataR=[
		[{
			name: '上海'
		}, {
			name: '包头',
			value: 95
		}],
		[{
			name: '上海'
		}, {
			name: '昆明',
			value: 90
		}],
		[{
			name: '上海'
		}, {
			name: '广州',
			value: 80
		}],
		[{
			name: '上海'
		}, {
			name: '郑州',
			value: 70
		}],
		[{
			name: '上海'
		}, {
			name: '长春',
			value: 60
		}],
		[{
			name: '上海'
		}, {
			name: '重庆',
			value: 50
		}],
		[{
			name: '上海'
		}, {
			name: '长沙',
			value: 40
		}],
		[{
			name: '上海'
		}, {
			name: '北京',
			value: 30
		}],
		[{
			name: '上海'
		}, {
			name: '丹东',
			value: 20
		}],
		[{
			name: '上海'
		}, {
			name: '大连',
			value: 10
		}]
		];
		var gzDataR=[
		[{
			name: '广州'
		}, {
			name: '福州',
			value: 95
		}],
		[{
			name: '广州'
		}, {
			name: '太原',
			value: 90
		}],
		[{
			name: '广州'
		}, {
			name: '长春',
			value: 80
		}],
		[{
			name: '广州'
		}, {
			name: '重庆',
			value: 70
		}],
		[{
			name: '广州'
		}, {
			name: '西安',
			value: 60
		}],
		[{
			name: '广州'
		}, {
			name: '成都',
			value: 50
		}],
		[{
			name: '广州'
		}, {
			name: '常州',
			value: 40
		}],
		[{
			name: '广州'
		}, {
			name: '北京',
			value: 30
		}],
		[{
			name: '广州'
		}, {
			name: '北海',
			value: 20
		}],
		[{
			name: '广州'
		}, {
			name: '海口',
			value: 10
		}]
		];
	var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
//	var railPath='image://../img/test/rail.png';

//	var railPath='path://M20.036,23.934h-1.613c0.127,0.174,0.205,0.389,0.205,0.62c0,0.58-0.473,1.051-1.049,1.051c-0.582,0-1.051-0.472-1.051-1.051c0-0.23,0.074-0.447,0.205-0.62h-1.182c0.002,0.026,0.004,0.052,0.004,0.078c0,0.88-0.711,1.593-1.59,1.593s-1.592-0.713-1.592-1.593c0-0.026,0.004-0.053,0.004-0.078h-0.586c0.004,0.026,0.004,0.052,0.004,0.078c0,0.88-0.712,1.593-1.589,1.593c-0.88,0-1.592-0.713-1.592-1.593c0-0.026,0.003-0.053,0.004-0.078H8.032c0,0.026,0.004,0.052,0.004,0.078c0,0.88-0.713,1.593-1.592,1.593c-0.878,0-1.589-0.713-1.589-1.593c0-0.026,0.003-0.053,0.004-0.078H3.743c0.127,0.174,0.204,0.389,0.204,0.62c0,0.58-0.468,1.051-1.049,1.051s-1.049-0.47-1.049-1.049c0-0.23,0.076-0.447,0.205-0.62H1.162v-0.65h1.013v-1.191h1.027l-1.086-1.771l1.107-1.736h1.425l-0.116-1.161H4.416v-1.228H5.04c-0.016-0.035-0.03-0.067-0.046-0.107c-0.289-0.762,0.036-1.339,0.071-1.737c0.036-0.398,0.651-0.977,1.122-1.267c0.47-0.288-0.362-0.648,0.649-1.985c1.013-1.341,2.352-0.326,2.857-0.074c0.504,0.254,0.613,0.579,1.734,0.359c1.123-0.217,1.41-0.325,2.172,0.256c0.758,0.578,1.266-0.219,1.842-0.219c0.578,0,2.135,0.797,1.592,2.459c-0.541,1.663-1.879,0.904-2.025,0.904c-0.143,0-0.105-0.868-1.336-0.218c-1.229,0.648-1.699,0.325-2.275,0.07c-0.581-0.255-0.361-0.831-2.132,0c-1.777,0.837-1.74-0.251-2.5,0.113c-0.505,0.239-0.786,0.979-0.917,1.445h0.376v1.229H6.056l-0.136,1.159h2.579v-0.579h5.459v0.579h0.615v-0.579h5.062v0.868h-2.566v1.771h1.41v2.64h1.557h0.002v0.649H20.036z';
	var railPath='path://M44.849,5h-24C17.372,5,15,5,15,9v31c0,5.938,2.622,5.938,5.849,6h1.512l-8.595,13h4.542l6.167-9.333l16.917,0.271L47.349,59h5.13l-8.478-13h0.848C49.122,46,49,42.761,49,40V9C49,6.239,47.61,5,44.849,5z M27,8c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1v2c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1V8z M20,15.432C20,13.125,22.192,13,23.849,13h19C44.506,13,45,13.463,45,15.432v4.753C45,24.021,45.143,25,42.849,25h-19C21.185,25.021,20,24.479,20,20.185V15.432z M23.036,41.5c-1.76,0-3.188-1.427-3.188-3.188c0-1.76,1.427-3.188,3.188-3.188s3.188,1.427,3.188,3.188C26.224,40.073,24.797,41.5,23.036,41.5zM42.036,41.5c-1.76,0-3.188-1.427-3.188-3.188c0-1.76,1.427-3.188,3.188-3.188s3.188,1.427,3.188,3.188C45.224,40.073,43.797,41.5,42.036,41.5z';
	
	var convertData = function(data) {
		var res = [];
		for(var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = geoCoordMap[dataItem[0].name];
			var toCoord = geoCoordMap[dataItem[1].name];
			if(fromCoord && toCoord) {
				res.push({
					fromName: dataItem[0].name,
					toName: dataItem[1].name,
					coords: [fromCoord, toCoord]
				});
			}
		}
		return res;
	};

	var color = ['#a6c84c', '#ffa022', '#46bee9'];
	var seriF= [];
	var seriR=[];
	//飞机
	[
		['北京', BJData],
		['上海', SHData],
		['广州', GZData]
	].forEach(function(item, i) {
		seriF.push({
			name: item[0] + ' 出行地',
			type: 'lines',
			zlevel: 1,
			effect: {
				show: true,
				period: 6,
				trailLength: 0.7,
				color: '#fff',
				symbolSize: 3
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 0,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		}, {
			name: item[0] + ' 出行地',
			type: 'lines',
			zlevel: 2,
			symbol: ['none', 'arrow'],
			symbolSize: 10,
			effect: {
				show: true,
				period: 6,
				trailLength: 0,
				symbol: planePath,
				symbolSize: 15
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 1,
					opacity: 0.6,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		}, {
			name: item[0] + ' 出行地',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					formatter: '{b}'
				}
			},
			symbolSize: function(val) {
				return val[2] / 8;
			},
			itemStyle: {
				normal: {
					color: color[i]
				}
			},
			data: item[1].map(function(dataItem) {
				return {
					name: dataItem[1].name,
					value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
				};
			})
		});
	});
	//铁路
	[
		['北京', bjDataR],
		['上海', shDataR],
		['广州', gzDataR]
	].forEach(function(item, i) {
		seriR.push({
			name: item[0] + ' 出行地',
			type: 'lines',
			zlevel: 1,
			effect: {
				show: true,
				period: 6,
				trailLength: 0.7,
				color: '#fff',
				symbolSize: 3
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 0,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		}, {
			name: item[0] + ' 出行地',
			type: 'lines',
			zlevel: 2,
			symbol: ['none', 'arrow'],
			symbolSize: 10,
			effect: {
				show: true,
				period: 6,
				trailLength: 0,
				symbol: railPath,
				symbolSize: 15
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 1,
					opacity: 0.6,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		}, {
			name: item[0] + ' 出行地',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					formatter: '{b}'
				}
			},
			symbolSize: function(val) {
				return val[2] / 8;
			},
			itemStyle: {
				normal: {
					color: color[i]
				}
			},
			data: item[1].map(function(dataItem) {
				return {
					name: dataItem[1].name,
					value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
				};
			})
		});
	});
	
	var flyOp = {
		backgroundColor: '#404a59',
		title: {
			text: '民航出行路线',
			subtext: '测试样例',
			left: 'center',
			textStyle: {
				color: '#fff'
			}
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			top: 'bottom',
			left: 'right',
			data: ['北京 出行地', '上海 出行地', '广州 出行地'],
			textStyle: {
				color: '#fff'
			},
			selectedMode: 'single'
		},
		geo: {
			map: 'china',
			label: {
				emphasis: {
					show: false
				}
			},
			roam: true,
			itemStyle: {
				normal: {
					areaColor: '#323c48',
					borderColor: '#404a59'
				},
				emphasis: {
					areaColor: '#2a333d'
				}
			}
		},
		series: seriF
	};
	var railOp = {
		backgroundColor: '#404a59',
		title: {
			text: '铁路出行路线',
			subtext: '测试样例',
			left: 'center',
			textStyle: {
				color: '#fff'
			}
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			top: 'bottom',
			left: 'right',
			data: ['北京 出行地', '上海 出行地', '广州 出行地'],
			textStyle: {
				color: '#fff'
			},
			selectedMode: 'single'
		},
		geo: {
			map: 'china',
			label: {
				emphasis: {
					show: false
				}
			},
			roam: true,
			itemStyle: {
				normal: {
					areaColor: '#323c48',
					borderColor: '#404a59'
				},
				emphasis: {
					areaColor: '#2a333d'
				}
			}
		},
		series: seriR
	};
	fly.setOption(flyOp);
	rail.setOption(railOp);
})
//机动车 弹框信息
$(".vehicle .deta").click(function(){
	zeroModal.show({
            title: '机动车信息详情',
            content: '<table border="1" class="demo3" bordercolor="#ccc" cellspacing="" cellpadding="">'
									+'<col width="9%" />'
									+'<col width="16%" />'
									+'<col width="9%" />'
									+'<col width="16%" />'
									+'<col width="9%" />'
									+'<col width="16%" />'
									+'<col width="9%" />'
									+'<col width="16%" />'
									+'<tbody>'
									+'<tr>'
											+'<th>号牌号码</th>'
											+'<td>Data</td>'
											+'<th>身份证号</th>'
											+'<td>345678987654</td>'
											+'<th>机动车所有人</th>'
											+'<td>Data</td>'
											+'<th>现住详细地址</th>'
											+'<td>2011-11-11</td>'
										+'</tr>'
										+'<tr>'
											+'<th>住址行政区划</th>'
											+'<td>Data</td>'
											+'<th>暂住证详细地址</th>'
											+'<td>Data</td>'
											+'<th>暂住行政区划</th>'
											+'<td>Data</td>'
											+'<th>住所行政区划</th>'
											+'<td>Data</td>'
										+'</tr>'
										+'<tr>'
											+'<th>联系电话</th>'
											+'<td>Data</td>'
											+'<th>手机号码</th>'
											+'<td>Data</td>'
											+'<th>号码号牌</th>'
											+'<td>Data</td>'
											+'<th>品牌种类</th>'
											+'<td>Data</td>'
										+'</tr>'
										+'<tr>'
											+'<th>中文品牌</th>'
											+'<td>Data</td>'
											+'<th>车辆类型</th>'
											+'<td>Data</td>'
											+'<th>车辆型号</th>'
											+'<td>Data</td>'
											+'<th>发动机号</th>'
											+'<td>Data</td>'
										+'</tr>'
										+'<tr>'
											+'<th>发动机型号</th>'
											+'<td>Data</td>'
											+'<th>车身颜色</th>'
											+'<td>Data</td>'
											+'<th>初次登记日期</th>'
											+'<td>Data</td>'
											+'<th>发证机关</th>'
											+'<td>Data</td>'
										+'</tr>'
										+'<tr>'
											+'<th>状态</th>'
											+'<td>Data</td>'
											+'<th>抵押标记</th>'
											+'<td>Data</td>'
											+'<th>燃料种类</th>'
											+'<td>Data</td>'
											+'<th>档案编号</th>'
											+'<td>Data</td>'
										+'</tr>'
										+'<tr>'
											+'<th>排量</th>'
											+'<td>Data</td>'
											+'<th>功率</th>'
											+'<td>Data</td>'
											+'<th>总重量</th>'
											+'<td>Data</td>'
											+'<th>核定载质量</th>'
											+'<td>Data</td>'
										+'</tr>'
										+'<tr>'
											+'<th>核定载客</th>'
											+'<td>Data</td>'
											+'<th>准牵引中质量</th>'
											+'<td >Data</td>'
											+'<th>出厂日期</th>'
											+'<td></td>'
											+'<td></td>'
											+'<td ></td>'
										+'</tr>'
									+'</tbody>'
								+'</table>',
            width: '90%',
            height: '380px',
            opacity: 0.8,
            esc:true
        });
})
//机动车 弹框信息-end
//公共自行车 弹框信息
$(".pubBicycle .more").click(function(){
	zeroModal.show({
            title: '公共自行车详情',
            content: '<table border="1" class="demo3 pub"  bordercolor="rgb(61,203,155)" cellspacing="" cellpadding="">'
									+'<col width="13%" />'
								+'<col width="20%" />'
									+'<col width="13%" />'
									+'<col width="20%" />'
									+'<col width="13%" />'
									+'<col width="21%" />'
									+'<tbody>'
									+'	<tr>'
											+'<th>会员卡</th>'
											+'<td>Data</td>'
											+'<th>卡序号</th>'
											+'<td>345678987654</td>'
										+'	<th>制卡日期</th>'
											+'<td>Data</td>'
										+'</tr>'
										+'<tr>'
											+'<th>卡行</th>'
											+'<td>Data</td>'
											+'<th>是否绑卡</th>'
											+'<td>Data</td>'
											+'<th>发卡日期</th>'
											+'<td>Data</td>'
										+'</tr>'
										+'<tr>'
											+'<th>状态</th>'
											+'<td>Data</td>'
											+'<th>账号/发行号</th>'
											+'<td>Data</td>'
											+'<th>区域名称</th>'
											+'<td>Data</td>'
										+'</tr>'
										+'<tr>'
											+'<th>是否学生</th>'
											+'<td>Data</td>'
											+'<th>所在单位</th>'
											+'<td>Data</td>'
											+'<th></th>'
											+'<td></td>'
										+'</tr>'
									+'</tbody>'
								+'</table>',
            width: '90%',
            height: '250px',
            opacity: 0.8,
            esc:true
        });
})
//公共自行车 弹框信息-end
//出入境记录 弹框信息
$(".hotel .deta").click(function(){
	zeroModal.show({
            title: '出入境记录详情',
            content: '<table border="1" class="demo3" bordercolor="#ccc" cellspacing="" cellpadding="">'
									+'<col width="9%" /><col width="16%" /><col width="9%" /><col width="16%" />'
									+'<col width="9%" />'
									+'<col width="16%" />'
									+'<col width="9%" />'
									+'<col width="16%" />'
									+'<tbody>'
										+'<tr>'
											+'<th>姓名</th>'
											+'<td>Data</td>'
											+'<th>身份证号</th>'
											+'<td>345678987654</td>'
											+'<th>拼音名</th>'
											+'<td>Data</td>'
											+'<th>出生日期</th>'
											+'<td>2011-11-11</td>'
										+'</tr>'
										+'<tr>'
											+'<th>出生地</th>'
											+'<td>Data</td>'
											+'<th>性别</th>'
											+'<td>Data</td>'
											+'<th>民族</th>'
											+'<td>Data</td>'
											+'<th>户口所在地</th>'
											+'<td>Data</td>'
										+'</tr>'
										+'<tr>'
											+'<th>证件种类</th>'
											+'<td>Data</td>'
											+'<th>证件号码</th>'
											+'<td>Data</td>'
											+'<th>前往国家</th>'
											+'<td>Data</td>'
											+'<th>出境事由</th>'
											+'<td>Data</td>'
										+'</tr>'
										+'<tr>'
											+'<th>证件签发日期</th>'
											+'<td>Data</td>'
											+'<th>出发地</th>'
											+'<td colspan="5"></td>'
										+'</tr>'
									+'</tbody>'
								+'</table>',
            width: '90%',
            height: '250px',
            opacity: 0.8,
            esc:true
        });
})
