const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('This is our homepage')
    }

    if(req.url === '/about'){
        res.end('Here is our brief history')
    }

    res.end(`
        <h1>Oops!</h1>
        <p>Sorry! Page not found</p>
        <a href="/">Back home this way</a>`)
})

server.listen(4000)