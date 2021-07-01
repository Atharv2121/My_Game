var frog, frogImg;
var slab1, slab1Img, slab2, slab2Img, slab3, slab3Img;
var bg, bgImg;
var ground;
var jump=0;
function preload(){
    bgImg=loadImage("images/bg.jpg");
    frogImg=loadImage("images/frog1.png");
    slab1Img=loadImage("images/slab1.png");
    slab2Img=loadImage("images/slab2.png");
    slab3Img=loadImage("images/slab3.png");
}

function setup(){
    createCanvas(550,640);
    bg= createSprite(275,300);
    bg.addImage(bgImg);
    bg.scale= 0.8;
    //bg.velocityY=-1;
    slab1=createSprite(100,500,75,20);
    slab2=createSprite(200,300,75,20);
    slab3=createSprite(300,100,75,20);
    ground=createSprite(width/2,height,width,20);
    frog=createSprite(280,320,10,10);
    frog.addImage(frogImg);
    frog.scale=1.2
    slab1.addImage(slab1Img);
    slab2.addImage(slab2Img);
    slab3.addImage(slab3Img);

    // for(i=600;i>0;i=i-200){
    //     sprite=createSprite(random(100,450),i,75,20);
    //     var rand=Math.round(random(1,3));
    //     if(rand===1){
    //         sprite.addImage(slab1Img);
    //     }
    //     else if(rand===2){
    //         sprite.addImage(slab1Img);
    //     }
    //     else if(rand===3){
    //         sprite.addImage(slab3Img);
    //     }
    // }
}

function draw(){
 background("white");

 
 if(keyDown("LEFT_ARROW")){
     frog.x-=6
 }
 if(keyDown("RIGHT_ARROW")){
    frog.x+=6
}
    //if(bg.y<100){
    //bg.y=300;
   // }
   slabs1();
   slabs2();
   slabs3();
if(frog.isTouching(ground)){
    frog.velocityY=-19;
}
// if(keyDown("SPACE")){
//     frog.velocityY=-15;
//     for(i=0;i<=100;i+=5){
//         sprite.y=sprite.y+i;
//     }
// }
frog.velocityY+=0.8;
if(frog.velocityY<-5){
    camera.position.y=frog.y;
}
    drawSprites();
    imageMode(CENTER);
    image(slab1Img,ground.x-25,ground.y-10,width+100,25);
}

function slabs1(){
if(frameCount%200===0){
    slab1=createSprite(random(100,450),-50,75,20);
    slab1.addImage(slab1Img);
}
}

function slabs2(){
    if(frameCount%500===0){
        slab2=createSprite(random(100,450),-50,75,20);
        slab2.addImage(slab2Img);
    }
}

function slabs3(){
    if(frameCount%500===0){
        slab3=createSprite(random(100,450),-50,75,20);
        slab3.addImage(slab3Img);
    }
}