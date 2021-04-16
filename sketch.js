var cat1,cat2,cat3,cat

var mouse1,mouse2,mouse3,mouse
var bg


function preload() {
    bg=loadImage("images/garden.png")

    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat3-loadAnimation("images/cat4.png")


    mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3-loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.scale=0.2

    cat.addAnimation("jerry1",cat1)
 
    mouse=createSprite(200,600);
    mouse.scale=0.15
    mouse.addAnimation("tom1",mouse1)
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if (mouse.x-cat.x<(mouse.width-cat.width)/2){
        mouse.velocityX=0
        mouse.addAnimation("mou3",mouse3)
        mouse.x=300
        mouse.scale=0.2
        mouse.changeAnimation("mou3")

        cat.addAnimation("tom3",cat3)
        cat.scale=0.15
        cat.changeAnimation("tom3")

    }





    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW){
cat.velocityx=-5
cat.addAnimation("tom2",cat2)
cat.changeAnimation("tom2")


mouse.addAnimation("jerry2",mouse2)
mouse.frameDelay=25
mouse.changeAnimation("jerry2")


}

}
