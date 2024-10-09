import { createServer } from 'node:http';
import { getpage } from './page/getpage.js';  

const PORT = process.env.PORT || 4000;

createServer( (req, res) => {
     getpage(req, res); 
}).listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
})