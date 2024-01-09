<?

    include_once('./rankingdak_header.php');

    $adminEmail = $_POST['adminEmail'];
    $adminName = $_POST['adminName'];

    $sql = "SELECT adminId FROM rankingdak_admin_table WHERE adminName='$adminName' AND adminEmail='$adminEmail'";
    $res = mysqli_query($conn, $sql);

    if(mysqli_num_rows($res) > 0){
        $record = mysqli_fetch_array($res);
        echo '{"아이디": "'.$record['adminId'].'"}';
    }
    else {
        echo 0;
    }

?>