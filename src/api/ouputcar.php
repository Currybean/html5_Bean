<?php
    require('connet.php');

    $del_id=isset($_GET['del_id']) ? $_GET['del_id'] : null;
    if($del_id){
        $sql="delete from carlist where id='$del_id'";
        $res=$conn->query($sql);
        $content=$conn->query('select * from carlist');
        $data= $content->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }else{
    $sql='select * from carlist';
    $res=$conn->query($sql);
    $data= $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
   }
?>