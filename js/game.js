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
            player.getPlayerCount();
            form.display();
        }
        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);
        carGroup=[car1,car2,car3,car4];
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        text("Game has Started",120,120);
        if(allPlayerInfo!=undefined){
             var arrayIndex=0;
             var x=0;
             var y=0;
            for(var i in allPlayerInfo){
                arrayIndex+=1
                x=x+200;
                y=displayHeight-allPlayerInfo[i].distance;
                carGroup[arrayIndex-1].x=x;
                carGroup[arrayIndex-1].y=y;
                if(arrayIndex==player.pPosition){
                    carGroup[arrayIndex-1].shapeColor="red";
                    camera.position.x=displayWidth/2;
                    camera.position.y=carGroup[arrayIndex-1].y;
                }else{
                    carGroup[arrayIndex-1].shapeColor="black";
                }
            }
        }
        if(keyDown(UP_ARROW) && player.pPosition !==null){
            player.distance=player.distance+20;
            player.updatePlayer();
        }
        drawSprites();
    }
}