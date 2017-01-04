var ficheInfo=[

{'nom': 'Durand','prenom': 'Carole','age':32,'sexe': 'F','secret':false},
{'nom': 'Dupond','prenom': 'Jean-Pierre','age':19,'sexe': 'M','secret':false},
{'nom': 'Dupuis','prenom': 'Gérard','age':46,'sexe': 'M','secret':true},
{'nom': 'Michel','prenom': 'Justine','age':22,'sexe': 'F','secret':false},
{'nom': 'Martin','prenom': 'Gertrude','age':56,'sexe': 'F','secret':true},
{'nom': 'Ducro','prenom': 'Patrice','age':27,'sexe': 'M','secret':true},
{'nom': 'Asset','prenom': 'Christophe','age':20,'sexe': 'M','secret':false},
{'nom': 'Buloz','prenom': 'Marie','age':21,'sexe': 'F','secret':true},
{'nom': 'Pouvert','prenom': 'Pierre','age':56,'sexe': 'M','secret':false},
{'nom': 'Pichon','prenom': 'Paulette','age':45,'sexe': 'F','secret':false},
{'nom': 'Thetas','prenom': 'Jeanne','age':58,'sexe': 'F','secret':true}
]
 

var express = require('express');
var app = express();
app.use('/javascript', express.static(__dirname + '/javascript'));
app.use('/lib', express.static(__dirname + '/lib'));
app.get('/', function (req, res) {
 res.sendFile(__dirname + '/html/index.html');
});
app.get('/api/affiche', function(req, res) {
 res.send(ficheInfo);
});
app.listen(8080);
      			