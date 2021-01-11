//Create variables here
var dog, happyDog, database, foodS, foodStock, dogI, hdogI,rf = 20;

function preload()
{
  //load images here
  dogI = loadImage("Images/dog1.png");
  hdogI = loadImage("Images/dog2.png");
}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database();

  dog= createSprite(250,250);
  dog.addImage(dogI);
  dog.scale = 0.25;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  



  if(keyWentDown){
   rf = rf-1;

    dog.addImage(hdogI);
  }

  drawSprites();
  text("Food Remaining" + rf,200,40);

  text("Note: press UP-ARROW key to fedd Drago Milk!!",150,20);
stroke(4);
}
function readStock(data) {
  foodS = data.val(); //Value -> data.val
  
}
function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}