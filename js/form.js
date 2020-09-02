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
        
    }
}