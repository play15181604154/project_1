window.onload=function(){
	console.log(document.cookie);
	var seeBtn = document.getElementById("seeBtn");
	var demo = document.getElementById("demo");
	var btn =document.getElementById("btn");
	var tot=document.getElementById("tot");
				demo.innerHTML = "";
				var num=0;
				var price=0;
				var sum=0;
	$.ajax({
			method:"get",
			url:"http://localhost/gulp-project-template/dist/servers/tottle.php",
			dataType:"json",//JSON对象
			async:true,
			success:function(data){
				console.log(data.length);
				var a=data.length;
				document.cookie = "spNum="+a;
			for(var i = 0; i < data.length; i++){
					var li = document.createElement("li");
					li.innerHTML += '<span id="lsp" class="de1">'+ data[i].rank +'</span><span id="lsp" class="de2">'+ data[i].names +'</span><span id="lsp" class="de3">'+ data[i].price +'</span><span id="lsp" class="de4">'+ data[i].num +'</span>'+'<span id="lsp"><a href="javascript:;" id="delBtn" class="delBtn">删除</a></span>'

					demo.appendChild(li);
					num=data[i].num;
					console.log(num);
					price=parseInt(data[i].price);
					console.log(price);
					sum +=num*price;
				}
				var delBtn = document.getElementsByClassName("delBtn");
				for(let i=0;i<delBtn.length;i++){
				delBtn[i].onclick=function(){
					this.parentNode.parentNode.remove();
					console.log(this.parentNode);
					 $.ajax({
						method:"POST",
						url:"http://localhost/gulp-project-template/dist/servers/del.php",
						data:{
							"rank":data[i].rank,
							"names":data[i].names,
							"price":data[i].price,
							"num":data[i].num
							},
						dataType:"json",
						async:true,
						success:function(data){
								console.log(1);
							}
				});
					sum -=data[i].num*parseInt(data[i].price);
					tot.innerHTML=sum;
				}	
					
			}
			tot.innerHTML=sum;
		}
	});
				
}