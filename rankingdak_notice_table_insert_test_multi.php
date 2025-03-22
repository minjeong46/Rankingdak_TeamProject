<?
    include_once('./rankingdak_header.php');
 

    // 공지사항 게시글 테이블 저장
    $sql = "INSERT INTO rankingdak_notice_table (wType, wSubject, wContent, wId) VALUES 
            ('', '랭킹닭컴 배송 서비스 변경 안내', '내용', 'dak1'),
            ('', '랭킹닭컴 배송 서비스 변경 안내', '내용', 'dak1'),
            ('', '랭킹닭컴 배송 서비스 변경 안내', '내용', 'dak1'),
            ('', '랭킹닭컴 배송 서비스 변경 안내', '내용', 'dak1'),
            ('', '랭킹닭컴 배송 서비스 변경 안내', '내용', 'dak1'),
            ('', '랭킹닭컴 오렌지멤버스 혜택 변경 안내', '내용', 'dak1'),
            ('', '2023년 10월 한글날 연휴 배송 안내', '내용', 'dak1'),
            ('', '2023년 9월 추석 연휴 배송 안내', '내용', 'dak1'),
            ('', '랭킹닭컴 배송 서비스 변경 안내', '내용', 'dak1')";   
            
    $result = mysqli_query($conn, $sql);
    
    if($result==true){
        echo "공지사항 게시글 저장 성공!";
    }
    else{
        echo "공지사항 게시글 저장 실패!";
    }

?>