const http = require('http');

var port = process.env.PORT || 8000

const fs = require('fs');
const url = require('url');
var count = 0;

const server = http.createServer((req, res) => {
    var request = url.parse(req.url, true);
    var action = request.pathname;

    var hostname = req.headers.hostname;
    console.log(hostname)
    if (!hostname.contains('alessiafrancischiello.com'))
        req.end();

    // var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    // if (ip == '127.0.0.1')
    //     req.end();

    if (action == '/counter') {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Hi, you are number " + count + " visitors");
        res.end();
    } else {
        var img = fs.readFileSync('./image.jpg');
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(img, 'binary');
        count++;
    }

});

server.listen(port, function() {
    console.log("App is running on port " + port);
});