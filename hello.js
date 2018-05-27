const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');
const url = require('url');
var count = 0;

const server = http.createServer((req, res) => {
    var request = url.parse(req.url, true);
    var action = request.pathname;

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

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});