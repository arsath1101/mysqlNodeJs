const http=require("http");
const app= require('./input')

const port=3073;
const server=http.createServer(app);
server.listen(port);

//server.listen(port);