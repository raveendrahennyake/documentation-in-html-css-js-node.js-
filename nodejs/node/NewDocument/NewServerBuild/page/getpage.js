import { ReadFile } from "../readfile/readfile.js";

export const getpage = async (req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        try {
            const content = await ReadFile("../upload/index.html");
            console.log("contentssi",content);
            if (content) {
                res.writeHead(200, { 'Content-Type': 'text/html' });  
                res.end(content);
            } else {
                res.writeHead(500, { 'Content-Type': 'text/html' });  
                res.end("<h1>500: Internal Server Error</h1>");
            }
        } catch (err) {
            console.log(err);
            res.writeHead(500, { 'Content-Type': 'text/html' });  
            res.end("<h1>500: Internal Server Error</h1>");
        }
    }
  
    
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });  
        res.end("<h1>404: Page Not Found</h1>");
    }
};

