const cluster = require("cluster");
const http = require("http");
const cpus = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master process:${process.pid}`);
  for (let i = 1; i <= cpus; i++) {
    cluster.fork();
  }

  cluster.on("exit", function(worker, code, signal) {
    console.log(`worker ${worker.process.pid} died`);
    console.log(`Restarting`);
    cluster.fork();
  });
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("hello world\n" + process.pid);
    })
    .listen(8000);

  console.log(`Worker ${process.pid} started`);
}
