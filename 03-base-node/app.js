const { createTable } = require('./helpers/multiply');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        default: '/etc/passwd',
        describe: 'x marks the spot',
        type: 'number'
    })
    .option('l', {
        alias: 'list',
        default: false,
        describe: 'show table in console',
        type: 'boolean'
    })
    .check((argv, options) => {
        const filePaths = argv._;
        if (isNaN(argv.b)) {
            throw new Error("Base must be a number.");
        } else {
            return true; // tell Yargs that the arguments passed the check
        }
    })
    .argv;

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
// node app --base=8
// node app -b 8 
// console.log(process.argv);
// console.log(argv);
console.log('base: yargs', argv.base);

// const base = 5;

// node app -b 8 -l
createTable(argv.base, argv.l)
    .then(nameFile => console.log(nameFile, 'created'))
    .catch(err => console.log(err));

