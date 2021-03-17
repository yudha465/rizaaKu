<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Results</title>
</head>

<body>
    <?php $conn = new mysqli('localhost', 'root', 'root', '2021_nembak_cewe'); ?>
    <table border="1" cellspacing="0" cellpadding="5">
        <tr>
            <td>No</td>
            <td>Nama</td>
            <td>Bersedia Ngobrol</td>
            <td>Diterima</td>
            <td>Boleh panggil sayang</td>
        </tr>
        <?php
        $results = mysqli_query($conn, "SELECT * FROM results");
        $no = 1;
        foreach ($results as $result) : ?>
            <tr>
                <td><?= $no++ ?></td>
                <td><?= $result['name'] ?></td>
                <td><?= $result['talk'] ?></td>
                <td><?= $result['result'] ?></td>
                <td><?= $result['call_miss'] ?></td>
            </tr>
        <?php endforeach; ?>
    </table>
</body>

</html>