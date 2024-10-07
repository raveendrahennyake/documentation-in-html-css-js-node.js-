import { dirname } from 'node:path';
import {fileURLToPath} from 'node:url';
import readfile from './callbackapi/ReadFile.js';
import WriteFile from './callbackapi/writeFile.js';
import AppendFile from './callbackapi/appendFile.js';
import RemoveFile from './callbackapi/remove.js';


const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);


 readfile('documents.txt',(data)=>{console.log(data)});
 WriteFile('write2.txt',"my new Project is node projects",(err)=>{console.log(err)});

// AppendFile('write.txt');

RemoveFile('write.txt');


