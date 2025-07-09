const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if(url === '/'){
    res.setHeader('Content-Type','text/html');
    res.end(`<form action="/message" method="POST">
        <input type='text' name='username' />
        <button type='submit'>Add</button>
    </form>`)
  }
  else {
    if(url === '/message'){
        res.end('<h1>Hello </h1>')
    }
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
