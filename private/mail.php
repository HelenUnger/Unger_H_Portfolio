<?php 
    require_once('contact.php');
    
if(!empty($_POST['subject'])){
    $msg = 'spam-bot';
}else{

	if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])){
        $msg = 'failed';
	}else{
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];        

		$msg = send_email($name, $email, $message);
    }
}
	echo json_encode($msg);
?>