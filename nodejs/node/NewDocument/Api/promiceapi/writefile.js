import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile,writeFile,appendFile,rm } from 'node:fs/promises';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const WriteFiles=(path,data,myfunction=(d)=>{d})=>{
    writeFile(join(__dirname,`../../../${path}`),data,{encoding:'utf-8'}).then((err)=>{
        if(err){
            console.log(err);
        }else {
            myfunction("your data is writed");
        }
    })
}
export default WriteFiles;