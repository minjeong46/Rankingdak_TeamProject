<?php
    include_once('./rankingdak_header.php');

    $wType    = $_POST['wType'];
    $wId      = $_POST['wId'];
    
    $wSubject = nl2br($_POST['wSubject']);
    $wContent = nl2br($_POST['wContent']);
    $wSubject = htmlspecialchars($_POST['wSubject'], ENT_QUOTES);
    $wContent = htmlspecialchars($_POST['wContent'], ENT_QUOTES);
  
    $sql = "INSERT INTO rankingdak_notice_table (wType, wId, wSubject, wContent)
            VALUES ('$wType','$wId','$wSubject','$wContent')";
    $result = mysqli_query($conn, $sql);

    if($result==true){
        echo 1;
    }
    else{
        echo 0;
    }

?>