<?php
$route = $_GET['route'];

require 'templates/Header.php';

switch($route) {
    case '':
        require 'templates/Main.php';
        break;
    case 'cart':
       require 'templates/Cart.php';
        break;
}

 require 'templates/Footer.php';

?>