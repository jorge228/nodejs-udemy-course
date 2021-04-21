require('dotenv').config();     // console.log(process.env);
require('colors');
const { inquirerMenu, pause, readInput, placesList } = require("./helpers/inquirer");
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
                const input = await readInput('Ciudad: ');
                // search places
                const places = await search.find(input);
                // select place
                const idPlaceSelect = await placesList(places);
                const placeSelect = places.find(x => x.id === idPlaceSelect);
                const { id, name, lng, lat } = placeSelect;
                // weather
                // show results
                // console.log({ id });
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', name);
                console.log('Latitud: ', lat);
                console.log('Longitud: ', lng);
                console.log('Temperatura: ', );
                console.log('Mínima: ',);
                console.log('Máxima: ',);
                break;
        }

        if (opt !== 0) await pause();

    } while (opt !== 0)
}

main();