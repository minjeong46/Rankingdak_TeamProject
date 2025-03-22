<?
    include_once('./rankingdak_header.php');


    $idx      = $_POST['idx'];
    $wType    = $_POST['wType'];
    $wId      = $_POST['wId'];
    $wSubject = nl2br($_POST['wSubject']);
    $wContent = nl2br($_POST['wContent']);
    $wSubject = htmlspecialchars($_POST['wSubject'], ENT_QUOTES);
    $wContent = htmlspecialchars($_POST['wContent'], ENT_QUOTES);
    
    // 공지사항 게시글 테이블 저장
    $sql = "UPDATE  rankingdak_notice_table
            SET     wType='$wType', wId='$wId', wSubject='$wSubject', wContent='$wContent'
            WHERE   idx='$idx'";
    $result = mysqli_query($conn, $sql);
    
    if($result==true){
        echo 1;
    }
    else{
        echo 0;
    }

?>