var database;
var gameState, playerCount, game,form, player;
gameState=0;
playerCount=0;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    game=new Game();
    game.getGameState();
    game.start();
}

function draw(){
    background("white");

}