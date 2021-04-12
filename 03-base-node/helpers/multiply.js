const fs = require('fs');
const colors = require('colors');

const createTable = async (base = 5, list, until) => {

    try {
        let text = '';

        for (let i = 0; i <= until; i++) {
            // example in txt: [31m9[39m x 2 = 18
            text += `${colors.red(base)} x ${i} = ${base * i}\n`;
        }

        if (list) console.log(text.green);

        fs.writeFileSync(`./print/tabla-${base}.txt`, text);

        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }

    // fs.writeFile(`tabla-${base}.txt`, text, (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    // });

}

module.exports = {
    // createTable: createTable
    createTable
}