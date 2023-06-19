import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const compress = async () => {
    await pipeline(createReadStream('./src/zip/files/fileToCompress.txt'), createGzip(), createWriteStream('./src/zip/files/archive.gz'));
};

await compress();