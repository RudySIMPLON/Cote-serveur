var ficheInfo=[];
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use('/javascript', express.static(__dirname + '/javascript'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
 res.sendFile(__dirname + '/html/index.html');
});
app.get('/api/affiche', function(req, res) {
 res.json(ficheInfo);
});
app.post('/api/formulaire', function(req,res) {
 monPerso=req.body;
 monPerso.id=1+ficheInfo.length
 ficheInfo.push(monPerso);
 res.send();
});
app.listen(8080);
      			