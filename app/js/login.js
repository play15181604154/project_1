require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footop","footer","login"],function($,header,footop,footer,login){
		//使用tab和toast完成两个模块的功能
		header.init();
		footop.init();
		footer.init();
		login.init();
	})
})