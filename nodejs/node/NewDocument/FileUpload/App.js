import { createServer } from 'node:http';
import { log } from 'node:console';
import { IncomingForm } from 'formidable';

createServer((req, res) => {
    if (req.method.toLowerCase() === 'post') {
        const form = new IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error processing the form');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Received: ${fields.name}, File: ${files.userfiles.originalFilename}`);
        });
    } else if (req.method.toLowerCase() === 'get') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>File Upload</title>
                </head>
                <body>
                    <form action="/" method="post" enctype="multipart/form-data">
                        <input type="text" name="name" placeholder="Enter your name">
                        <input type="file" name="userfiles">
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>`);
    }
}).listen(4000, () => {
    log("Server is running on port 4000");
});
