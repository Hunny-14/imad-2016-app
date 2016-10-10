var button=document.getElementById("counter");

button.onclick = function(){
    var request= new XMLHttpRequest();
    request.open("GET","http://hunny-14.imad.hasura-app.io/counter",true);
    request.send(null);
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE)
    {
        alert("request made");
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
    else{
        alert("processing");
    }
     

};
};