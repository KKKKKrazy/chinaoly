$(function(){
	var selected = [];
//	datatable 初始化
	var t = $('#example').DataTable({
		"processing": true,
//      "serverSide": true,
	    "ajax": {
	        //指定数据源
	        url: "../json/addrDeta.json",
	    },
	    //每页显示三条数据
	    pageLength: 3,
	    columns: [{
	        "data": null //此列不绑定数据源，用来显示序号
	    },
	    {
	        "data": "address"
	    },
	    {
	        "data": "origin"
	    },
	     {
	        "data": "confidence"
	    },
	     {
	        "data": "firstGather"
	    },
	     {
	        "data": "lastGather"
	    },
	     {
	        "data": "gatherNum"
	    },
	    {
	        "data": "gatherMan"
	    },
	    {
	        "data": "gatherReason"
	    }],
	    "columnDefs": [{
//	         "visible": false,
//	        "targets": 0
	    },
	    {
	        "render": function(data, type, row, meta) {
	            //渲染 把数据源中的标题和url组成超链接
//	            return '<a href="' + data + '" target="_blank">' + row.title + '</a>';
	        },
	        //指定是第三列
//	        "targets": 2
	    }],
	     "rowCallback": function( row, data ) {
            if ( $.inArray(data.DT_RowId, selected) !== -1 ) {
                $(row).addClass('selected');
            }
        }
	
	});
	//行选中 表格
	 $('#example tbody').on('click', 'tr', function () {
        var id = this.id;
        var index = $.inArray(id, selected);
 
        if ( index === -1 ) {
            selected.push( id );
        } else {
            selected.splice( index, 1 );
        }
 
        $(this).toggleClass('selected');
    } );
	
	//前台添加序号
	t.on('order.dt search.dt',
	function() {
	    t.column(0, {
	        "search": 'applied',
	        "order": 'applied'
	    }).nodes().each(function(cell, i) {
	        cell.innerHTML = i + 1;
	    });
	}).draw();
	
//	//更换数据源（相同格式，但是数据内容不同）
//	$("#redraw").click(function() {
//	    var url = table.api().ajax.url("http://www.gbtags.com/gb/networks/uploads/a7bdea3c-feaf-4bb5-a3bd-f6184c19ec09/newData.txt");
//	    url.load();
//	});
})