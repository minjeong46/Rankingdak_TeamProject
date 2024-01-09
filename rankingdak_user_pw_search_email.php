<?
    include_once('./rankingdak_header.php');

    $userId = $_POST['userId'];
    $userEmail = $_POST['userEmail'];

    $sql = "SELECT * FROM rankingdak_user_table WHERE userId='$userId' AND userEmail='$userEmail'";
    $res = mysqli_query($conn, $sql);
 
    if(mysqli_num_rows($res) > 0){        
        echo '{"아이디": "'.$record['userId'].'"}';
    }
    else{
        echo 0;
    }

?>

