<?

    include_once('./rankingdak_header.php');

    $userPhone = $_POST['userPhone'];
    $userName = $_POST['userName'];

    $sql = "SELECT userId FROM rankingdak_user_table WHERE userName='$userName' AND userPhone='$userPhone'";
    $res = mysqli_query($conn, $sql);

    if(mysqli_num_rows($res) > 0){
        $record = mysqli_fetch_array($res);
        echo '{"아이디": "'.$record['userId'].'"}';
    }
    else {
        echo 0;
    }

?>