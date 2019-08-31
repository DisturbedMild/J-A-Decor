$(function(){
  $('.production__slider').slick({
    lazyLoad: 'progressive',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    infinite:false,
    variableWidth: true,
    responsive: [
      { 
        breakpoint: 1280,
        settings: {
          variableWidth:false,
          centerPadding: '40px',
        }
      }
    ]
  });
  $(".production__slider").on('afterChange', function(event, slick, currentSlide){
    $(".production__num").text(currentSlide + 1);
 });

 $('.complex__slider').slick({
 lazyLoad: 'progressive',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    infinite:false,
    variableWidth: true,
    responsive: [
      { 
        breakpoint: 1280,
        settings: {
          variableWidth:false,
          centerPadding: '40px',
        }
      }
    ]
});
$(".complex__slider").on('afterChange', function(event, slick, currentSlide){
  $(".complex__num").text(currentSlide + 1);
});
});