class Game{
    constructor(){
        
    }
    getGameState(){
        var gameStateref=database.ref('gameState');
        gameStateref.on("value",function(data){
            gameState=data.val();
        })
    }
    updateGameState(state){
        database.ref("/").update({
            gameState:state
        })
    }
    start(){
        if(gameState==0){
            form=new Form();
            player=new Player();
        }
    }
}