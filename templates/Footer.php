
    

<script src="js/bootstrap.js"></script>
<script src="js/npm.js"></script>
<script src="/js/jquery-3.1.1.js"></script>
<?php
    
switch ($route){
        case'':
            echo '<script src="js/eshop.js"></script>';
            break;
        case'cart':
            echo '<script src="js/cart.js"></script>';
            break;
//        case'paint':
//            echo '<script src="js/paint.js"></script>';
//            break;
//        case'angular':
//            echo '<script src="js/controller.js"></script>';
//            echo '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>';
//            break;
//        
}    

?>
    

</body>
</html>