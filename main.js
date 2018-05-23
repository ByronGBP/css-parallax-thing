
var offsetY = 0;
var offsetPosition = 0;
var img = null;
var img2 = null;

window.onload = function() {

  img = document.getElementById("img-one");
  img2 = document.getElementById("img-two");

  window.addEventListener('scroll',deepEffect);

};

function deepEffect(e) {
  var currentOffset = window.pageYOffset;
  var oldPosition = img.style.backgroundPosition;
  var newPosition = getNewPosition(currentOffset);

  if (offsetY < currentOffset) {

    console.log(currentOffset);
    img.style.backgroundPosition = "50% -" + newPosition + "px";
    img2.style.backgroundPosition = "50% -" + newPosition + "px";

  }
  else {
    console.log(currentOffset);
    img.style.backgroundPosition = "50% +" + newPosition+ "px";
    img2.style.backgroundPosition = "50% +" + newPosition + "px";
  }

}

function getNewPosition(pos) {

  if (pos > 800) {

    return (1.6 * pos / 6) + "";

  }
  return (0.8 * pos / 3) + "";

}
