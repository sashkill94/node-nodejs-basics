import { cpus } from 'os';
import { Worker } from 'worker_threads';



const performCalculations = async () => {

    const calculate = (workerData) => new Promise((resolve) => {
    const worker = new Worker('./src/wt/worker.js', {workerData});

    worker.on('message', data => resolve({status: 'resolved', data}));
    worker.on('error', data => resolve({status: 'error', data: null }));

});

const resultArr = [];

for (let i = 0; i < cpus().length; i++) {
    resultArr.push(calculate(10 + i));
}

const result = await Promise.all(resultArr);
console.log(result);
};

await performCalculations();