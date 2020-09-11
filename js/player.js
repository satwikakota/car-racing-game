class Player{
    constructor(){
        this.name=null;
        this.distance=0;
        this.pPosition=0;
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
    updatePlayer(){
        var playerReference="players/player"+playerCount;
        database.ref(playerReference).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo(){
        database.ref("players").on("value",function(data){
            allPlayerInfo=data.val();
        })
    }

}