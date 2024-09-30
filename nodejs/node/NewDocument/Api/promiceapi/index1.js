import { dirname, join } from 'node:path';
import {fileURLToPath} from 'node:url';
import readFiles from './readfile.js';
import { log } from 'node:console';
import WriteFiles from './writefile.js';


const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

readFiles('documents.txt',(data)=>{
   const Newdata=String(data).split(" ");
   const NewOutPuts=Newdata.slice(1,Newdata.length-1).join (" ");
   const LastElements=Newdata[Newdata.length-1];
   const FirstName=Newdata[0];
    log(NewOutPuts);
   // log(LastElements);

   if(FirstName==="write"){
      WriteFiles(LastElements,NewOutPuts,(data)=>{log(data)});
   }

   
});
