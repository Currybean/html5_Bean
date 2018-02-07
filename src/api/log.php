<?php
    require('connet.php');

    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';

    $sql = "select * from log_reg where username='$username' and passward='$password'";

    $result = $conn->query($sql);

   if($result->num_rows>0){
        echo 'success';
    }else{
        echo 'fail';
    };

?>