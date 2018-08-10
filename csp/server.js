const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
    console.log('request come', request.url)

    if (request.url === '/') {
        const html = fs.readFileSync('test.html', 'utf-8')
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Security-Policy': 'script-src \'self\'; form-action \'self\';report-uri /report'
        })
        response.end(html)
    } else {
        response.writeHead(200, {
            'Content-Type': 'application/javascript'
        })
        response.end('console.log("script loaded")')
    }

}).listen(3000)

console.log('server listening on port:3000')