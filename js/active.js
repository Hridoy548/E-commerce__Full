// ===========================Hamburger===========================
function hamburger() {
    const menuBar = document.querySelector('.toggle');
    menuBar.classList.toggle('active');
};


// Shopping Cart */
$("#sc_activer").click(function(e){
    e.preventDefault() ;
    $("#shopping_cart__id").addClass('sc_active') ;

});
$("#shopping_close").click(function(e){
    e.preventDefault() ;
    $("#shopping_cart__id").removeClass('sc_active') ;
});


$("#sc_activer__two").click(function(e){
    e.preventDefault() ;
    $("#shopping_cart__id").addClass('sc_active') ;

});
$("#shopping_close").click(function(e){
    e.preventDefault() ;
    $("#shopping_cart__id").removeClass('sc_active') ;
});

$("#sc_activer__tree").click(function(e){
    e.preventDefault() ;
    $("#shopping_cart__id").addClass('sc_active') ;

});
$("#shopping_close").click(function(e){
    e.preventDefault() ;
    $("#shopping_cart__id").removeClass('sc_active') ;
});

$("#sc_activer__four").click(function(e){
    e.preventDefault() ;
    $("#shopping_cart__id").addClass('sc_active') ;

});
$("#shopping_close").click(function(e){
    e.preventDefault() ;
    $("#shopping_cart__id").removeClass('sc_active') ;
});



// Cuppon Form
$(document).ready(function(){ 
    $("#cuppon_form__opener").click(function(){
    $("#cuppon_form__open").toggleClass("cuppon_form");
});
});



// Quick View 
$("#product_details__clicker").click(function(e){
    e.preventDefault() ;
    $("#product_details__id").addClass('product_details__shower') ;
});

$("#product_details__closer").click(function(e){
    e.preventDefault() ;
    $("#product_details__id").removeClass('product_details__shower') ;
});
$("#product_details__closer2").click(function(e){
    e.preventDefault() ;
    $("#product_details__id").removeClass('product_details__shower') ;
});
$("#product_details__closer3").click(function(e){
    e.preventDefault() ;
    $("#product_details__id").removeClass('product_details__shower') ;
});


//Stock Out
$("#product_details__clicker2").click(function(e){
    e.preventDefault() ;
    $("#product_details__id2").addClass('product_details__shower') ;
});

$("#product_details__closer21").click(function(e){
    e.preventDefault() ;
    $("#product_details__id2").removeClass('product_details__shower') ;
});
$("#product_details__closer22").click(function(e){
    e.preventDefault() ;
    $("#product_details__id2").removeClass('product_details__shower') ;
});
$("#product_details__closer32").click(function(e){
    e.preventDefault() ;
    $("#product_details__id2").removeClass('product_details__shower') ;
});



//Search Result
$("#serch_result__clicker").click(function(e){
    e.preventDefault() ;
    $("#search_result__id").addClass('search_result__gotter') ;

});
$("#search_result__disable").click(function(e){
    e.preventDefault() ;
    $("#search_result__id").removeClass('search_result__gotter') ;
});