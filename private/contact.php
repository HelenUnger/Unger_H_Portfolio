<?php 

function send_email(){

    if(empty($_POST['message']) || empty($_POST['email']) || empty($_POST['name'])){
        header('Location:../index.php?status=error');
        exit();
    }

    if(!empty($_POST['subject'])){
        header('Location:../index.php?status=good-try-spam-bot');
        exit();
    }
  
    $to = 'helen-unger@hotmail.com';
    $subject = "MESSAGE FROM WEBSITE";
    $message ='From: '.filter_var($_POST['email'], FILTER_SANITIZE_EMAIL).' \r\n';
    $message .= 'Message:'. filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    $headers = 'From: '. filter_var($_POST['name'], FILTER_SANITIZE_STRING).' \r\n';
    $headers .= 'Reply-To:'. filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    
    if(mail($to, $subject, $message, $headers)){
        header('Location:../index.php?status=successful');
    }else{
        header('Location:../index.php?status=error');
        exit();
    }
}

send_email();

?>