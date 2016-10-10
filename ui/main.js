console.log('Loaded!');


//to move the image

var img = document.getElementById('madi');
var marginLeft=0;
function moveright ()
{
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onlick = function(){
   var interval = setInterval(moveright, 100)
};