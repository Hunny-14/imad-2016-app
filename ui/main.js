var button=document.getElementById("counter");

button.onclick = function(){
    var request= new XMLHttpRequest();
    request.open("GET","http://hunny-14.imad.hasura-app.io/counter",true);
    request.send(null);
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE)
    {
        
        if(request.status===200)
        {
            
            alert(request.responseText.toString());
              var counter =request.responseText;
              var span=document.getElementById("count");
              span.innerHTML=counter.toString();
        }
       
        
    }

};
};