const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas, engine, world;

var backgroundImg, getBackgroundIMG, ground;

var box, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19;

var ball, rope;

function preload() {
    getBackgroundIMG();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20);

    box = new Box(900,100,70,70);
    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(800,100,70,70);
    box7 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11 = new Box(800,100,70,70);
    //box12 = new Box(600,100,70,70);
    //box13 = new Box(600,100,70,70);
    box14 = new Box(600,100,70,70);
    box15 = new Box(600,100,70,70);
    box16 = new Box(600,100,70,70);
    box17 = new Box(600,100,70,70);
    box18 = new Box(600,100,70,70);
    box19 = new Box(600,100,70,70);

    ball = new Ball(200,200,80,80);
    rope = new Rope(ball.body, {x:300, y:10});
}

function draw(){
    if (backgroundImg){
        background(backgroundImg)
    }
    Engine.update(engine);
    ground.display();
    box.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    //box12.display();
    //box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();

    ball.display();
    rope.display();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


//function mouseReleased(){
//    rope.fly();
//    gameState = "launched";
//}

async function getBackgroundIMG(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime
    var hora = datetime.slice(11,13)
    console.log(hora);
    if (hora>=06 && hora<=19){
        bg = "sprites/bg.png"

    }
    else {
        bg = "sprites/bg2.jpg"
    
    }

    backgroundImg = loadImage(bg);
}