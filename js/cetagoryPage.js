// Filter Shower
$(document).ready(function(){ 
    $("#filter_ul__clicker").click(function(){
    $("#filter_ul__shower").toggleClass("cp_fliter__shower");
});
});

$(document).ready(function(){ 
    $("#filter_prices__clicker").click(function(){
    $("#filter_prices__shower").toggleClass("cp_fliter__shower");
});
});


// Price Range
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 100000,
      values: [ 0, 100000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "৳" + ui.values[ 0 ] + " - ৳" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "৳" + $( "#slider-range" ).slider( "values", 0 ) +
      " - ৳" + $( "#slider-range" ).slider( "values", 1 ) );
} );