

var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser')
var fs = require('fs');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());


var route = require("./route.js");
app.use('/', route);


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


