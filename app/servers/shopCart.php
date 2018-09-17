<?php
	header("Access-Control-Allow-Origin:*");
	$rank=$_POST["rank"];
	$names=$_POST["names"];
	$price=$_POST["price"];
	$num=$_POST["num"];
	mysql_connect("127.0.0.1","root","");
	mysql_select_db("home");
	mysql_query("set names 'utf8'");
	$sql="INSERT INTO shopping (rank,names,price,num) VALUES ('$rank','$names','$price','$num')";
	$result=mysql_query($sql);
	if ($result) {
		echo '{"code":1}';
	}else{
		echo '{"code":0}';
	}
	mysql_close();
?>