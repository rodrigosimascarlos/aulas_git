var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = "ano: "+ q.ano +"mês: "+ q.mes;
    res.end(txt);
}).listen(80);