/*define(function(){
    function Login(){}

    Login.prototype.init = function(){*/
window.onload=function(){
	console.log(document.cookie);
	console.log(1);
	var user = document.getElementById("user");
	var pwd = document.getElementById("pwd");
	var btn = document.getElementById("btn");
	var str = document.cookie;
	var arr = str.split("; ");
	var item = [];
	var oInput = document.getElementById("checkCard");
	var oCont = document.getElementById("cont");
	var oChange = document.getElementById("change");
	var arrYz = yanzheng();
	if (document.cookie) {
		for (var i = 0; i < arr.length; i++) {
			item = arr[i].split("=");

			if (item[0] == "username") {
				user.value = item[1];
			} else if (item[0] == "pwd") {
				pwd.value = item[1];
			}

		}
	}
	oCont.innerHTML = arrYz.join("");
	btn.onclick = function(e) {
		e=e || window.event;
		$.ajax({
			method:"get",
			url:"http://localhost/gulp-project-template/dist/servers/login.php",
			data:{
				"user":user.value,
				"pwd":pwd.value
			},
			dataType:"json",//JSON对象
			async:true,
			success:function(data){
				console.log(data);
				if (data.code) {
					var value = oInput.value;
					if(value.toLowerCase() == arrYz.join("").toLowerCase()||value.toUpperCase() == arrYz.join("").toUpperCase()){
					window.location.href = "new.html";
					}else{
						alert("验证码错误");
					}
				}else{
					alert("用户名或密码错误");
				}
		}
	});
	e.preventDefault();
		var username = user.value;
		document.cookie = "username="+username;
		console.log(document.cookie);
	}
	oChange.onclick = function(){
				arrYz = yanzheng();
				oCont.innerHTML = arrYz.join("");
			}
	function randomNum(){
				
				// Math.random()*(max-min) + min  (min-max的随机数)
				
				var num = parseInt(Math.random()*10) + 48;
				return String.fromCharCode(num);
			}
			
			function randomLower(){
				var num = parseInt(Math.random()*26) + 97;
				return String.fromCharCode(num);
			}
			
			function randomUpper(){
				var num = parseInt(Math.random()*26) + 65;
				return String.fromCharCode(num);
			}
			
			function randomChar(){
				var num = parseInt(Math.random()*3);
				
				switch(num){
					case 0 : return randomNum();
					case 1 : return randomLower();
					case 2 : return randomUpper();
				}
			}
			
			function yanzheng(){
				var arr=[];
				for(var i = 0; i < 4; i++){
					arr.push(randomChar());
				}
				return arr;
			}
	function getCookie(key) {
		//页面有没有cookie
		if (document.cookie) {
			var str = document.cookie;
			var arr = str.split("; ");
			for (var i = 0; i < arr.length; i++) {
				var item = arr[i].split("=");
				//item =["username","zhagnsan"]
				if (item[0] == key) {
					return item[1];
				}
			}
			return "";
		} else {
			return "";
		}

	}
};
 /*return new Login();
})*/