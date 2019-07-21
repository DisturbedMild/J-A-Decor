$(function(){
  $('.production__slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1.04,
    slidesToScroll: 1,
    speed: 700,
    infinite:false,
    variableWidth: true,
  });
  $(".production__slider").on('afterChange', function(event, slick, currentSlide){
    $(".production__num").text(currentSlide + 1);
 });

 $('.complex__slider').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 700,
  infinite:false,
  rtl:true,
  variableWidth: true,
});
$(".complex__slider").on('afterChange', function(event, slick, currentSlide){
  $(".complex__num").text(currentSlide + 1);
});
});