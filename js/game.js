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
    async start(){
        if(gameState==0){
            form=new Form();
            player=new Player();
            var playerCountRef=await database.ref("playerCount").once("value"); 
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getPlayerCount();
            }
            form.display();
        }
        car1=createSprite(100,200);
        car1.addImage("carimage",car1IMG);
        car2=createSprite(300,200);
        car2.addImage("car2image",car2IMG);
        car3=createSprite(500,200);
        car3.addImage("car3image",car3IMG);
        car4=createSprite(700,200);
        car4.addImage("car4image",car4IMG);
        carGroup=[car1,car2,car3,car4];
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        text("Game has Started",120,120);
        if(allPlayerInfo!=undefined){
            background("orange");
            image(trackIMG,0,-displayHeight*4,displayWidth,displayHeight*5);
             var arrayIndex=0;
             var x=150;
             var y=0;
            for(var i in allPlayerInfo){
                arrayIndex=arrayIndex+1
                x=x+200;
                y=displayHeight-allPlayerInfo[i].distance;
                carGroup[arrayIndex-1].x=x;
                carGroup[arrayIndex-1].y=y;
                if(arrayIndex==player.pPosition){
                    carGroup[arrayIndex-1].shapeColor="red";
                    camera.position.x=displayWidth/2;
                    camera.position.y=carGroup[arrayIndex-1].y;
                    console.log(arrayIndex);
                }else{
                    carGroup[arrayIndex-1].shapeColor="black";
                }
            }
            if(keyDown(UP_ARROW) && player.pPosition !==null){
                player.distance=player.distance+20;
                console.log(player.distance);
                player.updatePlayer();
            }
        }
        drawSprites();
    }
}