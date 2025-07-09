const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end(`<form action="/message" method="POST">
        <input type='text' name='username' />
        <button type='submit'>Add</button>
    </form>`);
  } else {
    if (url === "/message") {
      let dataChunks = [];
      req.on("data", (chunk) => {
        console.log(chunk);
        dataChunks.push(chunk);
      });

      req.on("end", () => {
        let formData = Buffer.concat(dataChunks).toString();
        let formValue = formData.split("=")[1];

        fs.writeFile("formDatavalue.txt", formValue, (err) => {
          if (err) throw err;
          res.statusCode = 302; //redirected
          res.setHeader("Location", "/read");
          res.end();
        });
      });
    }
    else if (url === "/read") {
        fs.readFile('formDatavalue.txt', (err, data) => {
            if(err) throw(err);

            console.log(data); // buffer

            const str = data.toString();
            
            res.end(`<h1>${str}</h1>`);
        })
    }

  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
