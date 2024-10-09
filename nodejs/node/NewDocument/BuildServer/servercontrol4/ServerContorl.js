
import e from 'express';
import { ReadFile } from '../Lib/readFile.js';

export const ServerControl = async (req, res) => {
    if (req.url === '/' && req.method === "GET") {
        try {
             res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(ReadFile(`../public/index.html`));
        } catch (error) {
            console.log(error)
        }
    } else {
       
        res.end('<h1>404 Not Found</h1>');
    }
};


