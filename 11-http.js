const http= require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to Node')
    }
    if(req.url === '/contact'){
        res.end('Contact section')
    }

    res.end('This page does not exist')
})

server.listen(8080)