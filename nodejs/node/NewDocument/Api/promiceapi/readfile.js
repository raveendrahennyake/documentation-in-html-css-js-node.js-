import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile,writeFile,appendFile,rm } from 'node:fs/promises';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const readFiles=(path,myfunction=()=>{})=>{
    readFile(join(__dirname,`../../../${path}`),{encoding:'utf-8'},).then((data,err)=>{
        if(err){
            console.log(err);
        }else {
            myfunction(data);
        }
    })
}

export default readFiles;