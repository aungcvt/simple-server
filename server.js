/**
 *	Simple server with express
 */

var express = require('express');
var app = express();
var path = require('path');

// root dir to route all files
app.use('/', express.static(_dirname+ '/'));

// init index.html
app.get('/', function(req, res) {
	res.sendFile(path.join(_dirname + '/index.html'));
});

var server = app.listen(8888, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('You website is running at http://%s:%s', host, port);
});
