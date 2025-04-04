<?php

    header("Access-Control-Allow-Origin: *"); 
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

    // OPTIONS 요청 처리 (preflight)
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    // DB 연결
    $DB_SERVER = '141.164.53.27:3306';
    $DB_USER_NAME = 'hqservice';
    $DB_USER_PW = 'hqservice1!@#';
    $DB_NAME = 'rankingdak';

    $conn = mysqli_connect($DB_SERVER, $DB_USER_NAME, $DB_USER_PW, $DB_NAME);
    mysqli_set_charset($conn, 'utf8');

    if (!$conn) {
        die("❌ DB 연결 실패: " . mysqli_connect_error());
    }

?>