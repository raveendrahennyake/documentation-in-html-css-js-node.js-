import { createServer } from 'node:http';
import { ServerControl } from '../servercontrol4/ServerContorl.js';

const PORT = process.env.PORT || 4000;

createServer((req, res) => {
    ServerControl(req, res);
   
   
}).listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
