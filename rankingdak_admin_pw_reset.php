<?

    include_once('./rankingdak_header.php');

    $adminId = $_POST['adminId'];
    $adminPw = $_POST['adminPw'];

    $sql = "UPDATE rankingdak_admin_table SET adminPw = '$adminPw' WHERE adminId='$adminId'";
    $res = mysqli_query($conn, $sql);


    if($res == true){
        echo 1;
    }
    else {
        echo 0;
    }

?>