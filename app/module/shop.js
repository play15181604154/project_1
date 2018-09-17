window.onload=function(){
	console.log(document.cookie);
	$.ajax({
        method:"GET",
        url:"http://localhost/gulp-project-template/dist/servers/shop.php",
        dataType:"json",
        async:false,
        success: function(data){
            var str="";
            var i=getCookie("rank")-1;
				str=`
                 <div class="left">
				<div class="middle">
					<img src="/images/${data[i]["rank"]}.jpg">
				<div class="len"></div>
				</div>
				<div class="big">
					<img src="/images/${data[i]["rank"]}.jpg">
				</div>

			</div>

			<div class="right">
				<ul>
					<li id="name1">${data[i].names}</li>
					<li id="num1">商品编号：<span>${data[i]["rank"]}</span></li>
					<li>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：
						<span id="price1">$<span>${data[i].price}</span></span>
					</li>
					<li>货运地址：上海市 上海市</li>
					<li>物流运费：免运费 卖家承诺24小时发货</li>
					<li>售出情况：良好</li>
					<li>评价水平：好评</li>
					<li>宝贝类型：全新上市</li>
					<li id="">购买数量：
							<span>
								<input type="button" value="-" class="rl" id="jian">
							</span>
							<span>
								<input type="text" value="1" class="r2" id="jnum">
							</span>
							<span>
								<input type="button" value="+" class="rl" id="jia">
							</span>
					</li>
					<li class="last">
						<span>
							<input type="button" class="lastL" id="buy">
						</span>
						<span>
							<input type="button" class="lastR" id="addGu">
						</span>
					</li>
				</ul>
				<div class="right_foot">
					
				</div>
			</div>
			<div class="left_foot">
					
					</div> 
                `
          document.getElementById("content").innerHTML=str;
        }
    });
	var jia = document.getElementById("jia");
	var jian = document.getElementById("jian");
	var jnum = document.getElementById("jnum");
	var buy = document.getElementById("buy");
	var addto = document.getElementById("addGu");
	var spNum = document.getElementById("spNum");
	var middle = document.getElementsByClassName("middle")[0],
		len = document.getElementsByClassName("len")[0],
		big = document.getElementsByClassName("big")[0],
		bigImg = big.getElementsByTagName("img")[0];
	spNum.innerHTML =getCookie("spNum");
		// 求 div.middle 在文档中的定位
		var middleLeft = middle.offsetLeft,
			middleTop = middle.offsetTop;

		// 鼠标移入/移出 div.middle 盒子，显示/隐藏 div.len和div.big
		middle.onmouseenter=function(){
			len.style.display = "block";
			big.style.display = "block";
		};
		middle.onmouseleave=function(){
			len.style.display = "none";
			big.style.display = "none";
		};
		/*console.log(middle.offsetTop)*/
		// 鼠标在 div.middle 盒子上的移动事件
		middle.onmousemove= function(e){
			// 求光标在文档中定位
			e = e || window.event;
			var x = e.clientX,
				y = e.clientY;
			var z= document.documentElement.scrollTop||document.body.scrollTop;

			// 求 div.len 的定位位置
			var _left = x - middleLeft -100,
				_top = y - middleTop -document.body.offsetHeight-100+z;
			// 判断是否超出范围
			if (_left < 0) // 左
				_left = 0;
			else if (_left > 200) // 右
				_left = 200;
			if (_top < 0) // 上
				_top = 0;
			else if (_top > 200) // 下
				_top = 200;
			// 设置CSS
			len.style.left = _left + "px";
			len.style.top = _top + "px";

			// 设置 bigImg 定位位置 
			bigImg.style.left = -2 * _left + "px";
			bigImg.style.top = -2 * _top + "px";
		};
	jia.onclick=function(){
		var all = parseInt(jnum.value);
		all+=1;
		jnum.value =all;
	}
	jian.onclick=function(){
		var all = parseInt(jnum.value);
		all-=1;
		if(all<=0){
			all=1;
		}
		jnum.value =all;
	}

	buy.onclick=function(){

	}
	addto.onclick=function(){
		 var str = document.cookie;
  		 var arr = str.split("; ");
		if(document.cookie){
         item = arr[0].split("=");
         console.log(item[0]);
         if (item[0] == "username") {
		var all = spNum.innerHTML;
		var username =  document.getElementById("name1").innerHTML;
		var li = this.parentNode.parentNode.parentNode;
		var no = li.children[1].children[0].innerHTML;
		$.ajax({
			method:"get",
			url:"http://localhost/gulp-project-template/dist/servers/tottle.php",
			dataType:"json",//JSON对象
			async:true,
			success:function(data){
				//console.log(data.length);
				spNum.innerHTML = data.length;
				document.cookie = "spNum="+spNum.innerHTML;
			}
			});
		$.ajax({
			method:"get",
			url:"http://localhost/gulp-project-template/dist/servers/check.php",
			data:{
				"names":username
				},
			dataType:"json",//JSON对象
			async:true,
			success:function(data){
				//console.log(data.length);
				if (!data.length){
							alert("添加成功");
							$.ajax({
								method:"POST",
								url:"http://localhost/gulp-project-template/dist/servers/shopCart.php",
								data:{
								"rank":no,
								"names":username,
								"price":li.children[2].children[0].children[0].innerHTML,
								"num":li.children[8].children[1].children[0].value
								},
								dataType:"json",
								async:true,
								success:function(data){
									//console.log(data);
									var a=parseInt(spNum.innerHTML);
									a+=1;
									spNum.innerHTML=a;
									document.cookie = "spNum="+spNum.innerHTML;
								}
								});
					}else{
						alert("物品已经存在");
						}
					}
				});
	}else{
      	window.location.href = "/html/login.html";
      };
      }else{
      	alert(2);
      	window.location.href = "/html/login.html";
      }; 
   }
document.getElementById("btn1").onclick=function(){
	var select=document.getElementById("searchText");
	var news = select.value;
	document.cookie = "new="+news;
	document.location.href = "query.html";
}

function setCookie(key,value,day){
	if(day){
		var d = new Date();
		d.setDate(d.getDate()+day);
		document.cookie = key + "=" + value + ";expires=" + d;
	}else{
		document.cookie = key + "=" + value;
	}	
}
function getCookie(key){
	//页面有没有cookie
	if(document.cookie){
		var str = document.cookie;
		var arr = str.split("; ");
		for(var i = 0; i < arr.length; i++){
			var item = arr[i].split("=");
			//item =["username","zhagnsan"]
			if(item[0] == key){
				return item[1];
			}
		}
		return "";
	}else{
		return "";
	}
}
}