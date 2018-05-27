const http = require('http');

var port = process.env.PORT || 8000

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

server.listen(port, '0.0.0.0', function() {
    console.log("App is running on port " + port);
});