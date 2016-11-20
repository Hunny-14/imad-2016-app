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
              var counter =request.responseText;
              var span=document.getElementById("count");
              span.innerHTML=counter.toString();
        }
       
        
    }

};
};

var submit=document.getElementById("sub_btn");
submit.onclick = function(){
    var amount=document.getElementById("amount").value;
    var request= new XMLHttpRequest();
    request.open("GET","https://www.flipkart.com/search?q=mobile%20phone%20for%20"+amount+"&otracker=start&as-show=on&as=off",true);
    request.send(null);
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE)
    {
        
        if(request.status===200)
        {
            var list=request.responseText;
              var check=document.getElementById("check");
              span.innerHTML=list.toString();
        }
        
       
        
    }

};
};


