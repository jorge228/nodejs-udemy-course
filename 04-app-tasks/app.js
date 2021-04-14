require('colors');

const { inquirerMenu, pause } = require('./helpers/inquirer');
// const { showMenu, pause } = require('./helpers/messages');


const main = async () => {

    let opt = '';
    do {
        // opt = await showMenu();
        // console.log({ opt });
        // if (opt !== '0') await pause();
        // if (opt !== '0') await pause();
        
        opt = await inquirerMenu();
        console.log({ opt });
        console.log('\n');
        if (opt !== '0') await pause();
    } while (opt !== '0')

}

main();