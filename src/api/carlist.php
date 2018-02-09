<?php
    require('connet.php');
   

    $dl_id=isset($_GET['dl_id']) ? $_GET['dl_id'] : null;
    $dl_name=isset($_GET['dl_name']) ? $_GET['dl_name'] : null;
    $dl_price=isset($_GET['dl_price']) ? $_GET['dl_price'] : null;
    $dl_count=isset($_GET['dl_count']) ? $_GET['dl_count'] : null;
    $dl_qty=isset($_GET['dl_qty']) ? $_GET['dl_qty'] : 1;


    $sql="select * from carlist where id='$dl_id'";
    $res=$conn->query($sql);
    
    if($res->num_rows == 0){

    $sql = "insert into carlist(id,name,price,count,qty) values('$dl_id','$dl_name','$dl_price','$dl_count','$dl_qty')";

    $data1 = $conn->query($sql);

    if($data1){
        echo 'insert';
    }
    }else{
       $sql ="update carlist set qty=qty+$dl_qty where id='$dl_id'";
       $data2= $conn->query($sql);
       if($data2){
        echo 'update';
       }
    }



    //     if($res){
    //         echo "success";
    //     }
    // }else{
    //         echo "fail";
    //     }

    // $data= $res->fetch_assoc();
    
    // echo json_encode($data,JSON_UNESCAPED_UNICODE);




?>