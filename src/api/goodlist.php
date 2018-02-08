<?php
    require('connet.php');

    $page_no=isset($_GET['page_no']) ? $_GET['page_no'] : 1;
    $qty=isset($_GET['qty']) ? $_GET['qty'] : 30;
    $ASC=isset($_GET['ASC']) ? $_GET['ASC'] :NULL;
    $DESC=isset($_GET['DESC']) ? $_GET['DESC'] :NULL;
    $datatime=isset($_GET['datatime']) ? $_GET['datatime'] :NULL;
    $idx=($page_no-1)*$qty;

    if($ASC){
        $sql='select * from goods order by price';
    }else if($DESC){
        $sql='select * from goods order by price desc';
    }else if($datatime){
          $sql='select * from goods order by creatime';
    }else{
            $sql='select * from goods';
    }



     $res=$conn->query($sql);

    $data= $res->fetch_all(MYSQLI_ASSOC);
    $cuz=array(
        "data"=>array_slice($data,$idx,$qty),
        "total"=>count($data),
        "qty"=>$qty,
        "page_no"=>$page_no
        );
    echo json_encode($cuz,JSON_UNESCAPED_UNICODE);


    // echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>