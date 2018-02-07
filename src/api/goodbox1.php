<?php
    require('connet.php');

    $sql='select * from goodtext';
    $res=$conn->query($sql);

    $data= $res->fetch_all(MYSQLI_ASSOC);
    
    echo json_encode($data,JSON_UNESCAPED_UNICODE);

?>