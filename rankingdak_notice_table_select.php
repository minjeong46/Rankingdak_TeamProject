<?php
    include_once('./rankingdak_header.php');

    $sql = "SELECT * FROM rankingdak_notice_table ORDER BY wType DESC, wDate DESC, idx DESC";
    $res = mysqli_query($conn, $sql);
 
    if( mysqli_num_rows($res) > 0 ){        
        $arr = array();
        while( $row = mysqli_fetch_array($res) ){
           
            $wSubject  = str_replace("&#039;", "'", $row['wSubject'] );
            $wContent = str_replace("&#039;", "'", $row['wContent'] );
            $wSubject  = str_replace("&apos;", "'", $wSubject );
            $wContent = str_replace("&apos;", "'", $wContent );
            $wSubject  = str_replace("&quot;", "\"", $wSubject );
            $wContent = str_replace("&quot;", "\"", $wContent );
            $wSubject  = str_replace("&lt;", "<", $wSubject );
            $wContent = str_replace("&lt;", "<", $wContent );
            $wSubject  = str_replace("&gt;", ">", $wSubject );
            $wContent = str_replace("&gt;", ">", $wContent );
            $wSubject  = str_replace("&nbsp;", " ", $wSubject );
            $wContent = str_replace("&nbsp;", " ", $wContent );
            $wSubject = nl2br($wSubject);
            $wContent = nl2br($wContent);

            array_push($arr, array(
                '번호'=> $row['idx'],
                '타입'  => $row['wType'],
                // '제목'  => htmlspecialchars_decode($row['wSubject'], ENT_QUOTES),
                // '내용'  => htmlspecialchars_decode($row['wContent'], ENT_QUOTES),
                '제목'  => $wSubject,
                '내용'  => $wContent,
                '아이디'=> $row['wId'],
                '작성일'=> $row['wDate']
            ));
        }        
    }    

    $json = json_encode($arr, JSON_UNESCAPED_UNICODE);
    echo $json;

?>