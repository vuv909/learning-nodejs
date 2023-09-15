// const http = require('http');

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('welcome to our home page')
//     }
//     if(req.url === '/about'){
//         res.end('Here is our short history')
//     }
//     res.end(`
//     <h1>Not exist</h1>
//     <a href="/">Back home</a>
//     `)
// })


// server.listen(5000)

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about') {
        res.end('mobile')
    }
    else{
    res.end('not found')
    }
}).listen(3000)