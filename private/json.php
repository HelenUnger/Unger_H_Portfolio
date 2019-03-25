<?php

include 'functions.php';

if(isset($_GET['getTypes'])){
    //pass the connection and the type id to a funtion
    $data = get_all_types($conn);
    echo json_encode($data);
}else if(isset($_GET['getProject'])){
    //pass id for one project7
    $data = get_single_project($conn);
    echo json_encode($data);
}else{
    //pass the connection to a funtion
    $data = get_all_projects($conn);
    echo json_encode($data);
}
?>