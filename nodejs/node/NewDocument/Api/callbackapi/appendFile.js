import { appendFile } from 'node:fs';
import { dirname, join } from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const AppendFile=(path)=>{
    appendFile(join(__dirname,`../../${path}`),"my city is a NewYork city",(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("your data is append");
        }
    })
}

export default AppendFile;
