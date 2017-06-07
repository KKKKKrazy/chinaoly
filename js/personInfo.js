var t=$("#example").DataTable({
	
});
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

