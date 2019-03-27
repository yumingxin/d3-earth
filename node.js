var http = require('http');


var server = http.createServer(function (req, res) {
    //如果你发一个GET到http://127.0.0.1:9000/test
    var url_info = require('url').parse(req.url, true);
    //检查是不是给/test的request
    console.log(req.method);
    if(url_info.pathname === '/test'){
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"
        });
        var rows = {name:2}

        res.end(JSON.stringify(rows));

    }
});
server.listen(9000, '127.0.0.1');

console.log('listening on port  9000');