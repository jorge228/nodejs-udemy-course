require('colors');
const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const Search = require('./model/search');

const main = async () => {

    const search = new Search();
    let opt;

    do {

        opt = await inquirerMenu();
        console.log({ opt });

        switch (opt) {
            case 1:
                // show message
                const place = await readInput('Ciudad: ');
                await search.find(place);
                // search places
                // select place
                // weather
                // show results
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ',);
                console.log('Latitud: ',);
                console.log('Longitud: ',);
                console.log('Temperatura: ',);
                console.log('Mínima: ',);
                console.log('Máxima: ',);
                break;
        }

        if (opt !== 0) await pause();

    } while (opt !== 0)
}

main();