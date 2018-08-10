const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
    console.log('request come', request.url)

    const html = fs.readFileSync('test.html', 'utf-8')
    const img = fs.readFileSync('test.jpg')
    if (request.url === '/') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'Connection': 'close'
        })
        response.end(html)
    } else {
        response.writeHead(200, {
            'Content-Type': 'image/jpg',
            'Connection': 'close'
        })
        response.end(img)
    }
}).listen(3000)

console.log('server listening on port:3000')