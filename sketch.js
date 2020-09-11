var database;
var gameState, playerCount, game,form, player;
gameState=0;
playerCount=0;
var allPlayerInfo; 
var car1, car2,car3,car4;
var carGroup;
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