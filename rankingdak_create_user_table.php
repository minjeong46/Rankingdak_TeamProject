<?

    include_once('./rankingdak_header.php');


    $SQL = "CREATE TABLE rankingdak_user_table (
        userId VARCHAR(16)  NOT NULL,
        userPw VARCHAR(16)  NOT NULL,
        userName VARCHAR(50)  NOT NULL, 
        userEmail VARCHAR(250)  NOT NULL,
        userPhone VARCHAR(13)  NOT NULL,
        userLiftMember VARCHAR(4) NOT NULL,
        userAgreement VARCHAR(1000) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY( userId )
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4";


    $result = mysqli_query($conn, $SQL);

if($result==true){
    echo "테이블 생성";
}
else {
    echo "테이블 실패";
}

?>

