// giving var to store values
var wall, thickness;
var bullet,speed, weight;

// sets up the function
function setup() {
  createCanvas(1600, 400);
// speed and weight
  speed=random(223,321);
  weight=random(30,52);

// thickness
  thickness=random(22,83);




  // creating bullet
    bullet=createSprite(50, 200, 50,5);  
    bullet.velocityX = speed;
    bullet.shapeColor=color(255);

 
  	
    // creating wall
    wall=createSprite(1200, 200, thickness, height/2);  
    wall.shapeColor=color(230,230,230);
  
}

// draws the function
function draw() {
  background(0);  
  //bullet collision with wall
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		
	}

	

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
	}
	
  }

// drawing the objects
  drawSprites();
 
}

// making collision function
function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
