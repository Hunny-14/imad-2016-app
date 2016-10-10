console.log('Loaded!');


//to move the image

var img = document.getElementById('madi');
var content = document.getElementById('text');
var marginLeft=0;
function moveright ()
{
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function(){
    var interval = setInterval(moveright, 50);
}
marginLeft=0;

content.onclick = function(){
    var interval = setInterval(moveright, 50);
}

var counter=document.getElementById("counter");
var count;
counter.onclick=function(){
  counter+=1;
  span.innerHTML=counter;
}