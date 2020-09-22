class Form{
    constructor(){
        this.title=createElement("h1");
        this.input=createInput("name");
        this.button=createButton("Play");
        this.greeting=createElement("h2");
        this.reset=createButton("reset");
    }
    display(){
        this.title.html("Car Racing Game"); 
        this.title.position(displayWidth/2,0); 
        this.input.position(displayWidth/2-50,displayHeight/2-80); 
        this.button.position(displayWidth/2-30,displayHeight/2);
        this.reset.position(displayWidth-100,20);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide(); 
           player.name = this.input.value();
            playerCount=playerCount+1
            player.pPosition=playerCount;
            player.updatePlayer();
            player.updatePlayerCount(playerCount);
            this.greeting.html("Hello " + player.name);
            this.greeting.position(130,160);
        })
        this.reset.mousePressed(()=>{
            player.updatePlayerCount(0);
            game.updateGameState(0);
            database.ref('/').child("players").remove();
            Player.updateCarsAtEnd(0);
        })

    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
}