<?php
    include_once('./rankingdak_header.php');
    
    $userId = $_POST['userId'];
   
    $sql = "DELETE FROM rankingdak_user_table WHERE userId='$userId'";

    $result = mysqli_query($conn, $sql);
    
    if($result==true){
        echo 1;
    }
    else{
        echo 0;
    }

?>

