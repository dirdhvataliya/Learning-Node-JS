import http from 'http'
const PORT = 3000;

const server = http.createServer((req,res)=>{
    // res.setHeader('Content-Type','text/html')
    // res.statusCode = 200;
    res.writeHead(500,{ 'Content-Type':'application/json' })
    res.end(JSON.stringify({messege:'server error'}));
});

server.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
});