import http from 'http'
const PORT = 3000;

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.statusCode = 200;
    res.end('<h1>hello world</h1>');
});

server.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
});