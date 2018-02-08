<?php
    require('connet.php');
    $data_id=isset($_GET['data_id']) ? $_GET['data_id'] : 1;
    $sql="select * from goods where id='$data_id'";
    $res=$conn->query($sql);

    $data= $res->fetch_assoc();
    
    echo json_encode($data,JSON_UNESCAPED_UNICODE);




?>