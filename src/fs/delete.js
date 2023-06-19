import * as fs from 'fs';

const remove = async () => {
    fs.rm('./src/fs/files/fileToRemove.txt', (err) => {
        if (err) throw Error('FS operation failed');
    })
};

await remove();