<?

    include_once('./rankingdak_header.php');


    $SQL = "CREATE TABLE rankingdak_admin_table (
        adminId VARCHAR(16)  NOT NULL,
        adminPw VARCHAR(16)  NOT NULL,
        adminName VARCHAR(50)  NOT NULL, 
        adminEmail VARCHAR(250)  NOT NULL,
        adminPhone VARCHAR(13)  NOT NULL,
        adminAgreement VARCHAR(1000) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY( adminId )
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4";

    $result = mysqli_query($conn, $SQL);

if($result==true){
    echo "테이블 생성";
}
else {
    echo "테이블 실패";
}

?>

