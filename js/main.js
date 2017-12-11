$(document).ready(function() {
  // alert("main Js linked")
  var sizeTheOverlays = function() {
    $(".overlay, .overlay-carousel").resize().each(function() {
    var h = $(this).parent().outerHeight();
    var w = $(this).parent().outerWidth();
    $(this).css("height", h);
    $(this).css("width", w);
  });
};
sizeTheOverlays();
var width = $(window).width();
$(window).resize(function(){
   if($(this).width() != width){
      width = $(this).width();
      sizeTheOverlays();
   }
});
/*For the samrt cart*/
$('#smartcart').smartCart();
/*Need to figure out how to remove and clear the checkout form*/
});
