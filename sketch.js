const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var frame,ground;
var divisions;
var particles = [];
var plinkos = [];
var static = [];
function setup() {
	 var canvas = createCanvas(600, 800);
	engine = Engine.create();
  world = engine.world;
  
  
frame = new Frame(300,795,600,12);
frame1 = new Frame(5,400,12,800);
frame2 = new Frame(595,400,12,800);

ground = new Ground(300,780,590,12);

divisions = new Divisions(20,600,12,360);
divisions1 = new Divisions(90,600,12,360);
divisions2 = new Divisions(170,600,12,360);
divisions3 = new Divisions(260,600,12,360);
divisions4 = new Divisions(350,600,12,360);
divisions5 = new Divisions(440,600,12,360);
divisions6 = new Divisions(530,600,12,360);
divisions7 = new Divisions(593,600,12,360);

 for (var j =30; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75,10));
    }

    for (var j =50; j <=570; j=j+50) 
    {
    
       static.push(new Static(j,125,10));
    }

    for (var j =30; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175,10));
    }

    for (var k =50; k <=570; k=k+50) 
    {
    
      static.push(new Static(k,225,10));
    }

    for (var j =30; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275,10));
    }

    for (var k =50; k <=570; k=k+50) 
    {
    
      static.push(new Static(k,325,10));
    }


Engine.run(engine)
  

}


function draw() {
Engine.update(engine);
  background(0);
  frame.display();
  frame1.display();
  frame2.display();

  ground.display();
  divisions.display();
  divisions1.display();
  divisions2.display();
  divisions3.display();
  divisions4.display();
  divisions5.display();
  divisions6.display(); 
   divisions7.display();
  
   if(frameCount%20=== 0){
    particles.push( new Particle(random(35,595),10,10));
   }

   for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var i = 0; i < static.length; i++) {
    static[i].display();
  }

  
}