import { writeFile } from 'node:fs';
import { dirname, join } from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const WriteFile=(path,myfunction=(data)=>{})=>{
    writeFile(join(__dirname,`../../${path}`),"my new projects",'utf-8',(err)=>{
        if(err){
            console.log(err);
        }else {
            myfunction("your file is created");
        }

    })
}

export default WriteFile;