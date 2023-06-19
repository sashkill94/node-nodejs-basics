const parseEnv = () => {
    const envArr = Object.entries(process.env).filter((el) => el[0].startsWith('RSS_'));
    console.log(envArr.map(el => el.join('=')).join('; '));
};

parseEnv();