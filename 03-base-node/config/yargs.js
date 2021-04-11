const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        default: '/etc/passwd',
        describe: 'Number to multiply',
        type: 'number'
    })
    .option('l', {
        alias: 'list',
        default: false,
        describe: 'Show table in console',
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
// node app --base=9
// console.log(process.argv);
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');

// node app --base=9
// node app --base=8
// node app -b 8 
// console.log(process.argv);
// console.log(argv);
// console.log('base: yargs', argv.base);
module.exports = argv;

