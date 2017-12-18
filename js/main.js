var navBackground = document.getElementsByClassName('navigation')[0],
    fontColor = document.getElementsByClassName('nav-text'),
    activeEl = document.getElementsByClassName('active')[0],
    upButton = document.getElementsByClassName('scroll-up')[0];

Array.prototype.forEach.call(fontColor, function(el) {
        el.style.color = "white";
} );

$(".scroll-up").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(scrolled <= 100) {
    navBackground.classList.remove('nav-white');
    Array.prototype.forEach.call(fontColor, function(el) {
        el.style.color = "white";
    } );
    activeEl.firstChild.style.backgroundColor = "pink";

    upButton.classList.add('display-no');
  }
  else {
    navBackground.classList.add('nav-white');
    Array.prototype.forEach.call(fontColor, function(el) {
        // el.style.color = "rgb(255, 121, 77)";
      el.style.color = "rgb(255, 102, 102)";
    } );
    activeEl.firstChild.style.backgroundColor = "rgba(128, 128, 128, 0.5)";

    upButton.classList.remove('display-no');
  }
}

document.querySelector('#footer-date').innerHTML = (new Date())sgetFullYear();