const { createTable } = require('./helpers/multiply')

// node app --base=9
// console.log(process.argv);
const [, , arg3 = 'base=5'] = process.argv;
const [, base] = arg3.split('=');



// const base = 5;

createTable(base)
    .then(nameFile => console.log(nameFile, 'created'))
    .catch(err => console.log(err));

