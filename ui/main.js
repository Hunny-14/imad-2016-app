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

var button=document.getElementById("counter");
var count=document.getElementById("count");
var counter=0;
button.onclick=function(){
    var request= new XMLHttpRequest();
    request.open("GET","")
    
  counter+=1;
  count.innerHTML=counter.toString();
}