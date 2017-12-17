var navBackground = document.getElementsByClassName('navigation')[0],
	fontColor = document.getElementsByClassName('nav-text'),
	activeEl = document.getElementsByClassName('active')[0];

Array.prototype.forEach.call(fontColor, function(el) {
  		el.style.color = "white";
} );

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(scrolled <= 100) {
  	navBackground.classList.remove('nav-white');
  	Array.prototype.forEach.call(fontColor, function(el) {
  		el.style.color = "white";
  	} );
  	activeEl.firstChild.style.backgroundColor = "pink";
  }
  else {
  	navBackground.classList.add('nav-white');
  	Array.prototype.forEach.call(fontColor, function(el) {
  		el.style.color = "rgb(255, 121, 77)";
  	} );
  	activeEl.firstChild.style.backgroundColor = "rgb(184, 184, 148)";
  }
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