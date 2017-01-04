var ficheInfo=[
 {
  id:1,
  nom:"Depuis",
  prenom:"Jean"
 },
 {
  id:2,
  nom:"Durand",
  prenom:"Christian"
 },
 {
  id:3,
  nom:"Martin",
  prenom:"Michel"
 }
]

var express = require('express');
var app = express();
app.use('/javascript', express.static(__dirname + '/javascript'));
app.use('/lib', express.static(__dirname + '/lib'));
app.get('/', function (req, res) {
 res.sendFile(__dirname + '/html/index.html');
});
app.get('/api/affiche', function(req, res) {
 res.json(ficheInfo);
});
app.listen(8080);
			