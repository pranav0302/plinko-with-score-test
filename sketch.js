const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 
//var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn = 0;

var gameState = "play"

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,10);
wall1 = new Ground(0,400,10,800);
wall2 = new Ground(800,400,10,800);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("500",30,500);
  text("500",750,500);
  text("300",110,500);
  text("300",670,500);
  text("200",190,500);
  text("200",590,500);
  text("100",270,500);
  text("100",510,500);
  text("50",350,500);
  text("50",410,500);
  Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

  if(particle!=null){
     particle.display();

     if(particle.body.position.y > 760){
    if(particle.body.position.x < 80 || particle.body.position.x > 720){
         score = score+500;
         particle = null;
         if(turn>=5)gameState = "end"
  }
      if(particle.body.position.x < 160 && particle.body.position.x > 81 || particle.body.position.x < 719 && particle.body.position.x > 641){
        score = score+200;
        particle = null;
        if(turn>=5)gameState = "end"
  }
    if(particle.body.position.x < 240 && particle.body.position.x > 161 || particle.body.position.x < 640 && particle.body.position.x > 561){
     score = score+200;
     particle = null;
     if(turn>=5)gameState = "end"
  }
   if(particle.body.position.x < 320 && particle.body.position.x > 241 || particle.body.position.x <560 && particle.body.position.x > 480){
    score = score+100;
    particle = null;
    if(turn>=5)gameState = "end"
 }
 if(particle.body.position.x < 479 && particle.body.position.x > 321){
  score = score+50;
  particle = null;
  if(turn>=5)gameState = "end"
}
     }
  }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState!="end"){
     
    turn+=1;
    particle = new Particle(mouseX,10,10,10);
    particle.display();
  }
}