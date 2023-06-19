import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

const calculateHash = async () => {
    const file = await readFile('./src/hash/files/fileToCalculateHashFor.txt')
    const data = createHash('sha256').update(file).digest('hex');
    console.log(data);
};

await calculateHash();