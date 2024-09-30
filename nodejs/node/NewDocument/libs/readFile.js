import { readFile } from 'node:fs';
import {dirname, join} from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const readFiles=(path,myfunction=()=>{})=>{
    readFile(join(__dirname,`../../${path}`),'utf-8',(err,data)=>{
        if (err){
            console.log(err);
        }else {
             myfunction(data)
        }
    }) 
}
export default readFiles;