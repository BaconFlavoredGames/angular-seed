// Project/Server Information
var projectName = 'Diet Cola';
var currentTime = new Date();
var versionNumber = "0.0.1";

console.log('Project ' + projectName + ' Server Started on ' + currentTime + ' ' + versionNumber);

// Connect Server Information
var connect = require("connect");
var port =  2306;
var app = 'app';

var server = connect()
	.use(connect.static(app))
	.use(function (request, response) {
		response.statusCode = 403;
		response.end("403: Coke Zero! :)");
	})
	.listen(port);
