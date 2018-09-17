define(function(){
	function Footop(){}

	Footop.prototype.init = function(){
		$("#footop").load("/html/component/footop.html",function(){
			
		});

	}

	return new Footop();
})