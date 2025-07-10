const http = require("http");
const route = require("./route")

route.tester();

const server = http.createServer(route.handler);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
