<?php
	header("Content:text/html;charset=utf-8");
		$username = $_POST['username'];
        $userpass = $_POST['userpass'];

		$con = mysql_connect("localhost","root","root");
		if(!$con){
			echo "连接数据库失败";
			mysql_close($con);
		}
		else{
			mysql_select_db("mi",$con);
			$sqlstr = "insert into milogin values('$username','$userpass')";
			$result = mysql_query($sqlstr,$con);

			if($result){
            //插入成功
				echo "1";
			}
			else{
				echo "0";
            }
            mysql_close($con);
		}
?>