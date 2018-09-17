<?php
	header("Access-Control-Allow-Origin:*");
	$username=$_GET["user"];
	$pwd=$_GET["pwd"];
	// echo $username;
	mysql_connect("127.0.0.1","root","");
	mysql_select_db("home");
	mysql_query("set names 'utf8'");
	$sql="SELECT * FROM register WHERE user='$username' && pwd='$pwd'";
	$result=mysql_query($sql);
	$brr=array();
	while ($arr=mysql_fetch_array($result)) {
		array_push($brr, $arr);
	}
	$data=json_encode($brr);
	if ($data=="[]") {
		echo '{"code":0}';
	}else{
		echo '{"code":1}';
	}
	mysql_close();
?>
