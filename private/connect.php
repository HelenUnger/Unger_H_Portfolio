<?php
    // $user = "helenung_admin";
    // $pw ="helenadminunger";

    $user = "root";
    $pw ="";

    try{
        // $conn = new PDO('mysql:host=localhost;dbname=helenung_db_portfolio', $user, $pw);
        $conn = new PDO('mysql:host=localhost;dbname=db_portfolio', $user, $pw);
        $conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
        // var_dump($conn);
    }catch(PDOException $exception){
        echo 'connect error! ' . $exception->getMessage();
    }
?>