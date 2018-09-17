window.onload=function(){
	var select=document.getElementById("searchText");
var str = getCookie("new");
select.value=str;
(document.getElementById("btn1").onclick=function(){
	var select=document.getElementById("searchText");
	var pageCount=3;
	var index=1;
	var pageNum;
	var allNum;
	console.log(select.value);
function show(){
	$.ajax({
        method:"GET",
        url:"http://localhost/gulp-project-template/dist/servers/query.php",
        dataType:"json",
        data:{"value":select.value,"pageCount":pageCount,"index":index},
        async:false,
		success:function(data){
			// return;
			console.log(data);
			 allNum=data.allCount;
			pageNum=Math.ceil(allNum/pageCount);
			// console.log(pageNum);
			// console.log(data);
		var tbody=document.getElementById("demo");
		var data =data.data;
			var str="";
			for (let i = 0; i < data.length; i++) {
				str+=`<span id="lsp" class="q_lsp1">${data[i].rank}</span>
						<span id="lsp" class="q_lsp2">${data[i].names}</span>
						<span id="lsp" class="q_lsp3">￥${data[i].price}.00</span>
						<span id="lsp"><a href="javascript:;" id="delBtn" class="check">查看详情</a></span>
				`
			}
			tbody.innerHTML=str;
			document.getElementById("pagination").innerHTML = `<li>
			      <a href="#" aria-label="Previous" class="prev">
			        <span aria-hidden="true" class="prev">&laquo;</span>
			      </a>
			    </li>
			    <li id="lastLi">
			      <a href="#" aria-label="Next" class="next">
			        <span aria-hidden="true" class="next">&raquo;</span>
			      </a>
			    </li>`;
				// 拼接分页
				for (var i = 1; i <=pageNum; i++) {
					var li=document.createElement("li");
					li.innerHTML=`<a href="#">${i}</a>`;
					document.getElementById("pagination").insertBefore(li,document.getElementById("lastLi"));
				}

		}
	})
	var check=document.getElementsByClassName("check");
	var s1=document.getElementsByClassName("q_lsp1");
    var s2=document.getElementsByClassName("q_lsp2");
    var s3=document.getElementsByClassName("q_lsp3");
	for (let i = 0; i < check.length; i++) {
		check[i].onclick=function(){
			 var rank=s1[i].innerHTML;
        	var names=s2[i].innerHTML;
        	var price=s3[i].innerHTML;
        	document.cookie = "rank="+rank;
        	document.cookie = "names="+names;
        	document.cookie = "price="+price;
        	window.location.href = "/html/shop.html";
			}
	}
}
show();
document.getElementById("pagination").onclick=function(e){
	e=e || window.event;
	var target=e.target || e.srcElement;
	var content=target.innerHTML;
	if (!isNaN(Number(content))) {
		index=target.innerHTML;
		// show();
	}else if(target.className==="prev"){
		index--;
		if (index<1) {
			index=1;
			// show();
		}
	}else if(target.className==="next"){
		index++;
		if (index>pageNum) {
			index=pageNum;
			// show();
		}
	}
	show();
}
})();
	var spNum = document.getElementById("spNum");
    $.ajax({
            method:"get",
            url:"http://localhost/gulp-project-template/dist/servers/tottle.php",
            dataType:"json",//JSON对象
            async:true,
            success:function(data){
                console.log(data.length);
                spNum.innerHTML = data.length;
                document.cookie = "spNum="+spNum.innerHTML;
            }
            });
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