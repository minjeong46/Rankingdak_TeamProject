<?
    include_once('./rankingdak_header.php');
    
    $dContent = nl2br($dContent);
    $dType    = $_POST['dType'];
    $dContent = htmlspecialchars($_POST['dContent'], ENT_QUOTES);
    $dId      = $_POST['dId'];
   
    $sql = "INSERT INTO rankingdak_user_delete_form (dType, dContent, dId)
            VALUES ('$dType','$dContent','$dId')";

    $result = mysqli_query($conn, $sql);
    
    if($result==true){
        echo 1;
    }
    else{
        echo 0;
    }

?>

