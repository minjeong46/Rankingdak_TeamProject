<?
    include_once('./rankingdak_header.php');

    $userId = $_POST['userId'];
    $userPw = $_POST['userPw'];

    $sql = "SELECT userId, userName, userPhone, userEmail, userLiftMember
            FROM rankingdak_user_table WHERE userId='$userId' AND userPw='$userPw'";
    $res = mysqli_query($conn, $sql);

    if(mysqli_num_rows($res) > 0){
        $record = mysqli_fetch_array($res);
        echo '{"아이디": "'.$record['userId'].'", "이름": "'.$record['userName'].'",
            "휴대폰": "'.$record['userPhone'].'", "이메일": "'.$record['userEmail'].'",
            "평생회원": "'.$record['userLiftMember'].'"}';
    }
    else {
        echo 0;
    }


?>

