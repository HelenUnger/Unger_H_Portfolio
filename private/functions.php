<?php
include 'connect.php';

function get_single_project($pdo, $id){
    $query = "SELECT * FROM tbl_project WHERE id= '$id'";

    $get_project = $pdo->query($query);
    $results = array();

    while($row = $get_project->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;

        //you could run subresult queries here - just write anogther function and append.
    }

    return $results;
}

function get_all_projects($pdo){
    $query = "SELECT * FROM tbl_project";

    $get_project = $pdo->query($query);
    $results = array();

    while($row = $get_project->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }

    return $results;
}