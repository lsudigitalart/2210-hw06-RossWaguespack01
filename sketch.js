let imgPlaceX, imgPlaceY, pressed, imgDinner, imgDinnerScalar, imgDinnerSize, imgCake, imgCakeScalar, imgCakeSize, imgPooh, imgPoohScalar, imgPoohSize;

function preload() {
  imgDinner = loadImage("Dinner.gif");
  imgCake = loadImage("Cake.gif");
  imgPooh = loadImage("Pooh.gif")
  pressed = false;
}



function setup() {
  createCanvas(400, 400);
  //background(260);
  img = loadImage('birthday.jpg');
  imgDinnerScalar = 4096 / 2731;
  imgCakeScalar = 500/375;
  imgPoohScalar = 334/184;
  imgDinnerSize = 290;
  imgCakeSize = 130;
  imgPoohSize = 350;
}

function draw() {
  image(img, -150, -220)
  image(imgDinner, 0, 220, imgDinnerSize, imgDinnerSize / imgDinnerScalar);
  if (pressed) {
    image(imgPooh,0, 220, imgPoohSize, imgPoohSize/imgPoohScalar);
    image(imgCake, imgPlaceX, imgPlaceY, imgCakeSize, imgCakeSize / imgCakeScalar);
  }
}
function mousePressed() {
  imgPlaceX = mouseX;
  imgPlaceY = mouseY;
  pressed = true;
  print("where's my crumbl cookie?")
}