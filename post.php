<?php
$conn = new mysqli('localhost', 'root', 'root', '2021_nembak_cewe');

$name = htmlspecialchars($_POST['name']);
$talk = htmlspecialchars($_POST['talk']);
$result = htmlspecialchars($_POST['result']);
$call_miss = htmlspecialchars($_POST['call_miss']);

echo $name;
echo $talk;
echo $result;
echo $call_miss;

$query = "INSERT INTO results (name, talk, result, call_miss) VALUES ('$name', '$talk', '$result', '$call_miss')";
mysqli_query($conn, $query);

echo 'successfully';
