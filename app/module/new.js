define(function(){
    function New(){}

    New.prototype.init = function(){
/*window.onload=function(){*/
    var box = document.getElementById("banner"),
        ul = box.getElementsByTagName("ul")[0],
        aLi = ul.getElementsByTagName("li"),
        ol = box.getElementsByTagName("ol")[0],
        aBtn = [],
        goPrev = document.getElementById("goPrev"),
        goNext = document.getElementById("goNext");
    var index = 0;
    var btnIndex = 0;
    var flag = false;
    var len = aLi.length;
    var liHeight = aLi[0].offsetWidth;
    var li=document.getElementById("choose_nav").children[0].children;
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
    var bul=document.getElementsByClassName("bul");
    var bu2=document.getElementsByClassName("bu2");
    var bu3=document.getElementsByClassName("bu3");
    var bu4=document.getElementsByClassName("bu4");
    for(let m=0; m<bul.length; m++) {
        bul[m].onclick=function(){
        var rank=bu2[m].innerHTML;
        var names=bu3[m].innerHTML;
        var price=bu4[m].innerHTML;
        console.log(rank);
        document.cookie = "rank="+rank;
        document.cookie = "names="+names;
        document.cookie = "price="+price;
        window.location.href = "/html/shop.html";
    }
    };
    for(let i=0;i<li.length;i++){
        li[i].onmouseenter=function(){
            console.log(i);
        var li=document.getElementById("choose_nav").children[0].children;
            li[0].className="";li[1].className="";li[2].className="";
            li[3].className="";this.className="ac";
        var ul=document.getElementById("chooseAll");
            $.ajax({
                method:"GET",
                url:"http://localhost/gulp-project-template/dist/servers/start"+1*(i+1)+".php",
                dataType:"json",
                async:false,
                success: function(data){
                     console.log(1);
                     var str="";
                    for (var j = 0; j < data.length; j++) {
                         str=`
                            <dl class="cd">
                                <dd>
                                    <a href="javascript:" class="cdp2">
                            <span class="s1">${data[0]["rank"]}<img id="mm" src="/images/${data[0]["rank"]}.jpg" /></span></a>
                        </dd>
                    <dt>
                        <p class="cdp1" id="mm"><a class="s2" href="javascript:">${data[0].names}</a></p><p><span class="cdps1">汇贾价：</span><span class="s3" class="cdps2">￥${data[0].price}.00元</span></p>
                    </dt>
                </dl>
                <dl class="cd">
                                <dd>
                                    <a href="javascript:"  class="cdp2">
                            <span class="s1">${data[1]["rank"]}<img id="mm" src="/images/${data[1]["rank"]}.jpg" /></span></a>
                        </dd>
                    <dt>
                        <p class="cdp1" id="mm"><a class="s2" href="javascript:">${data[1].names}</a></p><p><span class="cdps1">汇贾价：</span><span class="s3" class="cdps2">￥${data[1].price}.00元</span></p>
                    </dt>
                </dl>
                <dl class="cd">
                                <dd>
                                    <a href="javascript:"  class="cdp2">
                            <span class="s1">${data[2]["rank"]}<img id="mm" src="/images/${data[2]["rank"]}.jpg" /></span></a>
                        </dd>
                    <dt>
                        <p class="cdp1" id="mm"><a class="s2" href="javascript:">${data[2].names}</a></p><p><span class="cdps1">汇贾价：</span><span class="s3" class="cdps2">￥${data[2].price}.00元</span></p>
                    </dt>
                </dl>
                <dl class="cd">
                                <dd>
                                    <a href="javascript:"  class="cdp2">
                            <span class="s1">${data[3]["rank"]}<img id="mm" src="/images/${data[3]["rank"]}.jpg" /></span></a>
                        </dd>
                    <dt>
                        <p class="cdp1" id="mm"><a class="s2" href="javascript:">${data[3].names}</a></p><p><span class="cdps1">汇贾价：</span><span class="s3" class="cdps2">￥${data[3].price}.00元</span></p>
                    </dt>
                </dl>
                <dl class="cd">
                                <dd>
                                    <a href="javascript:"  class="cdp2">
                            <span class="s1">${data[4]["rank"]}<img id="mm" src="/images/${data[4]["rank"]}.jpg" /></span></a>
                        </dd>
                    <dt>
                        <p class="cdp1" id="mm"><a class="s2" href="javascript:">${data[4].names}</a></p><p><span class="cdps1">汇贾价：</span><span class="s3" class="cdps2">￥${data[4].price}.00元</span></p>
                    </dt>
                </dl>
                 
                `
            }
            ul.innerHTML=str;
        }
     });
    var m1=document.getElementsByClassName("cdp1");
    var m2=document.getElementsByClassName("cdp2");
    var s1=document.getElementsByClassName("s1");
    var s2=document.getElementsByClassName("s2");
    var s3=document.getElementsByClassName("s3");
    for(let k=0; k<m1.length; k++) {
        m1[k].onclick=function(){
        var rank=parseInt(s1[k].innerHTML);
        var names=s2[k].innerHTML;
        var price=s3[k].innerHTML;
        console.log(rank);
        document.cookie = "rank="+rank;
        document.cookie = "names="+names;
        document.cookie = "price="+price;
        window.location.href = "/html/shop.html";
    }
    };
      for(let j=0; j<m2.length; j++) {
        m2[j].onclick=function(){
        var rank=parseInt(s1[j].innerHTML);
        var names=s2[j].innerHTML;
        var price=s3[j].innerHTML;
        console.log(rank);
        document.cookie = "rank="+rank;
        document.cookie = "names="+names;
        document.cookie = "price="+price;
        window.location.href = "/html/shop.html";
    }
    }
  
    };
 };
    ul.appendChild(ul.children[0].cloneNode(true));
    
    ul.style.width = (len+1) * liHeight + "px";
    for(var i = 0; i < len; i++){
        var li = document.createElement("li");
        li.innerHTML = i+1;
        if(i === 0){
            li.className = "ac";
        }
        aBtn.push(li);
        li.index = i;
        ol.appendChild(li);
        li.onclick = function(){
            if(!flag){
                flag = true;
                aBtn[btnIndex].className = "";
                this.className = "ac";
                index = btnIndex = this.index;
                move(ul,{"left":-index*liHeight},function(){
                    flag = false;
                });
            }   
        }
    };
    
    goNext.onclick = function(){
        if(!flag){
            flag = true;
            aBtn[btnIndex].className = "";
            index++;
            btnIndex++;
            if(index == len){
                btnIndex = 0;
            }
            if(index > len){
                ul.style.top = "0px";
                index = btnIndex = 1;
            }
            aBtn[btnIndex].className = "ac";
            move(ul,{"left":-index*liHeight},function(){
                flag = false;
            });
        }
        
    }
    
    goPrev.onclick = function(){
        if(!flag){
            flag = true;
            aBtn[btnIndex].className = "";
            index--;
            btnIndex--;
            if(index<0 || btnIndex < 0){
                ul.style.top = -len * liHeight + "px";
                index = btnIndex = len-1;
            }
            aBtn[btnIndex].className = "ac";
            move(ul,{"left":-index*liHeight},function(){
                flag = false;
            })
        }
    }
    var timer = setInterval(function(){
        goNext.onclick();
    },4000);
    box.onmouseenter = function(){
        clearInterval(timer);
    }
    box.onmouseleave = function(){
        timer = setInterval(function(){
            goNext.onclick();
        },4000);
    }
    document.getElementById("btn1").onclick=function(){
    var select=document.getElementById("searchText");
    var news = select.value;
    document.cookie = "new="+news;
    document.location.href = "/html/query.html";
};
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        //第二个参数false指的是是否存在伪元素
        return window.getComputedStyle(obj,false)[attr];
    }
    };
function move(obj,endJson,fn){
    clearInterval(obj.timer);
    var startJson = {},
        speedJson = {};
    
    for(var key in endJson){
        if(key === "opacity"){
            startJson.opacity = parseInt(getStyle(obj,"opacity")*100);
        }else{
            startJson[key] = parseInt(getStyle(obj,key));
        }
        
    }
    
    obj.timer = setInterval(function(){
        //记录当前运动状态
        var flag = true;
        //计算剩下距离
        for(var key in endJson){
            var distance = endJson[key] - startJson[key];
            //计算当前速度
            speedJson[key] = distance>0?  Math.ceil(distance/10) : Math.floor(distance/10);
            //属性赋值
            startJson[key] += speedJson[key];
            if(key === "opacity"){
                obj.style.opacity = (startJson.opacity)/100; 
            }else{
                obj.style[key] = startJson[key] + "px";
            }
            if(startJson[key] != endJson[key]){
                //运动继续，false
                flag = false;
            }
        }
        
        
        if(flag){
            //运动结束了
            clearInterval(obj.timer);
            fn && fn();
        }
        
        
        
    },30);
    }

    };
 return new New();
})