<?php
	header("Access-Control-Allow-Origin:*");
	/*$rank=$_POST["rank"];
	$names=$_POST["names"];
	$price=$_POST["price"];
	$num=$_POST["num"];*/
	// echo $username;
	mysql_connect("127.0.0.1","root","");
	mysql_select_db("home");
	mysql_query("set names 'utf8'");
	$sql="SELECT * FROM shopping";
	$result=mysql_query($sql);
	$brr=array();
	while ($arr=mysql_fetch_array($result)) {
		# code...
		array_push($brr, $arr);
	}
	echo json_encode($brr);
	mysql_close();
?>
