var http = require('http');
var lanthu = 0;

function XuLyWEB(req, res) {
    lanthu++;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Server V3 - Hello World! '
    + " <br> http://127.0.0.1:8080/ "
    + " <br> localhost : 8080"
    + " <br> lan thu - " + lanthu
    );
    console.log("\n\t ...lan thu - " + lanthu);
};
http.createServer(XuLyWEB).listen(8080);
console.log("Nodejs dang RUN o Server")