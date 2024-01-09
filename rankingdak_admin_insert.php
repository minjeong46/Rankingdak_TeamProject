<?

    include_once('./rankingdak_header.php');

    $adminId = $_POST['adminId'];      
    $adminPw = $_POST['adminPw'];
    $adminName= $_POST['adminName'];
    $adminPhone = $_POST['adminPhone'];      
    $adminEmail = $_POST['adminEmail'];   
    $adminAgreement = $_POST['adminAgreement']; 


    $sql = "INSERT INTO rankingdak_admin_table (adminId, adminPw, adminName, adminPhone, adminEmail, adminAgreement)
            VALUES ('$adminId', '$adminPw', '$adminName', '$adminPhone', '$adminEmail', '$adminAgreement')";
            
    $result = mysqli_query($conn, $sql);

    if($result===true){
        echo 1;
    }
    else{
        echo 0;
    }



?>