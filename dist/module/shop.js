"use strict";window.onload=function(){console.log(document.cookie),$.ajax({method:"GET",url:"http://localhost/gulp-project-template/dist/servers/shop.php",dataType:"json",async:!1,success:function(t){var n,e=r("rank")-1;n='\n                 <div class="left">\n\t\t\t\t<div class="middle">\n\t\t\t\t\t<img src="/images/'.concat(t[e].rank,'.jpg">\n\t\t\t\t<div class="len"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="big">\n\t\t\t\t\t<img src="/images/').concat(t[e].rank,'.jpg">\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class="right">\n\t\t\t\t<ul>\n\t\t\t\t\t<li id="name1">').concat(t[e].names,'</li>\n\t\t\t\t\t<li id="num1">商品编号：<span>').concat(t[e].rank,'</span></li>\n\t\t\t\t\t<li>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：\n\t\t\t\t\t\t<span id="price1">$<span>').concat(t[e].price,'</span></span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>货运地址：上海市 上海市</li>\n\t\t\t\t\t<li>物流运费：免运费 卖家承诺24小时发货</li>\n\t\t\t\t\t<li>售出情况：良好</li>\n\t\t\t\t\t<li>评价水平：好评</li>\n\t\t\t\t\t<li>宝贝类型：全新上市</li>\n\t\t\t\t\t<li id="">购买数量：\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<input type="button" value="-" class="rl" id="jian">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<input type="text" value="1" class="r2" id="jnum">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t<input type="button" value="+" class="rl" id="jia">\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="last">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<input type="button" class="lastL" id="buy">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<input type="button" class="lastR" id="addGu">\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class="right_foot">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="left_foot">\n\t\t\t\t\t\n\t\t\t\t\t</div> \n                '),document.getElementById("content").innerHTML=n}});var t=document.getElementById("jia"),n=document.getElementById("jian"),e=document.getElementById("jnum"),l=document.getElementById("buy"),s=document.getElementById("addGu"),i=document.getElementById("spNum"),o=document.getElementsByClassName("middle")[0],a=document.getElementsByClassName("len")[0],c=document.getElementsByClassName("big")[0],d=c.getElementsByTagName("img")[0];i.innerHTML=r("spNum");var p=o.offsetLeft,u=o.offsetTop;function r(t){if(document.cookie){for(var n=document.cookie.split("; "),e=0;e<n.length;e++){var l=n[e].split("=");if(l[0]==t)return l[1]}return""}return""}o.onmouseenter=function(){a.style.display="block",c.style.display="block"},o.onmouseleave=function(){a.style.display="none",c.style.display="none"},o.onmousemove=function(t){var n=(t=t||window.event).clientX,e=t.clientY,l=document.documentElement.scrollTop||document.body.scrollTop,s=n-p-100,i=e-u-document.body.offsetHeight-100+l;s<0?s=0:200<s&&(s=200),i<0?i=0:200<i&&(i=200),a.style.left=s+"px",a.style.top=i+"px",d.style.left=-2*s+"px",d.style.top=-2*i+"px"},t.onclick=function(){var t=parseInt(e.value);t+=1,e.value=t},n.onclick=function(){var t=parseInt(e.value);(t-=1)<=0&&(t=1),e.value=t},l.onclick=function(){},s.onclick=function(){var t=document.cookie.split("; ");if(document.cookie)if(item=t[0].split("="),console.log(item[0]),"username"==item[0]){i.innerHTML;var n=document.getElementById("name1").innerHTML,e=this.parentNode.parentNode.parentNode,l=e.children[1].children[0].innerHTML;$.ajax({method:"get",url:"http://localhost/gulp-project-template/dist/servers/tottle.php",dataType:"json",async:!0,success:function(t){i.innerHTML=t.length,document.cookie="spNum="+i.innerHTML}}),$.ajax({method:"get",url:"http://localhost/gulp-project-template/dist/servers/check.php",data:{names:n},dataType:"json",async:!0,success:function(t){t.length?alert("物品已经存在"):(alert("添加成功"),$.ajax({method:"POST",url:"http://localhost/gulp-project-template/dist/servers/shopCart.php",data:{rank:l,names:n,price:e.children[2].children[0].children[0].innerHTML,num:e.children[8].children[1].children[0].value},dataType:"json",async:!0,success:function(t){var n=parseInt(i.innerHTML);n+=1,i.innerHTML=n,document.cookie="spNum="+i.innerHTML}}))}})}else window.location.href="/html/login.html";else alert(2),window.location.href="/html/login.html"},document.getElementById("btn1").onclick=function(){var t=document.getElementById("searchText").value;document.cookie="new="+t,document.location.href="query.html"}};