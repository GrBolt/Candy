var cart = {}; //корзина
$('document').ready(function(){
 
    var Shop = new eShop();
    Shop.checkCart();
    Shop.LoadItem();
    Shop.showMiniCart();
});
 function eShop (){
    this.LoadItem = function(){
         $('button.add').on('click', this.addToCart);
         $.getJSON('goods.json', function(data){
         var out = '';
         for(var key in data){
            out+='<div class ="col-md-4 item">';
            out+='<h3>'+data[key]['name']+'</h3>';
            out+='<p>Цена: '+data[key]['cost']+'</p>';
            out+='<img src="' +data[key]['image']+'"></img>';
            out+= '<button class= "add" data-art="'+key+'">Купить</button>';
            out+='</div>';
            }
        $('.items').html(out);  
        })
    }
    this.addToCart = function() {
        var articul = $(this).attr('data-art');
        if (cart[articul] != undefined){
            cart[articul]++
        }
         else {
             cart[articul] = 1;
         }
        localStorage.setItem('cart', JSON.stringify(cart));
        this.showMiniCart;
    }
    this.checkCart = function (){
        if( localStorage.getItem('cart') != null){
        cart = JSON.parse (localStorage.getItem('cart'));
        }
    }
    this.showMiniCart = function (){
        var out = '';
        for(var w in cart){
            out += w + '---'+cart[w]+'<br>';
            }
        //$('#minicart').html(out);
    }
 }

     