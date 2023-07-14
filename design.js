function ChangeImage(){
    var pic = document.getElementById("bulb");
    if(pic.src.match("on")){
        console.log("on");
        pic.src= "off img 1.jpg";
    }
    else{
        console.log("off");
        pic.src= "bulb on 1.jpg";
    }
}