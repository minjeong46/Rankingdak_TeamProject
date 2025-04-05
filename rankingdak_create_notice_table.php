<?php

include_once('./rankingdak_header.php');



$SQL = "CREATE TABLE rankingdak_notice_table (
    idx            INT               NOT NULL AUTO_INCREMENT,
    wType          VARCHAR(16)       NULL,
    wSubject       VARCHAR(250)      NOT NULL,
    wContent       TEXT              NOT NULL,
    wId            VARCHAR(16)       NULL,
    wDate          timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(idx)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4";



$result = mysqli_query($conn, $SQL);
if($result==false){
    echo "공지사항 테이블 만들기 실패!";
}
else{
    echo "공지사항 테이블 만들기 성공!";
}


?>
