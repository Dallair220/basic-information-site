const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const filename = '.' + (req.url === '/' ? '/index' : req.url) + '.html';

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('<h1>Error: 404</h1><a href="/">Back Home</a>');
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end(data);
  });
});

server.listen(3001, () => console.log('Server is running on port 3001'));
