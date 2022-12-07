var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
    var q = url.parse(res.url, true).querry;
    res.write('teste');
    fs.appendFile(q.nome+'.txt', q.conteudo, function(err){
        if (err) throw err;
    });
    res.end();
}).listen(80);