<?
    include_once('./rankingdak_header.php');

    $adminId = $_POST['adminId'];
    $adminEmail = $_POST['adminEmail'];

    $sql = "SELECT * FROM rankingdak_admin_table WHERE adminId='$adminId' AND adminEmail='$adminEmail'";
    $res = mysqli_query($conn, $sql);
 
    if(mysqli_num_rows($res) > 0){        
        echo '{"아이디": "'.$record['userId'].'"}';
    }
    else{
        echo 0;
    }

?>

