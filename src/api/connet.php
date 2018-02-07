<?php
    $servename="localhost";
    $username="root";
    $password="";
    $dbname="bean_project";
    //创建连接
    $conn=new mysqli($servename,$username,$password,$dbname);

    if($conn->connect_error){
        die("连接失败：".$conn->connect_error);
    };
    $conn->set_charset('utf8');
?>