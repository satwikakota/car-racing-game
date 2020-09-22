class Player{
    constructor(){
        this.name=null;
        this.distance=0;
        this.pPosition=0;
        this.rank=null;
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
        var playerReference="players/player"+this.pPosition;
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
    getCarsAtEnd(){
        database.ref("carsReached").on("value",function(data){
            carsReached=data.val();
        })
    }
    static updateCarsAtEnd(count){
        database.ref("/").update({
            carsReached:count
        })
    }

}