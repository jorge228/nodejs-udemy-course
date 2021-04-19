require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { saveData, readData } = require('./helpers/saveDoc');
const Tasks = require('./models/tasks');
// const { showMenu, pause } = require('./helpers/messages');


const main = async () => {

    const tasks = new Tasks();
    let opt = '';

    const data = readData();

    if (data) tasks.createList(data);

    do {
        // opt = await showMenu();
        // console.log({ opt });
        // if (opt !== '0') await pause();
        // if (opt !== '0') await pause();

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // create task
                const desc = await readInput('Descripción:');
                tasks.create(desc);
                break;
            case '2':
                // show list task
                // console.log(tasks.listArray);
                tasks.printListFormat();
                break;
            case '3':
                // show completed
                tasks.printListByState(true);
                break;
            case '4':
                // show pending
                tasks.printListByState(false);
                break;
            case '5':

                break;
            case '6':

                break;
            case '0':

                break;
        }

        saveData(tasks.listArray);

        console.log('\n');
        if (opt !== '0') await pause();

    } while (opt !== '0')

}

main();