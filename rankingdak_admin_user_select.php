<?
    include_once('./rankingdak_header.php');

    $sql = "SELECT * FROM rankingdak_user_table ORDER BY userName ASC";
    $res = mysqli_query($conn, $sql);

    if( mysqli_num_rows($res) > 0 ){    
        
        $arr = array();
        while( $row = mysqli_fetch_array($res) ){

            array_push($arr, array(
                '아이디'  => $row['userId'],
                '비밀번호'  => $row['userPw'],
                '이름'  => $row['userName'],
                '휴대폰'=> $row['userPhone'],
                '이메일'=> $row['userEmail'],
                '평생회원'=> $row['userLiftMember'],
                '가입일'=> $row['created_at'],
                '수정일'=> $row['updated_at']
            ));
        }        
    }  

    $json = json_encode($arr, JSON_UNESCAPED_UNICODE);

    echo $json;
?>

