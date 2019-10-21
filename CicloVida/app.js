var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
	console.log(`Inicio del programa`);
	setTimeout(()=>{
		console.log('Primer Timeout');
	}, 3000)
	setTimeout(()=>{
		console.log('Segundo Timeout');
	}, 0)
	setTimeout(()=>{
		console.log('Tercer Timeout');
	}, 0)
	console.log(`Fin del programa`);
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

