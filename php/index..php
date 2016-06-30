<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
   $from = 'From: http://ivanov.comuf.com/beta1.0/Portfolio/';
    $to = 'ivanov.ivailo.p@gmail.com';
   $body = "From: $name\n E-Mail: $email\n $subject\n Message:\n $message"
?>

<?php

    if (mail ($to, $subject, $body, $from)) {
        echo '<p>Your message has been sent!</p>';
    } else {
        echo '<p>Something went wrong, go back and try again!</p>';
    }

?>