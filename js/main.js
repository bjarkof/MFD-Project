jQuery.noConflict();

jQuery('document').ready(function( $ ){

/// RESPONSIVE MENU ///
console.log("hej");
  $('body').on('click', '.menutoggle', function(){
   $('.menu').slideToggle(200);
  });
  $(window).resize(function(){
    var w = $(window).width();
    if(w > 1000 && $('.menu').is(':hidden')){
      $('.menu').removeAttr('style');
    }
  });

/// SLIDER ///

  $('.slider').slick({
    autoplay: false,
    appendArrows: $('.slider'),
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>'
  });

  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        tooltip.text("$" + ui.values[ 0 ]);
        tooltip2.text("$" + ui.values[ 1 ]);
      }
    })

    var tooltip = $('<div class="tooltip" />');
    var tooltip2 = $('<div class="tooltip" />');

    // Sets initial value
    tooltip.text( "$" + $( "#slider-range" ).slider( "values", 0 ));
    $(".ui-slider-handle:first-of-type").prepend(tooltip);
    tooltip2.text( "$" + $( "#slider-range" ).slider( "values", 1 ));
    $(".ui-slider-handle:last-of-type").prepend(tooltip2);

  });

/// PRODUCT GALLERY ///


/// TABS ///

  $( function() {
    $( "#tabs" ).tabs({
      hide: 200,
      show: 500
    });
  } );

/// TESTING ///



});
