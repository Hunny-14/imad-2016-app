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
   
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE)
    {
        if(request.status===200)
        {
            alert("request status is 200 ");
            alert(request.responseText.toString());
              var counter =request.responseText;
              var span=document.getElementById("count");
              span.innerHTML=counter.toString();
        }
        else{
            alert("request state is 500");
        }
        
    }
     request.open("GET","http://hunny-14.imad.hasura-app.io/counter",true);
    request.send(null);
    

};
};