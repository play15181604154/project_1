/*define(function(){
    function Login(){}

    Login.prototype.init = function(){*/
window.onload=function(){
		console.log(document.cookie);
		console.log(1);
		var txt = document.getElementById("txt");
		var	txt3 = document.getElementById("txt3");
		var	txt4 = document.getElementById("txt4");
		var	ty=document.getElementsByClassName("aa");
		var arr = [false,false,false];
		var oForm=document.getElementsByTagName('form')[0];
		var oInput = document.getElementById("checkCard");
		var oCont = document.getElementById("cont");
		var oChange = document.getElementById("change");
		var arrYz = yanzheng();
		oCont.innerHTML = arrYz.join("");
			txt.onfocus = function() {
				if (this.className == "ac") {
					this.value = "";
					this.className = "";
				}

			}
			txt.onblur = function() {
				var str = this.value;
				var reg = /^\w{6,20}$/i;
				if(reg.test(str)){
				$.ajax({
						method:"get",
						url:"http://localhost/gulp-project-template/dist/servers/users.php",
						data:{
							"user":txt.value
							},
						dataType:"json",//JSON对象
						async:true,
						success:function(data){
							console.log(data);
						if (!data.length){
							arr[0] = true;
							ty[0].style.display = "none";
						}else{
						arr[0] = false;
						ty[0].style.display = "block";
						ty[0].innerHTML="用户名已经存在";
						}
					}
				});
				}else{
				arr[0] = false;
				ty[0].style.display = "block";
				ty[0].innerHTML="输入格式不正确";
				}
				
			if (this.value == "") {
					this.className = "ac";
				}
		}
			txt3.onblur = function() {
				var str = this.value;
				var reg = /^.{3,}$/;
				if(reg.test(str)){
					arr[1] = true;
					ty[1].style.display = "none";
				}else{
					arr[1] = false;
					ty[1].style.display = "block";
				}
			}
			txt4.onblur = function() {
				if(txt4.value==txt3.value){
					arr[2] = true;
					ty[2].style.display = "none";
				}
				else{
					arr[2] = false;
					ty[2].style.display = "block";
				}
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
		oForm.onsubmit = function(e){
			 e=e||window.event;
			 $.ajax({
						method:"POST",
						url:"http://localhost/gulp-project-template/dist/servers/register.php",
						data:{
							"user":txt.value,
							"pwd":txt3.value,
							},
						dataType:"json",
						async:true,
						success:function(data){
								console.log(data);
							}
				});
			for(var i=0;i<arr.length;i++){
				if(arr[i]==true){
			}else{
				if(e.preventDefault()){
					e.preventDefault();
					}else{
					return false;
				}
			}
			var value = oInput.value;
					if(value.toLowerCase() == arrYz.join("").toLowerCase()||value.toUpperCase() == arrYz.join("").toUpperCase()){
						var username = txt.value;
						var pwdd = txt3.value;
						document.cookie = "username="+username;
						document.cookie = "pwd="+pwdd;
						window.location.href = "/html/login.html";
				}else{
					alert("验证码错误");
					if(e.preventDefault()){
					e.preventDefault();
					}else{
					return false;
					}
				}
			}
		}
	};
/*	 return new Login();
})*/