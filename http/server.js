const http = require("http");

const handler = function(request, response) {
  console.log(request);
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("<!DOCTYPE html>");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Welcome to Node</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Welcome to Node - Changed!");
  response.write("</body>");
  response.write("</html>");
  response.end();
};

const server = http.createServer(handler);
server.listen(3000);
