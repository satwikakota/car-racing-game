var database;
var gameState, playerCount, game,form, player;
gameState=0;
playerCount=0;
var allPlayerInfo; 
var car1, car2,car3,car4;
var carGroup;
var car1IMG,car2IMG,car3IMG,car4IMG;
var trackIMG;
function preload(){
    car1IMG=loadImage("images/car1.png");
    car2IMG=loadImage("images/car2.png");
    car3IMG=loadImage("images/car3.png");
    car4IMG=loadImage("images/car4.png");
    trackIMG=loadImage("images/track.jpg");
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    database=firebase.database();
    game=new Game();
    game.getGameState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount==4){
        game.updateGameState(1);
    }
    if(gameState==1){
        game.play();
    }
}