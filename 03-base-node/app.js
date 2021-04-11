const { createTable } = require('./helpers/multiply');
const argv = require('./config/yargs');


// npm init for package.json
// npm run base3, from package.json
// npm install nodemon --save-dev only appears in devDependencies
// npm uninstall nodemon
// npm i colors@1.0.0
// npm update -> update all dependencies
// node app --help and --version



// const base = 5;

// node app -b 8 -l
createTable(argv.base, argv.l)
    .then(nameFile => console.log(nameFile, 'created'))
    .catch(err => console.log(err));

