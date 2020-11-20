//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload(){
  //load images here
  dog = loadImg("images/dogImg.png");
  happyDog = loadImg("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(dog,happyDog);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  //add styles here
  text(foodStock, 20,20);

}



