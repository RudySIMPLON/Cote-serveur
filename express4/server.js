var express = require('express');
var app = express();
app.use('/javascript', express.static(__dirname + '/javascript'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/css', express.static(__dirname +'/css'));
app.get('/', function (req, res) {
 res.sendFile(__dirname + '/html/index.html');
});
app.listen(8080);
		