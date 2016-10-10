var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one': {
    title: 'article-one| Hunny',
    date: 'October 8,2016',
    heading: 'Article one',
    content: `<p>
            Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.

        </p>
         <p>
            Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.

        </p>
         <p>
            Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.Hey this is my first article.

        </p>`
}
}

function createhtml(article){
    
    var htmlfile=`
        <html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
        <title>
           ${article.title}
        </title>
        <meta name="view port" content="width=device-width, initial-scale=1">
    </head>
   <body>
   <div class="container">
    <div>
    <a href="/">Home</a>
    <div class="right">
        ${article.date}
    </div>
    </div>
    <hr/>
    <h1>
        ${article.heading}
    </h1>
   
    <div>
        ${article.content}
    </div>
    </div>
    </body>
    
    
</html>`;

return htmlfile;        
    
}
    
    
    
    

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:urlstorag', function (req, res) {
    var articlename=req.params.urlstorage;
  res.send(createhtml(articles[articlename]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var counter=0;

app.get('/counter',function(req,res){
    counter+=1;
    res.send(counter.tostring);
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
