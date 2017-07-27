var http = require('http');
var fs = require('fs');

arquivo = {};

var server = http.createServer(function (req, res) {

    res.setHeader('Acess-Control-Allow-Origin', '*');

    if (req.url == "/index.html") {
        fs.readFile(__dirname + '/index.html', function (err, html) {
            res.writeHeader(200, { 'Content-Type': 'text/html' });
            res.write(html);
            res.end();
        });
    }

    if (req.url == "/app.js") {
        fs.readFile(__dirname + '/app.js', function (err, html) {
            res.writeHeader(200, { 'Content-Type': 'text/html' });
            res.write(html);
            res.end();
        });
    }

    if (req.url == "/list.html") {
        fs.readFile(__dirname + '/list.html', function (err, html) {
            res.writeHeader(200, { 'Content-Type': 'text/html' });
            res.write(html);
            res.end();
        });
    }
    
    res.end();

});
server.listen(3000, function () {
    console.log('Executando Servidor HTTP');
});