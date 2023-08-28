const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log("The request has been made from the browser to the server");

    res.setHeader('Content-Type', 'text/html');

    let path = './views';
    switch (req.url) {
        case '/':
            path += '/index.html';
            break;
        case '/about':
            path += '/about.html';
            break;
        default:
            path += '/404.html';
            break;
    }

    // Read the file asynchronously
    fs.readFile(path, (err, content) => {
        if (err) {
            console.log(err);
            res.writeHead(404); // Set response status code to 404
            res.end('File not found');
        } else {
            res.end(content); // Send the content of the file as the response
        }
    });

    // No need to call `res.end()` here, as it's already called in the readFile callback
});

server.listen(3000, 'localhost', () => {
    console.log("Server is listening on port 3000, requests are coming from localhost");
});
