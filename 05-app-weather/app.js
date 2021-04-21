require('dotenv').config();     // console.log(process.env);
const colors = require('colors');
const { inquirerMenu, pause, readInput, placesList } = require("./helpers/inquirer");
const Search = require('./model/search');

const main = async () => {

    const search = new Search();
    let opt;

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                // show message
                const input = await readInput('Ciudad: ');
                // search places
                const places = await search.find(input);
                // select place
                const idPlaceSelect = await placesList(places);
                if (idPlaceSelect === '0') continue;
                const placeSelect = places.find(x => x.id === idPlaceSelect);
                const { id, name, lng, lat } = placeSelect;

                // save in db
                search.addRecord(name);
                // weather
                const weather = await search.wheatherPlaceSelect(lat, lng);
                const { temperature, min, max, desc } = weather;
                // show results
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', name.green);
                console.log('Latitud: ', lat);
                console.log('Longitud: ', lng);
                console.log('Temperatura: ', temperature);
                console.log('Mínima: ', max);
                console.log('Máxima: ', min);
                console.log('Descripción: ', desc.green);

                break;

            case 2:
                search.recordUpperCase.forEach((place, i) => {
                    console.log(`${colors.green(++i + '.')} ${place}`);
                })
                break;
        }

        console.log();
        if (opt !== 0) await pause();

    } while (opt !== 0)
}

main();