var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600,200);
  
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crie um sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage); // add imagem de solo
  ground.x = ground.width /2; // fazendo a imagem se repetir
  ground.velocityX = -4; // fazendo o chão se mover ao contrario do Trex
  
  //crie um solo invisível
  invisibleGround = createSprite(200,190,400,10); // criando um solo invisivel para o Trex ficar parecendo q esta correndo no solo
  invisibleGround.visible = false; // colocamos insivel para 
  
}

function draw() {
  //definir cor de fundo
  background(220);
  
  console.log(trex.y)
  
  //pular quando tecla espaço for pressionada
  if(keyDown("space") && trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  //adicionar gravidade
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);
  
  drawSprites();
}