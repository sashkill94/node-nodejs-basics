import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    const child = fork('./src/cp/files/script.js', args, {silent: true});
    child.stdout.pipe(process.stdout);
    process.stdin.pipe(child.stdin);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( [1, 2, 3]);
