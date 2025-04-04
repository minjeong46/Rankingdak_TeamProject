<?php
include_once('./rankingdak_header.php');

if ($conn) {
    echo "✅ DB 연결 성공!";
} else {
    echo "❌ DB 연결 실패: " . mysqli_connect_error();
}
?>

