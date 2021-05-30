var prevScrollpos = window.pageYOffset;

window.onscroll = function() {

var currentScrollPos = window.pageYOffset;

  if (prevScrollpos >= 10 ) {
    document.getElementById("sticky-header").style.display = "inline";
  }
  else {
    document.getElementById("sticky-header").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}

