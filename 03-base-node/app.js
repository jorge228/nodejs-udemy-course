const { createTable } = require('./helpers/multiply');
const argv =require('yargs').argv;

// npm init for package.json
// npm run base3, from package.json
// npm install nodemon --save-dev only appears in devDependencies
// npm uninstall nodemon
// npm i colors@1.0.0
// npm update -> update all dependencies
// node app --help and --version

// node app --base=9
// console.log(process.argv);
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');

// node app --base=9
// node app --base 8
console.log(process.argv);
console.log(argv);
console.log('base: yargs', argv.base);


// const base = 5;

// createTable(base)
//     .then(nameFile => console.log(nameFile, 'created'))
//     .catch(err => console.log(err));

