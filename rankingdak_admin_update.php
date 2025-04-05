<?php
    include_once('./rankingdak_header.php');

    $adminId = $_POST['adminId'];
    $adminPw = $_POST['adminPw'];
    $adminName = $_POST['adminName'];
    $adminPhone = $_POST['adminPhone'];
    $adminEmail = $_POST['adminEmail'];

    $sql = "UPDATE rankingdak_admin_table SET adminId='$adminId', adminPw='$adminPw', adminName='$adminName', adminPhone='$adminPhone', adminEmail='$adminEmail'
    WHERE adminId='$adminId'";
    
    $res = mysqli_query($conn, $sql);

    if($res==true){
        echo 1;
    }
    else{
        echo 0;
    }


?>

