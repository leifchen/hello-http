const http = require('http')

http.createServer((request, response) => {
    console.log('request come', request.url)
    response.end('success')
}).listen(3000)

console.log('server listening on port:3000')