var nav = document.getElementsByClassName('navigation')[0];

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(scrolled >= 100) nav.classList.remove('visibility-no');
  else nav.classList.add('visibility-no');
  console.log(scrolled + 'px');
}


// function changeSliderImage() {
// 	var images = $('.slider-img');
// 	if (window.innerHeight > window.innerWidth/2) {
// 		images.removeClass('slider-img--horizontal-fullwidth').addClass('slider-img--vertical-fullwidth');
// 	} else {
// 		images.removeClass('slider-img--vertical-fullwidth').addClass('slider-img--horizontal-fullwidth');
// 	}
// }

// $(document).ready(function() {
// 	changeSliderImage();
// 	$(window).on('resize', changeSliderImage);
// });