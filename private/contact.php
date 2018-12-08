<?php 

function fake_email($to, $subject, $message, $headers){
    echo '==FAKE EMAIL=='. PHP_EOL;
    echo 'Subject: '. $subject.PHP_EOL;
    echo 'Email to: '. $to.PHP_EOL;
    echo 'message: '.$message.PHP_EOL;
    echo '==END OF EMAIL=='.PHP_EOL;

    return true;
}

function send_email(){

    if(empty($_POST['message']) || empty($_POST['email']) || empty($_POST['name'])){
        header('Location:../index.php?status=error');
        exit();
    }
  
    $to = 'helen-unger@hotmail.com';
    $subject = "MESSAGE FROM WEBSITE";
    $message = 'Message Body:'. filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    $headers = 'From: '. filter_var($_POST['name'], FILTER_SANITIZE_STRING).' \r\n';
    $headers .= 'Reply-To:'. filter_var($_POST['message'], FILTER_SANITIZE_EMAIL);

    // if(mail($to, $subject, $message, $headers)){
    //     header('Location:../contact.php?status=successful');
    // }else{
    //     header('Location:../contact.php?status=error');
    // }
    
    if(fake_email($to, $subject, $message, $headers)){
        header('Location:../index.php?status=successful');
    }else{
        header('Location:../index.php?status=error');
        exit();
    }
}

send_email();

?>