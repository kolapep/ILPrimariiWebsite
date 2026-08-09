//INSTRUCTIONS
//Left Click (mouse) to Randomize shape and color
//Press S to change to a random color
//Hold A and drag to manually change size

//Body Varible - start
let screenHeight = 250;
let screenWidth = 250;

// Canvas Variable
let VAR = 100; 

function setup() {
  createCanvas(VAR, VAR);
  frameRate(100);
  TheColor = color(179, 255, 153);
  
    // Create a canvas that fills the screen dynamically
  let canvas = createCanvas(200, 200);
  
  // Bind the canvas directly to your HTML container
  canvas.parent('sketch-parent');
}

// Optional: Automatically resize the sketch if the browser window changes
function windowResized() {
  resizeCanvas(200, 200);
}

function draw() {
  background(38, 38, 38);
  
//Variables for colored screen size - directly dependent on body
  colorHeight = screenHeight-25
  colorWidth = screenWidth-25
  
//Variables for Face position - Moves face with mouse slightly IF mouse is in range of the canvas (see credit below)
  faceHeight = height/2 + mouseX/20
  faceWidth = width/2 + mouseY/20
  
  //Main body
  rectMode(CENTER);
  fill (230, 230, 230);
  strokeWeight(4);
  rect(width/2, height/2, screenHeight, screenWidth, 20);
 
  //Screen (Changes Colors)
  rectMode(CENTER);
  push();
  fill (TheColor);  //Color Randomization
  strokeWeight(2);
  rect(width/2, height/2, colorHeight, colorWidth, 20); //Last value smooths out corners
  pop();
 
  //Eye 1
  ellipseMode(CENTER);
  fill(0,0,0);
  circle(faceHeight+colorHeight/3, faceWidth-10, colorHeight/10);
  
  //Eye 2
  ellipseMode(CENTER);
  fill(0,0,0);
  circle(faceHeight-colorHeight/3, faceWidth-10, colorHeight/10);
  
  //Mouth
  rectMode(CENTER);
  fill(0,0,0);
  rect(faceHeight, faceWidth, colorHeight/4, colorWidth/30, 20);
  
  //Code refrenced from Mac087: If the mouse is in range of the canvas AND if "A" is down, then change size relative to mouse position
  if (mouseX <= VAR && mouseY <= VAR && keyIsDown (65)) 
  {
  screenHeight = mouseX-60;
  screenWidth = mouseY-60; //Size
  } 
  
}
  
//Activates on mouse click, randomizes Everything once (Size and Color)
function mousePressed() { 

 
  screenHeight = random(75, 400);
  screenWidth = random(75, 400);  //Size

  TheColor = color (random(0,200), (255), random(0,200));   //Color
  
}

//Activate on "S", Randomizes color (colored screen) once: shades of green
function keyPressed()
{
  if (keyCode == 83) 
  {
  TheColor = color (random(0,200), (255), random(0,200));   //Color
  }
  
}
