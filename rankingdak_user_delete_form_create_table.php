<?php

    include_once('./rankingdak_header.php');


    $SQL = "CREATE TABLE rankingdak_user_delete_form (
        idx INT NOT NULL AUTO_INCREMENT,
        dType VARCHAR(32)  NULL, 
        dContent TEXT  NOT NULL,
        dId VARCHAR(16) NULL,
        dDate timestamp DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY(idx)
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4";


    $result = mysqli_query($conn, $SQL);

    if($result==false){
        echo "테이블 생성 실패!";
    }
    else {
        echo "테이블 생성 성공!";
    }

?>

