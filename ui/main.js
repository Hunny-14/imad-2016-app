var pool = require('pg').Pool;
var config = {
  host: 'db.imad.hasura.io',
  user: 'Hunny-14',
  password: process.env.DB_PASSWORD,
  port : '5432',
  database: 'Hunny-14',
};

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
var pool = new pool(config);
var user_name=document.getElementById("amount").value;
var submit=document.getElementById("sub_btn");
var div = document.getElementById("test");
submit.onclick = function(){
    pool.query("SELECT * From user Where username="+user_name, function(err,result){
       if(err){
           alert(err.toString());
         }
       else{
            if(result.rows.lenght===0)
            {
               alert("error 404");
            }
            else{
                   var data=result.rows[0];
                   div.innerHTML='id= ${data.id}';
                   
                }
           }
}
);
};





