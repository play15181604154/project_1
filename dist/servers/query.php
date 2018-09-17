<?php
	$value=$_GET["value"];
	$pageCount=$_GET["pageCount"];
	$index=$_GET["index"];
	// ech $index." ".$pageCount;
	// 1 0 3
	// 2 3 3
	// 3 6 3
	header("Access-Control-Allow-Origin:*");
	mysql_connect("127.0.0.1","root","");
	mysql_select_db("home");
	mysql_query("set names 'utf8'");
	$sql="SELECT * FROM home WHERE names LIKE '%$value%' LIMIT ".($index-1)*$pageCount.",".$pageCount;
	$sql1="SELECT COUNT(*) as allCount FROM home WHERE names LIKE '%$value%'";
	$num=mysql_query($sql1);
	$result=mysql_query($sql);
	$allNum=mysql_fetch_assoc($num);
	// echo json_encode($allCount);
	$topArr=array();
	while ($arr=mysql_fetch_array($result)) {
		# code...
		array_push($topArr, $arr);
	}
	$json=array("allCount"=>$allNum["allCount"],"data"=>$topArr);
	echo json_encode($json);
	mysql_close();
?>
