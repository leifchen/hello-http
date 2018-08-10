const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
    console.log('request come', request.url)

    if (request.url === '/') {
        const html = fs.readFileSync('test.html', 'utf-8')
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end(html)
    }

    if (request.url === '/script.js') {
        response.writeHead(200, {
            'Content-Type': 'text/javascript',
            'Cache-Control': 'max-age=200000,no-cache',
            'Last-Modified': '123',
            'Etag': '777'
        })
        response.end('console.log("script loaded")')
    }
}).listen(3000)

console.log('server listening on port:3000')