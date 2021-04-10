<?php
    $user = $_POST['user'];
    $pass = $_POST['pass'];

    $conn = new mysqli("hopper.wlu.ca", "", "", "rocket");

    $stmt = $conn->prepare("SELECT * FROM user WHERE username=? AND password=?");

    $stmt->bind_param("ss", $user, $pass); 
    $stmt->execute();

    $result = $stmt->get_result();
    $conn->close();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $cookie_name = "PkmUserID";
        $cookie_value = $row["userID"];
        setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");

        echo 'True';
    } else {
        echo 'False';
    }

?>