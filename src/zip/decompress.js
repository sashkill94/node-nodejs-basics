import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
    await pipeline(createReadStream('./src/zip/files/archive.gz'), createGunzip(), createWriteStream('./src/zip/files/fileToCompress.txt'));
};

await decompress();