import { log } from 'node:console';
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
log(__dirname)
export const ReadFile = async (filePath) => {
    try {
        const data = await readFile(join(__dirname,filePath), 'utf-8');
        return data;
    } catch (err) {
        console.error('Error reading file:', err);
        throw err; 
    }
};

