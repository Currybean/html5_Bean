<?php
    require('connet.php');

    $username = isset($_GET['username']) ? $_GET['username'] : null;
    $password = isset($_GET['password']) ? $_GET['password'] : null;

    // 判断用户名是否存在
    $data = $conn->query("select * from log_reg where username='$username'");


    if($data->num_rows == 0){

        
        // 写入数据sql语句
        $sql = "insert into log_reg(username,passward) values('$username','$password')";

        $res = $conn->query($sql);

        if($res){
            echo "success";
        }
    }else{
            echo "fail";
        }
?>