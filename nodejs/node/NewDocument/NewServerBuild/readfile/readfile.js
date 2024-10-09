import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const ReadFile = async (path) => {
    
    console.log("path is ",__dirname,path);

    try {
        const data = await readFile(join(__dirname,path), 'utf-8');
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }

}