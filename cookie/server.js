const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
    console.log('request come', request.url)

    const html = fs.readFileSync('test.html', 'utf-8')
    const host = request.headers.host
    if (host === 'test.com') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
            'Set-Cookie': ['id=123; max-age=2', 'name=LeifChen; domain=test.com']
        })
    }
    response.end(html)
}).listen(3000)

console.log('server listening on port:3000')