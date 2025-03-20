import { createServer} from 'http'
const PORT = process.env.PORT;

const users = [
    {ide:1,name:'john doe'},
    {ide:2,name:'pablo escobar'},
    {ide:3,name:'vasco di gama'}
]

const server = createServer((req,res)=>{
    if(req.url==='/api/users' && req.method==='GET'){
        res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify(users));
        res.end();
    }

});

server.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})