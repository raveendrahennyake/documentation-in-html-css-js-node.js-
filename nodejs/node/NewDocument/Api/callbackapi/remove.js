import { rm } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath }from 'node:url';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const RemoveFile=(path)=>{
    rm(join(__dirname,`../../${path}`),(err)=>{
        if(err){
            console.log(err);
        }else {
            console.log("your file is removerd");
        }
    })
}

export default RemoveFile;