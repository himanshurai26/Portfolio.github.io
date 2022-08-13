
<?php
$user = 'root';
$pass = '';
$db = 'portfolio';

$connection = new mysqli('localhost', $user, $pass, $db);

if(!$connection){
    die("could not connected please check" . mysqli_error());
}else{
  //  echo "Connected successfully";
}


if(isset($_POST['save'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $message = $_POST['message'];
    
    $sql = "INSERT INTO contact (name, email, number, message ) VALUES ('$name', '$email', '$number', '$message')";

    if(mysqli_query($connection, $sql)){
        echo "<h1 color:'red'>Information Submitted Successfully</h1>";
    }else{
        "Error:" . $sql . " " . mysqli_error($connection);
    }

    mysqli_close($connection);
}

?>




    