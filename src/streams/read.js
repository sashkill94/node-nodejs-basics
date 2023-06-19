import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const fileUrl = new URL('./files/fileToRead.txt', import.meta.url);

const read = async () => {
    await pipeline(createReadStream(fileUrl), process.stdout);
};

await read();