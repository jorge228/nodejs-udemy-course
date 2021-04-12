const fs = require('fs');
const colors = require('colors');

const createTable = async (base = 5, list) => {

    try {
        let text = '';

        for (let i = 0; i <= 10; i++) {
            text += `${colors.red(base)} x ${i} = ${base * i}\n`;
        }

        if (list) console.log(text.green);

        fs.writeFileSync(`tabla-${base}.txt`, text);

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