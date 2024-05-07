var numofdrum =document.querySelectorAll(".drum").length;

for (var i=0;i<numofdrum;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttoninner=this.innerHTML;
        switch(buttoninner){
            case"w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
                default:
            
            case"a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            
            case"s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            
            case"d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            
            // default:
        }
    });
}
