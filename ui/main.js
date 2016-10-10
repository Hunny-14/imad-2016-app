console.log('Loaded!');


//to move the image

var img = document.getElementById('madi');
var marginleft=0;
function moveright ()
{
    marginleft = marginleft + 10;
    img.style.marginLeft = marginleft + 'px';
}
img.onlick = function(){
   var interval = setInterval(moveright, 100)
};