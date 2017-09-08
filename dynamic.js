var color = "#ff0000";

function newColor() {
  // generate the next color in the rainbow
  switch (color) {
    case "#ff0000": // red
      color = "#ff8000";
      break;
    case "#ff8000": // orange
      color = "#ffff00";
      break;
    case "#ffff00": // yellow
      color = "#00ff00";
      break;
    case "#00ff00": // green
      color = "#00ffff";
      break;
    case "#00ffff": // blue
      color = "#0000ff";
      break;
    case "#0000ff": // indigo
      color = "#8000ff";
      break;
    case "#8000ff": // violet
      color = "#ff00ff";
      break;
    case "#ff00ff": // red
      color = "#ff0000";
      break;
    default:
      console.log("Rainbow Generation Error");
  }
  colorTransition();
}

//// TweenMax functions
function colorTransition() {
  TweenMax.to(".helloWorld", 1.5, {
    ease: Linear.easeNone,
    textShadow: function() {
      var shadow = "0em 0em 20px white,\n" +
                   "0em 0em 40px white,\n" +
                   "0em 0em 40px white,\n" +
                   "0em 0em 20px white,\n" +
                   "0em 0em 60px " + color + ",\n" +
                   "0em 0em 80px " + color + ",\n" +
                   "0em 0em 60px " + color + ",\n" +
                   "0em 0em 60px " + color;
      return shadow;
    }
  })
  window.setTimeout(newColor, 750)
};
