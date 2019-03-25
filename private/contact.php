<?php 

function send_email($name, $email, $message){
  
    $to = 'helen-unger@hotmail.com';
    $subject = "MESSAGE FROM WEBSITE";
    $message = 'Name: '. filter_var($name, FILTER_SANITIZE_STRING) . "\n";
    $message .='From: '.filter_var($email, FILTER_SANITIZE_EMAIL) . "\n";
    $message .= 'Message:'. filter_var($message, FILTER_SANITIZE_STRING);
    $headers = 'From: '. filter_var($name, FILTER_SANITIZE_STRING). "\n";
    $headers .= 'Reply-To:'. filter_var($email, FILTER_SANITIZE_EMAIL);
    
    if(fakemail($to, $subject, $message, $headers)){
        return 'successful';
    }else{
        return 'failed';
    }
}

function fakemail(){
    return true;
}

?>