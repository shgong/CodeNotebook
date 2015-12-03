var express = require('express');
var bodyParser = require('body-parser')

var fs = require('fs');


var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
})
.get('/data',function(req,res){
    res.sendFile(__dirname+'/public/data.json');
})
.get('/add',function(req,res){
    console.log('HTTP/GET /add');
    res.render('pages/add');
});


app.post('/add', function(req, res) {
    console.log('HTTP/POST /add');
    console.log(req.body);

    var obj;
    fs.readFile(__dirname+'/public/data.json', 'utf8', function (err, data) {
      if (err) throw err;
      obj = JSON.parse(data);
      obj.data.push(req.body);
      var str = JSON.stringify(obj);
      fs.writeFile(__dirname+'/public/data.json', str, function (err) {
        if (err) throw err;
        console.log('Json Updated.');
      });

      res.status(200).send('OK');

    });

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


