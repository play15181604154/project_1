<?php
	header("Access-Control-Allow-Origin:*");
	$username=$_GET["user"];
	// echo $username;
	mysql_connect("127.0.0.1","root","");
	mysql_select_db("home");
	mysql_query("set names 'utf8'");
	$sql="SELECT user FROM register WHERE user='$username'";
	$result=mysql_query($sql);
	$brr=array();
	while ($arr=mysql_fetch_array($result)) {
		# code...
		array_push($brr, $arr);
	}

	echo json_encode($brr);
	// if($brr){
	// 	echo '{"code":1}';
	// }else{
	// 	echo '{"code":0}';
	// }
	mysql_close();
?>