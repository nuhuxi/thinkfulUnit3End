/**
 * Created by mark07 on 6/3/15.
 */

require('./db/connect');
var express = require('express');
var bodyParser = require('body-parser');
var itemRoutes = require('./routes/item');

var jsonParser = bodyParser.json();
var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.delete('/items/:item', jsonParser, function(req, res) {
  console.log("The id is: " + req.body[0].id);

});

app.use('/', itemRoutes);
app.use('*', function(req, res) {
  res.status(404).json({ message: 'Not Found' });
});

app.listen(8080, function() {
  console.log('Listening on port 8080');
});

exports.app = app;