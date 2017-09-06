var color = "#ff0000";

function main() {
  //while (true) { commented to avoid a forever loop before ready
    newColor();
    // change backlit glow to Hello World
  //}
}

function newColor() {
  // generate the next color in the rainbow
  switch (color) {
    case "#ff0000":
      color = "#ff8000";
      break;
    case "#ff8000":
      color = "#ffff00";
      break;
    case "#ffff00":
      color = "#00ff00";
      break;
    case "#00ff00":
      color = "#00ffff";
      break;
    case "00ffff":
      color = "0000ff";
      break;
    case "0000ff":
      color = "8000ff";
      break;
    case "#8000ff":
      color = "#ff00ff";
      break;
    case "#ff00ff":
      color = "#ff0000";
      break;
    default:
      console.log("Rainbow Generation Error");
  console.log(color);
  }
}

//// TweenMax functions
function colorTransition() {
  // TweenMax functionality
}
