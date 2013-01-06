<?php
    require "lessc.inc.php";
    $parser = new lessc(); // Start new object from PHP Less script
    $parser->setImportDir("css/");
    try {
    
    $less_code = file_get_contents('css/style.less'); // Grab LESS
    $processed_css = $parser->parse($less_code); // Process to CSS
    
    
    file_put_contents('css/css-file.css', $processed_css); // Write CSS
    echo "<link rel='stylesheet' href='css/css-file.css' type='text/css' media='all' />"; // Link CSS in page
    } catch (exception $e) {
      echo "fatal error: " . $e->getMessage();
}
 ?>