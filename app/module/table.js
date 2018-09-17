define(function(){
    function Table(){}

    Table.prototype.init = function(){
        var ul=document.getElementById("chooseAll");
      $.ajax({
                method:"GET",
                url:"http://localhost/gulp-project-template/dist/servers/start1.php",
                dataType:"json",
                async:false,
                success: function(data){
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

    }

    return new Table();
})