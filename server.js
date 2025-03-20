import http from 'http'
const PORT = process.env.PORT;

const server = http.createServer((req,res)=>{
    try{
        if(req.method==='GET'){
            if(req.url === '/'){
                res.writeHead(200,{ 'Content-Type':'text/html' });
                res.end('<h1>Homepage</h1>')
            }
            else if(req.url==='/about'){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end('<h1>About</h1>')
            }
            else{
                res.writeHead(404,{'Content-Type':'text/html'});
                res.end('<h1>Error! Page not found</h1>')
            }
        }
        else{
            throw new Error('method not allowed') 
        }
    }
    catch(error){
        res.writeHead(500,{'Content-Type':'text/plain'});
        res.end('Error! Page not found')
    }
    
});

server.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
});