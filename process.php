<?php
if( isset($_POST) ){
	
	//form validation vars
	$formok = true;
	$errors = array();
	
	//sumbission data
	$ipaddress = $_SERVER['REMOTE_ADDR'];
	date_default_timezone_set('Pacific/Auckland');
	$date = date('d/m/Y');
	$time = date('H:i:s');
	
	//form data
	$name = $_POST['name'];	
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$business = $_POST['business'];
	$message = $_POST['message'];
	
	//validate form data
	
	//validate name is not empty
	if(empty($name)){
		$formok = false;
		$errors[] = "You have not entered a name";
	}
	//validate email address is not empty
	if(empty($email)){
		$formok = false;
		$errors[] = "You have not entered an email address";
	//validate email address is valid
	}elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
		$formok = false;
		$errors[] = "You have not entered a valid email address";
	}
	
	//validate message is not empty
	if(empty($message)){
		$formok = false;
		$errors[] = "You have not entered a message";
	}
	//validate message is greater than 20 charcters
	//elseif(strlen($message) < 20){
	//	$formok = false;
	//	$errors[] = "Your message must be greater than 20 characters";
	//}
	echo $email;
	echo "Set";
	echo $formok;	
	//send email if all is ok
	if($formok){
		$headers = "From: website@website.com" . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		
		$emailbody = "<p>You have recieved a new message from the enquiries form on your website.</p>
					  <p><strong>Name: </strong> {$name} </p>
					  <p><strong>Email Address: </strong> {$email} </p>
					  <p><strong>Phone: </strong> {$phone} </p>
					  <p><strong>Business: </strong> {$business} </p>
					  <p><strong>Message: </strong> {$message} </p>
					  <p>This message was sent from the IP Address: {$ipaddress} on {$date} at {$time}</p>";
		
		mail("email@sjmcpherson.com","New Enquiry",$emailbody,$headers);
		echo "FORM SENT";
	}
	
	//what we need to return back to our form
	$returndata = array(
		'posted_form_data' => array(
			'name' => $name,
			'email' => $email,
			'phone' => $phone,
			'business' => $business,
			'message' => $message
		),
		'form_ok' => $formok,
		'errors' => $errors
	);
	echo "END";	
	echo $_SERVER['HTTP_X_REQUESTED_WITH'];
	//if this is not an ajax request
	//if(empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest'){
		//set session variables
		//session_start();
		$_SESSION['cf_returndata'] = $returndata;
			//echo "Finish";
		//redirect back to form
		//header('location: ' . $_SERVER['HTTP_REFERER']);
	//}
}
