//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footop","footer","table","news","login"],function($,header,footop,footer,table,news,login){
		//使用tab和toast完成两个模块的功能
		header.init();
		footop.init();
		footer.init();
		table.init();
		news.init();
		/*login.init();*/
		/*$.get( url.url +"/app/servers/start.php",function(data){
			var str="";
			for (var i = 0; i < data.length; i++) {
				// console.log(data[i]);
				str+=`
					<li id="hot_wrap_ul_li">
						<div class="img">
							<a href="#">
								<img src="img/hot${data[i].img}.jpg" />
								<span class="favor">1</span>
							</a>
						</div>
						<div class="text">
                            <p class="desc">${data[i].desc}</p>
                            <p class="name">
                                <span class="cn">${data[i].cnname}</span>
                                <span class="en">${data[i].enname}</span>
                            </p>
                            <p class="attr">
                              	  ￥<span class="price">${data[i].price}</span>
                                <span class="pound">/${data[i].pound}</span>
                            </p>
                            <a href="javascript:;" class="addCart"></a>
                        </div>

					</li>


				`

			}
			document.getElementById('chooseAll').innerHTML=str;
			console.log(1);
		},"json");
*/
	})
})