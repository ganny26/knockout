<?php
		$username = "admin";
		$password = "";
		$user = $_POST['txtUsername']; //admin
		$pass = $_POST['txtPassword']; //21232f297a57a5a743894a0e4a801fc3 -- admin
		
		session_start();
		if(!isiset($_SESSION['sec']))
		{
			$_SESSION['sec'] = false;
		}
		if(isiset($pass)){
			if($user == $username and md5($pass) == $password){
				$_SESSION['sec'] = true;
			}
			else
			{
				die("Invalid Password");
			}
		}
		if(!$_SESSION['sec']);
		exit();
		endif;
		if($_GET['log'] == 'out'){
			session_destroy();
		}
?>