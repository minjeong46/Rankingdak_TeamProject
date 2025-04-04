<?

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');

    $DB_SERVER = '141.164.53.27';
    $DB_USER_NAME = 'hqservice';
    $DB_USER_PW = 'hqservice1!@#';
    $DB_NAME = 'hqservice';

    $conn = mysqli_connect($DB_SERVER, $DB_USER_NAME, $DB_USER_PW, $DB_NAME);
    mysqli_set_charset($conn, 'utf8');

?>