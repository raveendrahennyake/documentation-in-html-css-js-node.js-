import { log } from 'node:console';
import {createServer} from 'node:http';

createServer((reqest,responce)=>{
    responce.write("<h1>Nimal</h1>")
    responce.end();

}).listen(4000,()=>{log("surver is running")});

