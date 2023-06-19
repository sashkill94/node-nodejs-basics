import * as fs from 'fs';

const read = async () => {
    fs.readFile('./src/fs/files/fileToRead.txt', 'utf8', (err, file) => {
        if (err) throw Error("FS operation failed");
        console.log(file);
    })
};

await read();