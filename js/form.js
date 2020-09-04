class Form{
    constructor(){

    }
    display(){
        var title=createElement("h1");
        title.html("Car Racing Game"); 
        title.position(130,0); 
        var input=createInput("name");
        input.position(130,160); 
        var button=createButton("Play");
        button.position(230,200);
        var greeting=createElement("h2");
        button.mousePressed(function(){
            input.hide();
            button.hide(); 
            var name = input.value();
            playerCount++
            player.updatePlayerName(name);
            player.updatePlayerCount(playerCount);
            greeting.html("Hello " + name);
            greeting.position(130,160);
        })

    }
}