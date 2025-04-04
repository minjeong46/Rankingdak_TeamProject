<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');

    $DB_SERVER = '141.164.53.27:3306';
    $DB_USER_NAME = 'hqservice';
    $DB_USER_PW = 'hqservice1!@#';
    $DB_NAME = 'rankingdak';

    $conn = mysqli_connect($DB_SERVER, $DB_USER_NAME, $DB_USER_PW, $DB_NAME);
    mysqli_set_charset($conn, 'utf8');

    if (!$conn) {
        die("❌ DB 연결 실패: " . mysqli_connect_error());
    } else {
        echo "✅ DB 연결 성공!";
    }

?>