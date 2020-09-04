class Player{
    constructor(){
        
    }
    getPlayerCount(){
        database.ref("playerCount").on("value",function(data){
        playerCount=data.val();
        })
    }
    updatePlayerCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }
    updatePlayerName(namef){
        var playerReference="player"+playerCount;
        database.ref(playerReference).set({
            name:namef
        })
    }

}