//variables to set up particles output
let noOfParticles;
const particles = []; //comes from constructor object
const colours = ['pink', 'purple', 'lightblue'];

function setup(){
  noOfParticles = 1500;
  createCanvas(window.innerWidth, window.innerHeight);
  //we need to define how many shapes will be drawn and create a loop that will take in a constructor that is created below as the parameter
  for(let i = 0; i < noOfParticles; i++){
    particles[i] = new Particle()//create a new particle for every loop
  }
  //refer to function that will create text
  setTimeout(drawText, 4000);
}

//in p5.js, the draw function must follow the setup function
//it's here we draw the particles based on information plugged in when creating the constructor :)
function draw(){
  particles.forEach(particle => {
    particle.update();
		particle.draw(); //for each particle created, draw it as instructed below
	});
}

// this is a p5.js function
// function windowResized() {
//   resizeCanvas(window.innerWidth, window.innerHeight);
// }

//https://p5js.org/reference/#/p5/text
function drawText(){
  fill('white'); //text colour
  textSize(30);
  stroke('black');
  strokeWeight(5);
  text('#100Daysof100Projects', 50, 200);
  textAlign(CENTER);
}

class Particle{
  constructor(){
    this.x = random(windowWidth); //anywhere across the width
    this.y = random(windowHeight); //along along the height
    this.velX = random(-1, 1);
    this.velY = random(-5, -1);
    this.alpha = 255;
  }
  draw(){
    stroke(random(colours));
    strokeWeight(2)
    line(this.x, this.y, this.x, this.y);
  }
  update(){
		this.x += this.velX;
    this.y += this.velY;
    this.alpha -= 5; //fade out colour
  }
}

//Might be helpful: https://p5js.org/examples/simulate-particle-system.html, https://www.youtube.com/watch?v=UcdigVaIYAk, https://codepen.io/KedeXx/pen/bBNrNY?editors=0010
