<?php $mail = "no-reply@sjmcpherson.com";
$subject = "Portfolio Enquiry";
$content = "Hi,<br/>There has been an website enquiry:<br/><br/>Their Name: " . $_POST['name'];
$content .= "<br/>Their Phone: " . $_POST['phone'];
$content .= "<br/>Their Email: " . $_POST['email'];
$content .= "<br/>Their Business: " . $_POST['business'];
$content .= "<br/>Their Message: " . $_POST['message'];
$content .= "<br/><br/>The Website.<br/><br/>";
session_start();
$_SESSION['return'] = "gooo";
$content .= $_SESSION['return'];
$content .= "DFDF";
$text = $content;
$to = "me@sjmcpherson.com";
$headers = "From: " . strip_tags($_POST['from']) . "\r\n";
$headers .= "Reply-To: ". strip_tags($_POST['from']) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

if(mail($to,$subject,$text,$headers)){		
$_SESSION['return'] = "Thanks for the Message, I will get back to you ASAP!";	
} else{
$_SESSION['return'] = "There's some errors to send the mail, verify your server options";
}
header('Location: /index.php'); ?>

