$(document).ready(function(){

  /* одинаковая высота у .product */
  var maxHeight = 0;
  $(".product").each(function(){
     if ( $(this).height() > maxHeight ) 
     {
      maxHeight = $(this).height();
     }
  });
  $(".product").height(maxHeight);


  /* плавный скролл */
  $('.page-content__up').click(function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0},500);
      return false;
  });

  /* изменение иконки сортировки */
  $('.sort__link').click(function(e) {
      e.preventDefault();
      $(this).toggleClass('asc desc');
  });  

    /* isotope сортировка */  
  var container = $('.page-content__list');

    // sorting
    $('#sort .sort__link').click(function(){

      if ( !$(this).hasClass('sort__link--sorted') ) {
          $(this).parents('#sort').find('.sort__link--sorted').removeClass('sort__link--sorted');
          $(this).addClass('sort__link--sorted');
        }
      sortDate = $(this).attr('data-sort-by');
    asc = $(this).hasClass('asc');
      $(container).isotope({ 
        sortBy : sortDate,
        sortAscending : asc
      });
      return false;
    });
    
    $(function(){
      
      $(container).isotope({
        itemSelector : '.product',
        layoutMode: 'fitRows',       
        getSortData : {
          date: '.isotope-date parseInt',
          ready: '.isotope-ready parseInt',
        },
        sortBy : 'date'
      });
    });

});