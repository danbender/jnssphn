$(document).ready(function(){
  console.log('hi');

  var flickityOptions = {
    autoPlay: true,
    arrowShape: {
      x0: 10,
      x1: 60, y1: 50,
      x2: 65, y2: 45,
      x3: 20
    },
    cellAlign: 'center',
    contain: true,
    dragThreshold: 10,
    wrapAround: true
  };

  $('.home__slider').flickity(flickityOptions);
  $('.profil__slider').flickity(flickityOptions);
});
