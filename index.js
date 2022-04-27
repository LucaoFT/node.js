const{createServer} = require("http")
let serve = createServer((request,response)=> {
    response.writeHead(200,{"Content-type":"text/html"});
    response.write('<h1>Hello World</h1>');
    response.end();
});
serve.listen(8000);
console.log("Servidor Iniciado !!");