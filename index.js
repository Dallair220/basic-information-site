const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(fs.readFileSync('./index.html', 'utf8'));
      break;
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(fs.readFileSync('./about.html', 'utf8'));
      break;
    case '/contact':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(fs.readFileSync('./contact.html', 'utf8'));
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write(fs.readFileSync('./404.html', 'utf8'));
  }

  res.end();
});

server.listen(3001, () => console.log('Server is running on port 3001'));
