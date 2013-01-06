<!DOCTYPE html>
<html lang="en">
<head>

<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">

<?php
require "lessc.inc.php";
$parser = new lessc(); // Start new object from PHP Less script

try {
$parser->setImportDir("css/");
$less_code = file_get_contents('css/output.less'); // Grab LESS
$processed_css = $parser->parse($less_code); // Process to CSS


file_put_contents('css/css.css', $processed_css); // Write CSS
echo "<link rel='stylesheet' href='css/css.css' type='text/css' media='all' />"; // Link CSS in page 
} catch (exception $e) {
  echo "fatal error: " . $e->getMessage();
}

 ?>
<style type="text/css">
body {
	width: 600px;
	text-align: center;
	margin: 100px auto;
}
.gradient:before{	
content: "s";clear:both;display:block;
width: 100%;
	height: 100%;
	background: #999; /* for non-css3 browsers */

	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#cccccc', endColorstr='#000000'); /* for IE */
	background: -webkit-gradient(linear, left top, left bottom, from(#ccc), to(#000)); /* for webkit browsers */
	background: -moz-linear-gradient(top,  #ccc,  #000); /* for firefox 3.6+ */ }
.gradient {
width: 200px;
	height: 200px;
}

</style>
</head>

<body>
<div class="gradient">
	gradient box
</div>
</body>
</html>

</body>
</html>