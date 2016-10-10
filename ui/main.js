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

button.onclick=function(){
    var request= new XMLHttpRequest();
    request.open("GET","http://hunny-14.imad.hasura-app.io/counter",true);
    request.send(null);
    request.onreadystatechange=function(){
        if(request.onreadystatechange===XMLHttpRequest.DONE)
    {
        if(request.status==200)
        {
              var counter =request.responseText;
              var span=document.getElementById("count");
              span.innerHTML=counter.toString();
        }
        
    }
    

}
}