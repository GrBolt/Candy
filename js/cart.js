var cart = {};//корзина
$.getJSON('goods.json', function(data){
    var goods = data;
    checkCart();
    showCart();    
    function showCart(){
     var out = '';
        for(var key in cart){
            out+='<div class ="item-in-cart">';
            out += '<button class="delete" data-art="'+key+'">x</button></br>';
            out += '<p>'+goods[key].name+'</p>';
            out += '<img src="'+goods[key].image+'"></br>';
            out += '<p>'+cart[key]+'</p>';
            out += '<button class="minus" data-art="'+key+'">-</button>';
            out += '<button class="plus" data-art="'+key+'">+</button></br>';
            out += '<p>'+cart[key]*goods[key].cost+' гривен</p>';
            out +='<br>';
            out+='</div>';
        }
    $('#cartmine').html(out);
    $('.plus').on('click', plusGoods);
    $('.minus').on('click', minusGoods);
    $('.delete').on('click', deleteGoods);
    }
    function plusGoods (){
       var articul = $(this).attr('data-art');
        cart[articul]++;
        savetoLocalS();
        showCart();
    }
    function minusGoods (){
       var articul = $(this).attr('data-art');
          if(cart[articul] == 0){
              delete cart[articul];
          }
          else{
        cart[articul]--;
          }
        savetoLocalS();
        showCart();
    }
    function deleteGoods (){
        var articul = $(this).attr('data-art');
        delete cart[articul];
        savetoLocalS();
        showCart();
    }
    function savetoLocalS(){
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});

function checkCart(){
    //проверка корзины
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}