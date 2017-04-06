$(document).ready(function(){
  console.log('hi');

  var flickityOptions = {
    autoPlay: true,
    arrowShape: {
      x0: 10,
      x1: 60, y1: 50,
      x2: 60, y2: 45,
      x3: 15
    },
    cellAlign: 'left',
    contain: true,
    dragThreshold: 10,
    imagesLoaded: true,
    pageDots: false,
    wrapAround: true
  };

  $('.home__slider').flickity(flickityOptions);
  $('.profil__slider').flickity(flickityOptions);
});
