console.log('Loaded!');


//to move the image

var pic=document.getElementById("img");
var marginleft=0;
function moveright()
{
    marginleft=marginleft + 10;
    pic.marginleft=marginleft+"px";
}
pic.onlick=function(){
   var interval= setInterval(moverright,100)
}