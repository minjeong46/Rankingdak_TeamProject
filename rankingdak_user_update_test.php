<?
    include_once('./rankingdak_header.php');

    $userId = 'abcd1234';
    $userPw = '@dkssud12';
    $userName = '수정이';
    $userPhone = '0105555666';
    $userEmail = 'abcd1234@daum.net';
    $userLiftMember = '동의';

    $sql = "UPDATE rankingdak_user_table SET userId='$userId', userPw='$userPw', userName='$userName', userPhone='$userPhone', userEmail='$userEmail', userLiftMember='$userLiftMember'
    WHERE userId='$userId'";
    
    $res = mysqli_query($conn, $sql);

    if($result==true){
        echo 1;
    }
    else{
        echo 0;
    }


?>

