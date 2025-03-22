<?
    include_once('./rankingdak_header.php');

    $userId = $_POST['userId'];
    $userPw = $_POST['userPw'];
    $userName = $_POST['userName'];
    $userPhone = $_POST['userPhone'];
    $userEmail = $_POST['userEmail'];
    $userLiftMember = $_POST['userLiftMember'];

    $sql = "UPDATE rankingdak_user_table 
            SET userId='$userId', userPw='$userPw',userName='$userName',
            userPhone='$userPhone', userEmail='$userEmail', userLiftMember='$userLiftMember'
            WHERE userId='$userId'";
    
    $res = mysqli_query($conn, $sql);

    if($res==true){
        echo 1;
    }
    else{
        echo 0;
    }


?>

