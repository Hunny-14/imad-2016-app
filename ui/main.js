console.log('Loaded!');


//to move the image

var pic=document.getElementById("img");
var marginleft=0;
function moveright()
{
    marginleft+=10;
    pic.marginleft=marginleft;
}
pic.onlick=function(){
    setInterval(moverright,100)
}