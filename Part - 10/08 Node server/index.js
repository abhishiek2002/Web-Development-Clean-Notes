const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  res.setHeader('Content-Type', 'text/html');

  let responseContent = '';

  if (path === '/') {
    responseContent = '<h1>Hello World</h1>';
  } else if (path === '/pizza') {
    responseContent = '<h1>This is your pizza</h1>';
  } else if (path === '/home') {
    responseContent = '<h1>Welcome home</h1>';
  } else if (path === '/about') {
    responseContent = '<h1>Welcome to About Us</h1>';
  } else if (path === '/node') {
    responseContent = '<h1>Welcome to my Node Js project</h1>';
  } else {
    res.statusCode = 404;
    responseContent = '<h1>Page Not Found</h1>';
  }

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Simple Node Server</title>
      </head>
      <body>
        ${responseContent}
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
