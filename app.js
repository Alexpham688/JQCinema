 $(function(){
  //adding first slide, adding class active
  $('.slide').first().addClass('active');
  //hide all slides
  $('.slide').hide();
  //show first  slide
  $('.active').show();
    //setInterval
  setInterval(nextSlide,4000);

    //switch to next slide
    function nextSlide() {
      $('.active').removeClass('active').addClass('lastActive');
      if($('.lastActive').is(':last-child')) {
        $('.slide').first().addClass('active');
      } else {
        $('.lastActive').next().addClass('active');
      }
      $('.lastActive').removeClass('lastActive');
      $('.slide').fadeOut(1000);
      $('.active').fadeIn(1000);
    };
    //mouseover seat set background
    $('.seat').on('click', function(){
      $('body').animate({ backgroundColor:'#111'}, 500);
    });
});
