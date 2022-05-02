// CONSTANTS

var RADIUS = 500;

var KEYS = {
  "q": {color: "#dc0e0e", sound: "sounds/bubbles.mp3"},
  "w": {color: "#24a2a6", sound: "sounds/clay.mp3"},
  "e": {color: "#98d930", sound: "sounds/confetti.mp3"},
  "r": {color: "#db5be2", sound: "sounds/corona.mp3"},
  "t": {color: "#7ea456", sound: "sounds/dotted-spiral.mp3"},
  "y": {color: "#5ca748", sound: "sounds/flash-1.mp3"},
  "u": {color: "#0db4c1", sound: "sounds/flash-2.mp3"},
  "i": {color: "#0f387b", sound: "sounds/flash-3.mp3"},
  "o": {color: "#aa9901", sound: "sounds/glimmer.mp3"},
  "p": {color: "#804d6c", sound: "sounds/moon.mp3"},
  "a": {color: "#d879d9", sound: "sounds/pinwheel.mp3"},
  "s": {color: "#219125", sound: "sounds/piston-1.mp3"},
  "d": {color: "#3cbb74", sound: "sounds/piston-2.mp3"},
  "f": {color: "#9a297c", sound: "sounds/piston-3.mp3"},
  "g": {color: "#0a74d3", sound: "sounds/prism-1.mp3"},
  "h": {color: "#6c24c2", sound: "sounds/prism-2.mp3"},
  "j": {color: "#f3e81c", sound: "sounds/prism-3.mp3"},
  "k": {color: "#1594a3", sound: "sounds/splits.mp3"},
  "l": {color: "#0ccc96", sound: "sounds/squiggle.mp3"},
  "z": {color: "#3f24de", sound: "sounds/strike.mp3"},
  "x": {color: "#b76183", sound: "sounds/suspension.mp3"},
  "c": {color: "#417541", sound: "sounds/timer.mp3"},
  "v": {color: "#5e066d", sound: "sounds/ufo.mp3"},
  "b": {color: "#e336f5", sound: "sounds/veil.mp3"},
  "n": {color: "#92ae22", sound: "sounds/wipe.mp3"},
  "m": {color: "#ed377a", sound: "sounds/zig-zag.mp3"}
};

// VARIABLES

var circles = [];

// EVENTS

function onKeyDown(event) {
  var key = event.key;
  if (KEYS[key]) {
    var soundPath = KEYS[key].sound;
    var color = KEYS[key].color;
    playSoundFromPath(soundPath);
    addRandomCircle(color);
  }
}

function onFrame(event) {
  circles.forEach(function(element) {
    element.fillColor.hue += 1.5;
    element.scale(0.90);
  });
  removeInvisibleCircles();
}

// FUNCTIONS

function addRandomCircle(color) {
  var circle = new Path.Circle(getRandomPointInView(), RADIUS);
  circle.fillColor = color;
  circles.push(circle);
}

function getRandomPointInView() {
  var maxPoint = new Point(view.size.width, view.size.height);
  return maxPoint * Point.random();
}

function playSoundFromPath(path) {
  new Howl({
    urls: [path]
  }).play();
}

function removeInvisibleCircles() {
  if (circles.length > 0) {
    if (circles[0].bounds.width < 1) {
      /* If circle isn't colored black before removing, holding down
      keys for a long time results in tiny dots that remain permanently
      on the canvas */
      circles[0].fillColor = "black";
      circles.shift();
    }
  }
}
