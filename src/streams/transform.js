import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
    const reverseStr = (str) => str.split('').reverse().join('');
    const pipe = new Transform({
        transform (chunk, encoding, callback) {
            callback(null, reverseStr(chunk.toString()));
        }
    })

    await pipeline(process.stdin, pipe, process.stdout);
};

await transform();