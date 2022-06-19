const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // Solution 1
    // fs.readFile('test-file.txt', 'utf-8', (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // })

    // Solution 2: Streams
    // const fileStream = fs.createReadStream('test-file.txt', 'utf-8');
    // fileStream.on('data', (chunk) => {
    //     res.write(chunk);
    // })
    // fileStream.on('end', () => {
    //     res.end();
    // });
    // fileStream.on('error', err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('File not found');
    // });

    // Solution 3
     const readable = fs.createReadStream('test-file.txt');
     readable.pipe(res)
    //  readablleSourec.pipe(writableDestination);
});
server.listen(8000, '127.0.0.1', () => {
    console.log('Server is listening on port 8000');
})