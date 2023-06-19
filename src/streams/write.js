import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';


const fileUrl = new URL('./files/fileToWrite.txt', import.meta.url);

const write = async () => {
    await pipeline(process.stdin, createWriteStream(fileUrl));
};

await write();