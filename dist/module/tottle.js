"use strict";window.onload=function(){console.log(document.cookie);document.getElementById("seeBtn");var c=document.getElementById("demo"),p=(document.getElementById("btn"),document.getElementById("tot"));c.innerHTML="";var d=0,r=0,i=0;$.ajax({method:"get",url:"http://localhost/gulp-project-template/dist/servers/tottle.php",dataType:"json",async:!0,success:function(n){console.log(n.length);var e=n.length;document.cookie="spNum="+e;for(var t=0;t<n.length;t++){var s=document.createElement("li");s.innerHTML+='<span id="lsp" class="de1">'+n[t].rank+'</span><span id="lsp" class="de2">'+n[t].names+'</span><span id="lsp" class="de3">'+n[t].price+'</span><span id="lsp" class="de4">'+n[t].num+'</span><span id="lsp"><a href="javascript:;" id="delBtn" class="delBtn">删除</a></span>',c.appendChild(s),d=n[t].num,console.log(d),r=parseInt(n[t].price),console.log(r),i+=d*r}for(var o=document.getElementsByClassName("delBtn"),a=function(e){o[e].onclick=function(){this.parentNode.parentNode.remove(),console.log(this.parentNode),$.ajax({method:"POST",url:"http://localhost/gulp-project-template/dist/servers/del.php",data:{rank:n[e].rank,names:n[e].names,price:n[e].price,num:n[e].num},dataType:"json",async:!0,success:function(e){console.log(1)}}),i-=n[e].num*parseInt(n[e].price),p.innerHTML=i}},l=0;l<o.length;l++)a(l);p.innerHTML=i}})};