var color;

function main() {
  //while (true) {
    newColor();
    // change backlit glow to Hello World
  //}
}

function newColor() {
  // generate a random hex color value
  color = "";
  for (i = 1; i <= 6; i++) {
    var number = Math.floor(Math.random() * 16);
    if (number <= 9) {
      color += number;
    } else {
      switch (number) {
        case 10:
          color += "A";
          break;
        case 11:
          color += "B";
          break;
        case 12:
          color += "C";
          break;
        case 13:
          color += "D";
          break;
        case 14:
          color += "E";
          break;
        case 15:
          color += "F";
          break;
        default:
          console.log("Hex Generation Error");
          break;
      }
    }
  }
  console.log(color);
}

//// TweenMax functions
function colorTransition() {
  // TweenMax functionality
}

//// TweenMax functions
function goIn(arrayValues) {
  TweenMax.to(arrayValues, 1, {
    width: "20%",
    opacity: 0.2,
  })
}
