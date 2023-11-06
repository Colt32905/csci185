const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";
const elem = document.querySelector("#my_image");

function turnOnOff() {
    //if the image's src is the same as imgOn then we will turn the lightbulb off.
    //else turn it on
    const elem = document.querySelector("#my_image");
if(elem.src===imgOn){
    elem.src=imgOff;
}else{
    elem.src=imgOn;
}
    //elem.src=imgOn;
}
