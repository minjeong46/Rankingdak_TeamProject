<?

    include_once('./rankingdak_header.php');

    $userId = $_POST['userId'];
    $userPw = $_POST['userPw'];

    $sql = "UPDATE rankingdak_user_table SET userPw = '$userPw' WHERE userId='$userId'";
    $res = mysqli_query($conn, $sql);


    if($res == true){
        echo 1;
    }
    else {
        echo 0;
    }

?>