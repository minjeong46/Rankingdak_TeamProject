<?
    include_once('./rankingdak_header.php');
    
    $adminId = $_POST['adminId'];
   
    $sql = "DELETE FROM rankingdak_admin_table WHERE adminId='$adminId'";

    $result = mysqli_query($conn, $sql);
    
    if($result==true){
        echo 1;
    }
    else {
        echo 0;
    }

?>

