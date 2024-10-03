import { log } from 'node:console'
import {createServer} from 'node:http'
import { pageselection } from './pageselection.js';

createServer((req,res)=>{

   pageselection(req.url,res)

}).listen(4000,()=>{log("your server is running")})