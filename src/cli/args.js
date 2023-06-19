const parseArgs = () => {
  const result  = process.argv.reduce((acc, val, index, arr) => {
    if (val.startsWith("--")) {
      acc.push(val + " is " + arr[index + 1]);
    }
    return acc;
  }, []);
  console.log(result.join(', '));
};

parseArgs();
