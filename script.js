// CONSTANTS

var RADIUS = 500;

var KEYS = {
  "q": {content: "Q", color: "#dc0e0e", sound: "morse/sounds/q.wav"},
  "w": {content: "W", color: "#24a2a6", sound: "morse/sounds/w.wav"},
  "e": {content: "E", color: "#98d930", sound: "morse/sounds/e.wav"},
  "r": {content: "R", color: "#db5be2", sound: "morse/sounds/r.wav"},
  "t": {content: "T", color: "#7ea456", sound: "morse/sounds/t.wav"},
  "y": {content: "Y", color: "#5ca748", sound: "morse/sounds/y.wav"},
  "u": {content: "U", color: "#0db4c1", sound: "morse/sounds/u.wav"},
  "i": {content: "I", color: "#0f387b", sound: "morse/sounds/i.wav"},
  "o": {content: "O", color: "#aa9901", sound: "morse/sounds/o.wav"},
  "p": {content: "P", color: "#804d6c", sound: "morse/sounds/p.wav"},
  "a": {content: "A", color: "#d879d9", sound: "morse/sounds/a.wav"},
  "s": {content: "S", color: "#219125", sound: "morse/sounds/s.wav"},
  "d": {content: "D", color: "#3cbb74", sound: "morse/sounds/d.wav"},
  "f": {content: "F", color: "#9a297c", sound: "morse/sounds/f.wav"},
  "g": {content: "G", color: "#0a74d3", sound: "morse/sounds/g.wav"},
  "h": {content: "H", color: "#6c24c2", sound: "morse/sounds/h.wav"},
  "j": {content: "J", color: "#f3e81c", sound: "morse/sounds/j.wav"},
  "k": {content: "K", color: "#1594a3", sound: "morse/sounds/k.wav"},
  "l": {content: "L", color: "#0ccc96", sound: "morse/sounds/l.wav"},
  "z": {content: "Z", color: "#3f24de", sound: "morse/sounds/z.wav"},
  "x": {content: "X", color: "#b76183", sound: "morse/sounds/x.wav"},
  "c": {content: "C", color: "#417541", sound: "morse/sounds/c.wav"},
  "v": {content: "V", color: "#5e066d", sound: "morse/sounds/v.wav"},
  "b": {content: "B", color: "#e336f5", sound: "morse/sounds/b.wav"},
  "n": {content: "N", color: "#92ae22", sound: "morse/sounds/n.wav"},
  "m": {content: "M", color: "#ed377a", sound: "morse/sounds/m.wav"},
  "0": {content: "0", color: "#ed377a", sound: "morse/sounds/0.wav"},
  "1": {content: "1", color: "#ed377a", sound: "morse/sounds/1.wav"},
  "2": {content: "2", color: "#ed377a", sound: "morse/sounds/2.wav"},
  "3": {content: "3", color: "#ed377a", sound: "morse/sounds/3.wav"},
  "4": {content: "4", color: "#ed377a", sound: "morse/sounds/4.wav"},
  "5": {content: "5", color: "#ed377a", sound: "morse/sounds/5.wav"},
  "6": {content: "6", color: "#ed377a", sound: "morse/sounds/6.wav"},
  "7": {content: "7", color: "#ed377a", sound: "morse/sounds/7.wav"},
  "8": {content: "8", color: "#ed377a", sound: "morse/sounds/8.wav"},
  "9": {content: "9", color: "#ed377a", sound: "morse/sounds/9.wav"},
  ".": {content: ".", color: "#ed377a", sound: "morse/sounds/..wav"},
  ",": {content: ",", color: "#ed377a", sound: "morse/sounds/,.wav"},
  "?": {content: "?", color: "#ed377a", sound: "morse/sounds/qu.wav"},
  // "space": {content: "_", color: "#ed377a", sound: "sounds/zig-zag.mp3"},
  "!": {content: "!", color: "#ed377a", sound: "morse/sounds/!.wav"}
};

// VARIABLES

var circles = [];

// EVENTS

function onKeyDown(event) {
  var key = event.key;
  var color = "#ffffff";
  var outkey = key;
  if (KEYS[key]) {
    var soundPath = KEYS[key].sound;
    color = KEYS[key].color;
    playSoundFromPath(soundPath);
    outkey = KEYS[key].content;
    //addRandomCircle(color,KEYS[key].content);
    addRandomCircle(color,outkey);
  }
   // addRandomCircle(color,outkey);
}

function onFrame(event) {
  circles.forEach(function(element) {
    element.fillColor.hue += 1.5;
    element.scale(0.97);
  });
  removeInvisibleCircles();
}

// FUNCTIONS

function addRandomCircle(color, incontent) {
  //KATZ var circle = new Path.Circle(getRandomPointInView(), RADIUS);
  var meow = getRandomPointInView();
  var meow2 = getRandomPointInView();
  var circle = new paper.PointText(getRandomPointInView());
	circle.content= incontent;
	circle.justification= 'center';
	circle.fontSize= 500;
  circle.fillColor = color;
  circles.push(circle);
}

function getRandomPointInView() {
  //var maxPoint = new Point(view.size.width, view.size.height);
  var maxPoint = new Point(view.size.width-200, view.size.height-200); // KATZ
  //return maxPoint * Point.random();
  maxPoint *= Point.random();
  return maxPoint + new Point(150,250); //KATZ 
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
