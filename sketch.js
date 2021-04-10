//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//to create the sprite objects
var engine, world;
var drops = [];
var maxDrops = 100;
var umbrella;
var rand;
var thunder;
var thunderImg1, thunderImg2, thunderImg3, thunderImg4;
var thunderCreatedFrame = 0;
var bat, batAnimation;

//to preload the images
function preload(){

    thunderImg1 = loadImage("1.png");
    thunderImg2 = loadImage("2.png");
    thunderImg3 = loadImage("3.png");
    thunderImg4 = loadImage("4.png");

    batAnimation = loadAnimation("bat1.png", "bat2.png", "bat3.png", "bat4.png", 
                                 "bat5.png", "bat6.png", "bat7.png", "bat8.png", 
                                 "bat9.png", "bat10.png", "bat11.png", "bat12.png");
    
}

function setup(){

    //to create the canvas
    var canvas = createCanvas(400, 700);

    //to create the engine and world
    engine = Engine.create();
    world = engine.world;

    //to create the drops
    for(var i = 0; i < maxDrops; i++){

        drops.push(new Drops(random(0,500), random(0,500)));

     }

     //to create the umbrella
     umbrella = new Umbrella(200, 500);
    
}

function draw(){

    //to give the background
    background(0);

    //to update the engine
    Engine.update(engine);

    //to display and update the drops
    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    //to display the umbrella
    umbrella.display();

    //to create the thunder
    rand = Math.round(random(1,4));
    if(frameCount % 80 === 0){

        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);

        switch(rand){

            case 1: thunder.addImage(thunderImg1);
            break;
            case 2: thunder.addImage(thunderImg2);
            break; 
            case 3: thunder.addImage(thunderImg3);
            break;
            case 4: thunder.addImage(thunderImg4);
            break;
            default: break;

        }

        thunder.scale = (0.3, 0.6);

    }

    //to create the bat
    bat = createSprite(Math.round(random(0, 400)), Math.round(random(0, 400)));
    bat.addAnimation("moving_bat", batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){

        bat.visible = true;
        bat.velocityX = Math.round(random(-4, 4));
        bat.velocityY = Math.round(random(-4, 4));
        bat.scale = 0.4;

    }

    //to destroy the thunder
    if(thunderCreatedFrame + 10 === frameCount && thunder){

        thunder.destroy();

    }

    //to draw the objects
    drawSprites();
    
}   