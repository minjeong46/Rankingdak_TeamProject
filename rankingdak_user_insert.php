<?

    include_once('./rankingdak_header.php');

    $userId = $_POST['userId'];      
    $userPw = $_POST['userPw'];
    $userName= $_POST['userName'];
    $userPhone = $_POST['userPhone'];      
    $userEmail = $_POST['userEmail'];   
    $userLiftMember = $_POST['userLiftMember']; 
    $userAgreement = $_POST['userAgreement']; 


    $sql = "INSERT INTO rankingdak_user_table (userId, userPw, userName, userPhone, userEmail, userLiftMember, userAgreement)
            VALUES ('$userId', '$userPw', '$userName', '$userPhone', '$userEmail', '$userLiftMember', '$userAgreement')";
            
    $result = mysqli_query($conn, $sql);

    if($result===true){
        echo 1;
    }
    else{
        echo 0;
    }



?>