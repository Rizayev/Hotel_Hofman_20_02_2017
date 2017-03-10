<?php

$to1      =  'your@gmail.com';
$subject = 'Заявка на сайте ';
$message = 'На сайт '.$_SERVER['SERVER_NAME'].' поступила новая заявка.<br>';

$message .= 'Имя : '.$_POST['name'] .'<br>';
$message .= 'Email : '.$_POST['email'] .'<br>';
$message .= 'Комментарий : '.$_POST['comment'] .'<br>';
$message .= '<br>'.'IP Адрес : '.$_SERVER['REMOTE_ADDR'].'<br>';

$message .= '<br>Письмо отправлено автоматически и не требует ответа';
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: ROBOT <robot@".$_SERVER['SERVER_NAME'].">\r\n";
mail($to1, $subject, $message, $headers);
