var car1, car2, car3, car4;
var wall;
var car1Speed;
var car2Speed;
var car3Speed;
var car4Speed;
var car1Weight;
var car2Weight;
var car3Weight;
var car4Weight;
var car1Grade, car2Grade, car3Grade, car4Grade;
var car1Rat1=0;
var car2Rat2=0;
var car1Deformation, car2Deformation, car3Deformation, car4Deformation;

function setup() {
  createCanvas(1200,800);
  car1 = createSprite(120, 100, 80, 35);
  car1.shapeColor="white";
  car2 = createSprite(120, 300, 80, 35);
  car2.shapeColor="white";
  car3 = createSprite(120, 500, 80, 35);
  car3.shapeColor="white";
  car4 = createSprite(120, 700, 80, 35);
  car4.shapeColor="white";
  wall = createSprite(700, 400, 50, 750);
}

function draw() {
  background(0);
  if(frameCount%100===1){
    car1.velocityX=car1Speed;
    car2.velocityX=car2Speed;
    car3.velocityX=car3Speed;
    car4.velocityX=car4Speed;
  }
  if(frameCount%100===51){
    car1Weight=random(800, 2000)
    car2Weight=random(650, 1670)
    car3Weight=random(1250, 3000)
    car4Weight=random(500, 1200)
    car1Speed=random(50, 90)-car1Weight/200;
    car2Speed=random(70, 113)-car2Weight/200;
    car3Speed=random(55, 87)-car3Weight/200;
    car4Speed=random(40, 70)-car4Weight/200;
    
    car1.x=120;
    car2.x=120;
    car3.x=120;
    car4.x=120;
  }
  car1.velocityX=car1Speed;
  car1.collide(wall);
  car1Deformation=0.5*car1Weight*car1Speed*car1Speed/22500
  
  car2.velocityX=car2Speed;
  car2.collide(wall);
  car2Deformation=0.5*car2Weight*car2Speed*car2Speed/22500
  
  car3.velocityX=car3Speed;
  car3.collide(wall);
  car3Deformation=0.5*car3Weight*car3Speed*car3Speed/22500
  
  car4.velocityX=car4Speed;
  car4.collide(wall);
  car4Deformation=0.5*car4Weight*car4Speed*car4Speed/22500
  
    if(car1Deformation<100&&car1.x>wall.x-66){
      car1.shapeColor="green";
    }else if(car1Deformation>=100&&car1Deformation<180&&car1.x>wall.x-66){
      car1.shapeColor="yellow";
    }else if(car1Deformation>=180&&car1.x>wall.x-66){
      car1.shapeColor="red";
    }else{car1.shapeColor="white";}
    
    if(car2Deformation<100&&car2.x>wall.x-66){
      car2.shapeColor="green";
    }else if(car2Deformation>=100&&car2Deformation<180&&car2.x>wall.x-66){
      car2.shapeColor="yellow";
    }else if(car2Deformation>=180&&car2.x>wall.x-66){
      car2.shapeColor="red";
    }else{car2.shapeColor="white";}
    
    if(car3Deformation<100&&car3.x>wall.x-66){
      car3.shapeColor="green";
    }else if(car3Deformation>=100&&car3Deformation<180&&car1.x>wall.x-66){
      car3.shapeColor="yellow";
    }else if(car3Deformation>=180&&car3.x>wall.x-66){
      car3.shapeColor="red";
    }else{car3.shapeColor="white";}
    
    if(car4Deformation<100&&car4.x>wall.x-66){
      car4.shapeColor="green";
    }else if(car4Deformation>=100&&car4Deformation<180&&car1.x>wall.x-66){
      car4.shapeColor="yellow";
    }else if(car4Deformation>=180&&car4.x>wall.x-66){
      car4.shapeColor="red";
    }else{car4.shapeColor="white";}
  
    
  drawSprites();
}