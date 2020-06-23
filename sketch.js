// Project 21 - Bullets and Walls
// Description: Measure the damage of the bullets when in collision with a wall

// Global variables
var bullet, wall, thickness;
var speed, weight;

function setup() {
  // Canvas size
  createCanvas(1600,400);

  thickness = random(22, 83);

  // Random speed and weight of bullet
  speed = random(223, 321);
  weight = random(30, 52);

  // Create bullet sprite with color white
  bullet = createSprite(50, 200, 60, 20);
  bullet.shapeColor = "white";
  
  // Create wall sprite with color white
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "white";

  // Initial random speed of bullet
  bullet.velocityX = speed;
}

function draw() {
  // Make the background color black
  background(0, 0, 0);  

  // When the collision happens,
  if(hasCollided(bullet, wall)){
    // Stop the bullet
    bullet.velocityX = 0;
    
    // Damage formula
    var damage = 0.5 * weight * speed * speed/ (thickness * thickness * thickness);

    // Make the bullet red if the damge is more than 10
    if(damage > 10){
      wall.shapeColor = color(255, 0, 0);
    }

    // Make the bullet green if the damge is less than 10
    if(damage < 10){
      wall.shapeColor = color(0, 255, 0);
    }

  }
  

  // Draw the sprites
  drawSprites();
}

// function hasCollided has references for bullet and wall with lbullet and lwall respectively
function hasCollided(lbullet, lwall){
  // The x position of the bulles right edge
  bulletRightEdge = lbullet.x + lbullet.width;

  // The x positon of the wall left edge
  wallLeftEdge = lwall.x;

  // When the bullet and wall collided, it is true
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }

  // Otherwise it is false
  else{
    return false;
  }
}