<?
    include_once('./rankingdak_header.php');

    $adminId = $_POST['adminId'];
    $adminPw = $_POST['adminPw'];

    $sql = "SELECT adminId, adminName, adminPhone, adminEmail FROM rankingdak_admin_table WHERE adminId='$adminId' AND adminPw='$adminPw'";
    $res = mysqli_query($conn, $sql);

    if(mysqli_num_rows($res) > 0){
        $record = mysqli_fetch_array($res);
        echo '{"아이디": "'.$record['adminId'].'", "이름": "'.$record['adminName'].'", "휴대폰": "'.$record['adminPhone'].'", "이메일": "'.$record['adminEmail'].'"}';
    }
    else {
        echo 0;
    }


?>

