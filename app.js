const http = require('http')


const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Home Page')
    }

    if(req.url === '/about'){
        res.end(`<h1>About Page</h1>`)
    }

    res.end(`<h1>Oops</h1>`)
})

server.listen(7000)