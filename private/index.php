<?php

include 'functions.php';

if(isset($_GET['project'])){
    //pass the connection and the movie id to a funtion
    $data = get_single_project($conn, $_GET['project']);
    echo json_encode($data);
}
else{
    //pass the connection and the movie id to a funtion
    $data = get_all_projects($conn);
    echo json_encode($data);
}
?>