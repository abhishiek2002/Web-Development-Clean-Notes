const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.readFile("filecontent.txt", (err, data) => {
      let content;
      if (err) {
        content = undefined;
      } else {
        content = data;
      }

      const htmlCode = `<p>${content}</p>
        <form action="/message" method="POST" >
            <input type='text' name="content" />
            <button type='submit' >ADD</button>
        </form>`;

      res.end(htmlCode);
    });
  } else if (url === "/message" && method === "POST") {
    const formData = [];
    req.on("data", (chunk) => {
      formData.push(chunk); //buffer
    });

    req.on("end", () => {
      const formValue = Buffer.concat(formData).toString().split("=")[1];

      fs.writeFile("filecontent.txt", formValue, (err) => {
        if (err) throw err;
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
    });
  } else {
    res.statusCode = 404;
    res.end(`<h1>Page Not Found</h1>`);
  }
});

server.listen(3000, () => console.log("Server start at port 3000"));
