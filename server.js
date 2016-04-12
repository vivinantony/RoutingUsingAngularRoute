var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));

//app.get('*', function(req, res) {
//    res.sendfile('./app/index.html')
//});

var port = "3000";
app.listen(port);
console.log("Magic happens at " + port);