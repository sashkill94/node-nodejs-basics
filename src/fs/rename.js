import * as fs from 'fs';

const rename = async () => {
    fs.access('./src/fs/files/properFilename.md', (err) => {
        if (!err) throw Error('FS operation failed');
        fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md', (err) => {
            if (err) throw Error('FS operation failed');
        })
    });
};

await rename();