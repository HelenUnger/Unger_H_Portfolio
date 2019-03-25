<?php
include 'connect.php';


function get_all_projects($pdo){
    $query = "SELECT * FROM tbl_project , tbl_project_type, tbl_type 
            WHERE tbl_project.project_id = tbl_project_type.project_id
            AND tbl_project_type.type_id = tbl_type.type_id";

    $get_project = $pdo->query($query);
    $results = array();

    while($row = $get_project->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }

    return $results;
}

function get_all_types($pdo){
    $query = "SELECT * FROM tbl_type";

    $get_project = $pdo->query($query);
    $results = array();

    while($row = $get_project->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }

    return $results;
}

function get_single_project($pdo){
    $query = "SELECT * FROM tbl_project, tbl_project_type, tbl_type 
    WHERE tbl_project.project_id = tbl_project_type.project_id AND tbl_type.type_id = tbl_project_type.type_id AND tbl_project.project_id = :id";

    $id = $_GET['getProject'];

    $get_project = $pdo->prepare($query);
    $get_project->execute(
        array(
            ':id'=>$id
        )
    );

    $data = array();
    while($row = $get_project->fetch(PDO::FETCH_ASSOC)) {
        $data = $row;
    }

    return $data;
}