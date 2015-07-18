var express = require('express');
var bodyParser = require('body-parser');
var util = require('util');


var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 


app.use(express.static(__dirname + '/js'));
app.set('view engine', 'jade')

app.get('/', function(req, res) {
 res.send('great awesome 1');
});




app.listen(3030);
